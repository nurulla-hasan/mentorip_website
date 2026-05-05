export function JsonLd() {
  const baseUrl = "https://mentorip.com"; // Replace with actual production URL if different

  const lawFirmSchema = {
    "@context": "https://schema.org",
    "@type": "LawBusiness",
    "name": "MENTOR IP",
    "alternateName": "Mentor Intellectual Property",
    "url": baseUrl,
    "logo": `${baseUrl}/logo.png`,
    "image": `${baseUrl}/og-image.png`,
    "description": "MENTOR IP is a specialized Intellectual Property Law Firm in Bangladesh providing expert legal services for Patents, Trademarks, Copyrights, and Designs.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Jiban Bima Bhaban (1st Floor), 121 Motijheel Commercial Area",
      "addressLocality": "Dhaka",
      "postalCode": "1000",
      "addressCountry": "BD"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+8801613336333",
      "contactType": "Customer Service",
      "email": "info@mentorip.com"
    },
    "knowsAbout": [
      "Intellectual Property Law",
      "Patent Filing",
      "Trademark Registration",
      "Copyright Protection",
      "Industrial Designs",
      "IP Litigation"
    ]
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "MentorIP",
    "url": baseUrl,
    "description": "Global Intellectual Property Law Firm in Bangladesh specializing in Trademarks, Patents, Copyrights, and Industrial Designs."
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(lawFirmSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema),
        }}
      />
    </>
  );
}
