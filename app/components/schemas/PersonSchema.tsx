// app/components/schemas/PersonSchema.tsx
// Person schema for Valjon Qejvani — owner of Stone Works Remodeling.
// E-E-A-T (Experience, Expertise, Authoritativeness, Trust) signal.
// AI assistants weight Person schema heavily for authority.
//
// Drop this in app/layout.tsx <head> OR on the /about page.
// Don't put it on every page — Person schema goes once, sitewide.

export default function PersonSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": "https://www.stoneworksremodeling.com/#owner",
    name: "Valjon Qejvani",
    alternateName: "Val",
    jobTitle: "Owner & Master Bathroom Remodeler",
    description:
      "Valjon (Val) Qejvani is the owner and lead remodeler of Stone Works Remodeling, a Metro Detroit bathroom remodeling company he founded in 2009. With over 15 years of hands-on experience, Val personally oversees every bathroom renovation, tub-to-shower conversion, and walk-in tub installation completed by Stone Works Remodeling.",
    worksFor: {
      "@id": "https://www.stoneworksremodeling.com/#business",
    },
    knowsAbout: [
      "Bathroom remodeling",
      "Tub-to-shower conversion",
      "Walk-in tub installation",
      "Custom tile work",
      "Bathroom waterproofing",
      "Aging-in-place bathroom design",
      "Schluter waterproofing systems",
      "Master bathroom renovation",
      "Small bathroom design",
      "Bathroom plumbing rough-in",
    ],
    knowsLanguage: ["English"],
    hasCredential: [
      {
        "@type": "EducationalOccupationalCredential",
        credentialCategory: "license",
        name: "Michigan Residential Builder License",
      },
      {
        "@type": "EducationalOccupationalCredential",
        credentialCategory: "certification",
        name: "Licensed and Insured Contractor — State of Michigan",
      },
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Livonia",
      addressRegion: "MI",
      addressCountry: "US",
    },
    telephone: "+12483468926",
    email: "val@stoneworksremodeling.com",
    image: "https://www.stoneworksremodeling.com/team/val.jpg",
    sameAs: [
      "https://www.linkedin.com/company/stoneworkremodeling",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}