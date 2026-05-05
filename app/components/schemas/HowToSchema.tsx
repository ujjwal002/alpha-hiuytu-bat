// app/components/schemas/HowToSchema.tsx
// HowTo schema for step-by-step guides. AI assistants love HowTo schema
// for answering "How to..." questions — it's one of the highest-impact
// schemas for AEO/GEO.
//
// Use on guide-style blog posts. Don't use generically — Google requires
// the schema to match real on-page step content.

interface HowToStep {
  name: string;          // Short step name, e.g. "Set your budget"
  text: string;          // Step description (1-3 sentences)
  image?: string;        // Optional step image (absolute URL)
  url?: string;          // Optional anchor link to the step on the page
}

interface HowToSchemaProps {
  name: string;          // e.g. "How to Plan a Bathroom Remodel in Metro Detroit"
  description: string;
  image: string;         // Hero image, absolute URL
  totalTime?: string;    // ISO 8601: "P30D" = 30 days, "PT2H" = 2 hours
  estimatedCost?: {
    currency: string;    // "USD"
    value: string;       // e.g. "8000"
  };
  steps: HowToStep[];
  supply?: string[];     // Optional: things needed (e.g. "Pen and paper")
  tool?: string[];       // Optional: tools needed
}

export default function HowToSchema({
  name,
  description,
  image,
  totalTime,
  estimatedCost,
  steps,
  supply,
  tool,
}: HowToSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name,
    description,
    image: {
      "@type": "ImageObject",
      url: image,
    },
    ...(totalTime && { totalTime }),
    ...(estimatedCost && {
      estimatedCost: {
        "@type": "MonetaryAmount",
        currency: estimatedCost.currency,
        value: estimatedCost.value,
      },
    }),
    ...(supply &&
      supply.length > 0 && {
        supply: supply.map((s) => ({
          "@type": "HowToSupply",
          name: s,
        })),
      }),
    ...(tool &&
      tool.length > 0 && {
        tool: tool.map((t) => ({
          "@type": "HowToTool",
          name: t,
        })),
      }),
    step: steps.map((s, i) => ({
      "@type": "HowToStep",
      position: i + 1,
      name: s.name,
      text: s.text,
      ...(s.image && {
        image: {
          "@type": "ImageObject",
          url: s.image,
        },
      }),
      ...(s.url && { url: s.url }),
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// Pre-built HowTo schema for "How to Plan a Bathroom Remodel in Metro Detroit"
// — drop this into a blog post or create a /guides/plan-bathroom-remodel page.
export const planBathroomRemodelSteps: HowToStep[] = [
  {
    name: "Set a realistic budget",
    text: "Most Metro Detroit bathroom remodels cost between $8,000 and $25,000 for a standard project, or $25,000 to $60,000+ for a luxury master bathroom. Tub-to-shower conversions start at $7,995. Build in a 10-15% contingency for unexpected issues like hidden water damage or outdated plumbing.",
  },
  {
    name: "Decide on the scope",
    text: "Cosmetic refresh (tile, fixtures, paint) costs $5,000-$10,000. Full renovation with new layout and plumbing relocation costs $15,000-$30,000. Determine whether you need a tub, shower, or both — and whether accessibility features matter for aging in place.",
  },
  {
    name: "Get 3 quotes from licensed Michigan contractors",
    text: "Always verify Michigan licensing through the Michigan Department of Licensing and Regulatory Affairs. Get itemized quotes — not lump sums. Ask each contractor about timeline, warranty, payment schedule, and permit handling. A free in-home consultation is industry standard.",
  },
  {
    name: "Plan your timeline around the install",
    text: "Standard Metro Detroit bathroom remodels take 5-10 business days. Tub-to-shower conversions take 3-5 days. Master bath renovations take 2-3 weeks. Plan to have an alternative bathroom available, especially if it's your only full bathroom.",
  },
  {
    name: "Choose materials before construction starts",
    text: "Order tile, vanity, fixtures, and lighting at least 2-3 weeks before construction begins. Material delays are the #1 cause of bathroom remodel timeline overruns. Stick with what's in stock at local suppliers when possible.",
  },
  {
    name: "Apply for financing if needed",
    text: "Many Metro Detroit bathroom contractors offer 0% APR financing for 12 months on qualified credit. A $10,000 project can be as low as $149/month over 84 months. Soft credit pulls let you check rates without affecting your credit score.",
  },
  {
    name: "Verify permits and final inspection",
    text: "Bathroom remodels involving plumbing or electrical changes require township permits in Wayne, Oakland, and Macomb Counties. Your contractor should pull permits and coordinate inspections. Get the certificate of completion before final payment.",
  },
];