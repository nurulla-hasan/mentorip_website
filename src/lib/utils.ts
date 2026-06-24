import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { format } from "date-fns";
import { toast } from "sonner";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


// Success Toast
export const SuccessToast = (msg: string) => {
  toast.success(msg);
};

// Error Toast
export const ErrorToast = (msg: string) => {
  toast.error(msg);
};

// Warning Toast
export const WarningToast = (msg: string) => {
  toast.warning(msg);
};

// Info Toast
export const InfoToast = (msg: string) => {
  toast.info(msg);
};

// Get Initials
export const getInitials = (name: string) => {
  if (!name) return "NA";
  const parts = name.trim().split(/\s+/);
  const first = parts[0]?.[0] || "N";
  const second = parts[1]?.[0] || parts[0]?.[1] || "A";
  return (first + second).toUpperCase();
};

// Format Date
export const formatDate = (date: string | Date) => {
  if (!date) return "N/A";
  return format(new Date(date), "dd MMM yyyy");
};


// Time Ago
export const timeAgo = (createdAt: string) => {
  if (!createdAt) return "";
  const s = Math.floor((Date.now() - new Date(createdAt).getTime()) / 1000);
  if (s < 60) return "Just now";
  const m = Math.floor(s / 60);
  if (m < 60) return `${m}m ago`;
  const h = Math.floor(m / 60);
  if (h < 24) return `${h}h ago`;
  const d = Math.floor(h / 24);
  return `${d}d ago`;
};

// Generate Slug
export const generateSlug = (title: string) => {
  return title
    .toLowerCase()
    .replace(/[^\w\s-]/g, "") // Remove special chars
    .replace(/[\s_-]+/g, "-") // Replace spaces/underscores with -
    .replace(/^-+|-+$/g, ""); // Always remove leading and trailing hyphens
};

// ============================================
// 🔧 Text Helpers
// ============================================

// Truncate text with ellipsis
export const truncate = (text: string, maxLength = 100) => {
  if (!text || text.length <= maxLength) return text;
  return text.slice(0, maxLength).trimEnd() + "...";
};

// Strip HTML tags from string
export const stripHtml = (html: string) => {
  if (!html) return "";
  return html.replace(/<[^>]*>/g, "");
};

// Pluralize words
export const pluralize = (count: number, singular: string, plural?: string) => {
  return count === 1 ? singular : plural ?? `${singular}s`;
};

// ============================================
// 💰 Price Helpers
// ============================================

// Format price with currency
export const formatPrice = (price: number, currency = "USD") => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(price);
};

// Calculate total price for nights
export const calculateTotalPrice = (pricePerNight: number, nights: number) => {
  return pricePerNight * nights;
};

// ============================================
// 🔄 Array / Number Helpers
// ============================================

// Generate range array [1, 2, 3, ...]
export const range = (start: number, end: number) => {
  return Array.from({ length: end - start + 1 }, (_, i) => start + i);
};

// Clamp number between min and max
export const clamp = (value: number, min: number, max: number) => {
  return Math.min(Math.max(value, min), max);
};

// ============================================
// ⏱ Async / Performance Helpers
// ============================================

// Async sleep/delay
export const sleep = (ms: number) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};


// ============================================
// 🌐 URL / Validation Helpers
// ============================================

// Check if string is a valid URL
export const isValidUrl = (url: string) => {
  try {
    new URL(url);
    return true;
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (_) {
    return false;
  }
};

// Get image URL with fallback
export const getImageUrl = (url: string | null | undefined, fallback = "/placeholder.svg") => {
  if (!url || !isValidUrl(url)) return fallback;
  return url;
};
