/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import { serverFetch } from "@/lib/fetcher";
import { updateTag } from "next/cache";
import { FieldValues } from "react-hook-form";

// RETRIEVE INDUSTRIES WE SERVE DATA
export const getIndustriesWeServe = async () => {
  try {
    return await serverFetch(`/industries-we-serve-comp/retrieve`, {
      revalidate: 86400,
      isPublic: true,
      tags: ["INDUSTRIES-COMP"],
    });
  } catch {
    return {
      success: false,
      data: null,
    };
  }
};

// UPSERT (CREATE OR UPDATE) INDUSTRIES WE SERVE DATA
export const upsertIndustriesWeServe = async (data: FieldValues) => {
  try {
    const result = await serverFetch<any>(`/industries-we-serve-comp/create-or-update`, {
      method: "PUT",
      body: data,
    });

    if (result?.success) updateTag("INDUSTRIES-COMP");
    return result;
  } catch (error: unknown) {
    const message =
      error instanceof Error ? error.message : "Failed to update industries section";
    return { success: false, message };
  }
};
