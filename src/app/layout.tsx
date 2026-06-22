import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { ThemeProvider } from "@/providers/theme-provider";
import { LanguageProvider } from "@/context/LanguageContext";
import { Toaster } from "@/components/ui/sonner";
import NextTopLoader from 'nextjs-toploader';
import { AIChat } from "@/components/chat/AIChat";
import { JsonLd } from "@/components/seo/json-ld";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://mentorip.com"),
  title: {
    default: "MENTOR IP | Intellectual Property Law Firm in Bangladesh",
    template: "%s | MENTOR IP"
  },
  description: "MENTOR IP is a premier Intellectual Property Law Firm in Bangladesh. We provide specialized legal services in Patents, Trademarks, Copyrights, Designs, and IP Litigation.",
  keywords: [
    "Intellectual Property Law Firm Bangladesh",
    "Patent Attorney Bangladesh",
    "Trademark Registration Bangladesh",
    "Copyright Protection Dhaka",
    "IP Litigation Lawyers Bangladesh",
    "MENTOR IP",
    "Law Firm in Dhaka",
    "Industrial Design Protection",
    "Intellectual Property Rights Bangladesh"
  ],
  authors: [{ name: "MENTOR IP" }],
  creator: "MENTOR IP",
  publisher: "MENTOR IP",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://mentorip.com",
    siteName: "MENTOR IP",
    title: "MENTOR IP | Specialized IP Law Firm in Bangladesh",
    description: "Expert legal services for Patents, Trademarks, and Copyrights in Bangladesh.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "MENTOR IP Law Firm",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MENTOR IP | Intellectual Property Law Firm",
    description: "Specialized IP Law services in Bangladesh.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "Hdp3VG5AblTzm3hcYdYvZ-rOHPg6Q9F2_RzPPIbXwxQ",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Google Tag Manager */}
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-T8ZRP2X8');`,
          }}
        />
      </head>
      <body
        className={`${poppins.variable} font-sans antialiased min-h-screen bg-background`}
      >
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-T8ZRP2X8"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <JsonLd />
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
          <LanguageProvider>
            {children}
            <AIChat />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
