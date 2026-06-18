import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Services - Trademark, Patent & Copyright Solutions",
  description:
    "Explore MentorIP's full suite of Intellectual Property services: Trademark Registration, Patent Filing, Copyright Protection, Industrial Design, IP Litigation, Geographical Indication, IP Due Diligence, and Freedom to Operate (FTO) analysis.",
  keywords: [
    "IP Services Bangladesh",
    "Trademark Registration Bangladesh",
    "Patent Filing Bangladesh",
    "Copyright Protection Dhaka",
    "IP Litigation Bangladesh",
    "Industrial Design Registration",
    "Geographical Indication",
    "IP Due Diligence",
    "Freedom to Operate Analysis",
    "MentorIP Services",
  ],
  openGraph: {
    title: "Our Services - Trademark, Patent & Copyright Solutions",
    description:
      "World-class IP legal services: Trademarks, Patents, Copyrights, Designs, Litigation & more in Bangladesh and worldwide.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Services - IP Legal Solutions",
    description:
      "Comprehensive Intellectual Property services in Bangladesh by MentorIP.",
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

