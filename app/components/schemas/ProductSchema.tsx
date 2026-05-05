// app/components/schemas/ProductSchema.tsx
// Product schema for fixed-price bathroom remodeling packages.
// Marathon Bath ranks for "$7,995 tub-to-shower" partly because their pricing
// is structured data. This makes your packages eligible for rich results
// (price snippet in Google search) and AI assistants can cite specific prices.
//
// Usage:
//   <ProductSchema
//     name="Tub-to-Shower Conversion"
//     description="Complete tub-to-shower conversion..."
//     image="https://www.stoneworksremodeling.com/bathroom/bath3.jpeg"
//     price="7995"
//     priceCurrency="USD"
//     url="https://www.stoneworksremodeling.com/services/shower-conversions"
//   />

interface ProductSchemaProps {
  name: string;
  description: string;
  image: string;              // Absolute URL
  price: string;              // e.g. "7995"
  priceCurrency?: string;     // Default "USD"
  url: string;                // Service page URL
  category?: string;          // e.g. "Home Improvement Service"
  ratingValue?: string;       // e.g. "5.0"
  reviewCount?: string;       // Use REAL number from GMB
}

export default function ProductSchema({
  name,
  description,
  image,
  price,
  priceCurrency = "USD",
  url,
  category = "Home Improvement Service",
  ratingValue,
  reviewCount,
}: ProductSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name,
    description,
    image,
    brand: {
      "@type": "Brand",
      name: "Stone Works Remodeling",
    },
    category,
    offers: {
      "@type": "Offer",
      url,
      price,
      priceCurrency,
      priceValidUntil: getNextYearEnd(),
      availability: "https://schema.org/InStock",
      itemCondition: "https://schema.org/NewCondition",
      seller: {
        "@id": "https://www.stoneworksremodeling.com/#business",
      },
      areaServed: {
        "@type": "AdministrativeArea",
        name: "Metro Detroit, Michigan",
      },
    },
    ...(ratingValue && reviewCount
      ? {
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue,
            reviewCount,
            bestRating: "5",
            worstRating: "1",
          },
        }
      : {}),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

function getNextYearEnd(): string {
  const next = new Date();
  next.setFullYear(next.getFullYear() + 1);
  next.setMonth(11, 31);
  return next.toISOString().split("T")[0];
}

// Pre-built product schemas for the 3 main service offerings.
// Drop into the homepage or services page.
export function HomepageProductSchemas() {
  return (
    <>
      <ProductSchema
        name="Tub-to-Shower Conversion — Metro Detroit"
        description="Complete tub-to-shower conversion including demolition, waterproofing, custom tile installation, glass enclosure, and 5-year warranty. Completed in 3-5 days. Serving all of Metro Detroit."
        image="https://www.stoneworksremodeling.com/bathroom/bath3.jpeg"
        price="7995"
        url="https://www.stoneworksremodeling.com/services/shower-conversions"
      />
      <ProductSchema
        name="Complete Bathroom Remodel — Metro Detroit"
        description="Full bathroom renovation including tile, vanity, plumbing fixtures, lighting, and finish work. Custom designs, transparent pricing, completed in 5-10 business days. Serving Wayne, Oakland, and Macomb Counties."
        image="https://www.stoneworksremodeling.com/bathroom/bath1.jpeg"
        price="8000"
        url="https://www.stoneworksremodeling.com/services/bathroom-remodeling"
      />
      <ProductSchema
        name="Walk-in Tub Installation — Metro Detroit"
        description="Accessible walk-in tub installation with safety features for seniors and those with mobility needs. Includes door entry, safety grab bars, therapeutic jets, and anti-slip flooring."
        image="https://www.stoneworksremodeling.com/bathroom/IMG_8186.JPG"
        price="5000"
        url="https://www.stoneworksremodeling.com/services/walk-in-tubs"
      />
    </>
  );
}