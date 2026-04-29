import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/providers/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import NextTopLoader from 'nextjs-toploader';
import { AIChat } from "@/components/chat/AIChat";

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
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
        className={`${lato.variable} font-sans antialiased min-h-screen bg-background`}
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
