"use server";

import { serverFetch } from "@/lib/fetcher";

// RETRIEVE INDUSTRIES WE SERVE DATA
export const getIndustriesWeServe = async () => {
  try {
    return await serverFetch(`/industries-we-serve-comp/retrieve`, {
      revalidate: 86400,
      isPublic: true,
    });
  } catch {
    return {
      success: false,
      data: null,
    };
  }
};

