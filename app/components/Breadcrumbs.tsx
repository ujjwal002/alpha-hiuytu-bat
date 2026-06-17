// app/components/Breadcrumbs.tsx
// Breadcrumb component — outputs both visible breadcrumbs AND BreadcrumbList
// JSON-LD schema. Use on every page except the homepage.
//
// Usage:
//   <Breadcrumbs items={[
//     { label: "Services", href: "/services" },
//     { label: "Tub-to-Shower Conversion" }, // current page, no href
//   ]} />
//
// Home is added automatically. Don't include it in items.
// Premium stone/brass styling to match the site.
import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

const C = {
  ink: "#2a2520",
  stone: "#cfc4b4",
  brass: "#9c7c4a",
  brassHi: "#b89968",
};

export type BreadcrumbItem = {
  label: string;
  href?: string;
};

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
  /** Set to false to hide the visible breadcrumb UI (still renders schema) */
  visible?: boolean;
}

const BASE_URL = "https://www.stoneworksremodeling.com";

export default function Breadcrumbs({
  items,
  className = "",
  visible = true,
}: BreadcrumbsProps) {
  const allItems: BreadcrumbItem[] = [{ label: "Home", href: "/" }, ...items];

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: allItems.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      ...(item.href && { item: `${BASE_URL}${item.href}` }),
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {visible && (
        <nav aria-label="Breadcrumb" className={`font-sans text-[13px] ${className}`}>
          <ol className="flex items-center flex-wrap gap-1.5">
            {allItems.map((item, index) => {
              const isLast = index === allItems.length - 1;
              const isHome = index === 0;

              return (
                <li key={index} className="flex items-center gap-1.5">
                  {index > 0 && (
                    <ChevronRight className="h-3 w-3 flex-shrink-0" style={{ color: C.stone }} aria-hidden="true" />
                  )}

                  {isLast || !item.href ? (
                    <span
                      className="font-medium tracking-[0.02em]"
                      style={{ color: C.ink }}
                      aria-current="page"
                    >
                      {isHome ? <Home className="h-3.5 w-3.5 inline" aria-label="Home" /> : item.label}
                    </span>
                  ) : (
                    <Link
                      href={item.href}
                      className="tracking-[0.02em] transition-colors hover:underline"
                      style={{ color: C.brass }}
                    >
                      {isHome ? <Home className="h-3.5 w-3.5 inline" aria-label="Home" /> : item.label}
                    </Link>
                  )}
                </li>
              );
            })}
          </ol>
        </nav>
      )}
    </>
  );
}