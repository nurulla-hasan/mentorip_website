import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/providers/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import NextTopLoader from 'nextjs-toploader';
import { AIChat } from "@/components/chat/AIChat";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MENTOR IP - Intellectual Property Law Firm",
  description: "Specialized IP Law Firm in Bangladesh",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-background`}
      >
        <NextTopLoader
          color="#2299DD"
          height={3}
          showSpinner={false}
        />
        <Toaster position="bottom-right" richColors />
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
        >
          {children}
          <AIChat />
        </ThemeProvider>
      </body>
    </html>
  );
}
