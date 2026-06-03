// app/components/SeoSchema.tsx
export default function SeoSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "@id": "https://www.stoneworksremodeling.com/#business",
    name: "Stone Works Remodeling",
    url: "https://www.stoneworksremodeling.com/",
    telephone: "+12489552952",
    priceRange: "$5000-$50000",
    image:
      "https://stoneworksremodlling.s3.ap-south-1.amazonaws.com/webp/NctOfmDbqGoQGM2Qm9a8C.webp",
    logo:
      "https://stoneworksremodlling.s3.ap-south-1.amazonaws.com/webp/logo.webp",
    address: {
      "@type": "PostalAddress",
      addressRegion: "MI",
      addressCountry: "US",
    },
    areaServed: [
      "Detroit",
      "Livonia",
      "Rochester",
      "Troy",
      "Sterling Heights",
      "Royal Oak",
      "Birmingham",
      "Bloomfield Hills",
      "Farmington Hills",
      "Warren",
      "Dearborn",
      "Canton",
      "Novi",
      "Southfield",
      "Westland",
    ],
    sameAs: [
      "https://www.instagram.com/stoneworksremodeling",
      "https://www.youtube.com/@stoneworksremodeling",
      "https://www.facebook.com/stoneworksremodeling", // Added Facebook
      "https://www.linkedin.com/company/stone-works-remodeling", // Added LinkedIn if applicable
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}