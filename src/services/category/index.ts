/* eslint-disable @typescript-eslint/no-explicit-any */
'use server';

import { buildQueryString } from '@/lib/buildQueryString';
import { serverFetch } from '@/lib/fetcher';
import { Query } from '@/types/global.types';
import type { ApiResponse, Category, CategoryWithPosts } from '@/types/category.type';

export const getAllCategories = async (): Promise<ApiResponse<Category[]>> => {
  try {
    const result = await serverFetch<ApiResponse<Category[]>>('/category', {
      revalidate: 86400,
      isPublic: true,
    });
    return result;
  } catch (error: any) {
    return { success: false, message: error?.message || "Failed to fetch categories", data: [] };
  }
};

// GET SINGLE CATEGORY WITH POSTS (by slug)
export const getCategoryBySlug = async (slug: string, query: Query = {}): Promise<ApiResponse<CategoryWithPosts | null>> => {
  try {
    return await serverFetch<ApiResponse<CategoryWithPosts | null>>(`/category/with-posts/${slug}${buildQueryString(query)}`, {
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