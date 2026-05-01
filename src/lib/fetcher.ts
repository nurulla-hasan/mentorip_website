import { cookies } from "next/headers";
import { revalidateTag, updateTag } from "next/cache";

type ServerFetchOptions = Omit<RequestInit, "body"> & {
  body?: unknown;
  isPublic?: boolean;
  persistCookies?: boolean;
  revalidate?: number | false;
  tags?: string[];
  /**
   * "updateTag": Immediate expiration (Best for Server Actions)
   * "revalidateTag": Stale-while-revalidate (Best for background updates)
   */
  invalidateMode?: "updateTag" | "revalidateTag";
  updateTag?: string | string[];
  next?: NextFetchRequestConfig;
};

export type ApiError = Error & {
  status: number;
  data: unknown;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const serverFetch = async <T = any>(
  endpoint: string,
  options: ServerFetchOptions = {},
): Promise<T> => {
  const {
    isPublic = false,
    body: rawBody,
    headers,
    method = "GET",
    revalidate,
    updateTag: tagsToInvalidate,
    invalidateMode = "updateTag",
    tags,
    next,
    persistCookies = false,
    ...rest
  } = options;

  const baseUrl = process.env.NEXT_PUBLIC_BASE_API;
  if (!baseUrl) throw new Error("NEXT_PUBLIC_BASE_API is not defined");

  const defaultHeaders: Record<string, string> = {};

  // Auth Handling (Next.js 15+ awaits cookies)
  if (!isPublic) {
    const cookieStore = await cookies();
    const accessToken = cookieStore.get("accessToken")?.value;
    if (accessToken) {
      defaultHeaders["Authorization"] = `Bearer ${accessToken}`;
    }
  }

  // Handle body
  let body = rawBody;
  if (body && typeof body === "object" && !(body instanceof FormData)) {
    body = JSON.stringify(body);
    defaultHeaders["Content-Type"] = "application/json";
  }

  const url = `${baseUrl}${endpoint}`;

  try {
    const res = await fetch(url, {
      ...rest,
      method,
      ...(body ? { body: body as BodyInit } : {}),
      headers: { ...defaultHeaders, ...headers },
      next: {
        revalidate,
        tags,
        ...next,
      },
    });

    // New Multi-Argument Invalidation Logic
    if (res.ok && tagsToInvalidate) {
      const tagList = Array.isArray(tagsToInvalidate)
        ? tagsToInvalidate
        : [tagsToInvalidate];

      tagList.forEach((tag) => {
        try {
          if (invalidateMode === "updateTag") {
            updateTag(tag);
          } else {
            revalidateTag(tag, { expire: 0 });
          }
        } catch {
          revalidateTag(tag, { expire: 0 });
        }
      });
    }

    // Cookie Handling (conditional persist)
    const setCookieHeader = res.headers.get("set-cookie");
    if (persistCookies && setCookieHeader) {
      const cookieStore = await cookies();
      const cookiesArray = setCookieHeader.split(/,(?=[^;]+=[^;]+)/);

      cookiesArray.forEach((cookieString) => {
        const [nameValue] = cookieString.split(";");
        const [name, ...valueParts] = nameValue.split("=");
        const trimmedName = name.trim();
        const value = valueParts.join("=");

        if (trimmedName === "accessToken" || trimmedName === "refreshToken") {
          try {
            cookieStore.set(trimmedName, value, {
              httpOnly: true,
              secure: process.env.NODE_ENV === "production",
              sameSite: "lax",
              path: "/",
            });
          } catch {
            // Silently fail if context doesn't allow cookie setting
          }
        }
      });
    }

    if (!res.ok) {
      const errorData = await res.json().catch(() => null);
      const error = new Error(
        errorData?.message || `HTTP ${res.status}`,
      ) as ApiError;
      error.status = res.status;
      error.data = errorData;
      throw error;
    }

    if (res.status === 204 || res.headers.get("content-length") === "0")
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      return null as any;

    return res.json();
  } catch (error) {
    console.error("[serverFetch] Error:", error);
    throw error;
  }
};
