import type { ReactNode } from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign In to Client Portal",
  description:
    "Access your personalized client portal to track your IP applications, manage trademarks, patents, and communicate with your legal team at MentorIP.",
};

export default function AuthLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <div className="h-screen w-screen flex items-center justify-center">
      {children}
    </div>
  );
}
