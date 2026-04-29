"use server";

import { serverFetch } from "@/lib/fetcher";

// RETRIEVE WHO WE ARE DATA
export const getWhoWeAre = async () => {
  try {
    return await serverFetch(`/about-who-we-are-comp/retrieve`, {
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

