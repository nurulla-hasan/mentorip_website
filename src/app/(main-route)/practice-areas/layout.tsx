import type { ReactNode } from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Practice Areas",
  description:
    "Comprehensive legal practice areas including IP Litigation, Criminal Litigation, Civil & Commercial Litigation, and more — MentorIP Law Firm.",
};

export default function LitigationLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <div className="md:max-w-6xl md:mr-auto md:ml-6 lg:ml-20 px-4 md:px-0">
      {children}
    </div>
  );
}
