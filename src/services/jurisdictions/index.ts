"use server";

import { serverFetch } from "@/lib/fetcher";

// RETRIEVE JURISDICTIONS DATA
export const getJurisdictions = async () => {
  try {
    return await serverFetch(`/jurisdictions-comp/retrieve`, {
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
