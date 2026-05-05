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
import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

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
  // Build full breadcrumb list with Home prepended
  const allItems: BreadcrumbItem[] = [{ label: "Home", href: "/" }, ...items];

  // BreadcrumbList schema (Google + AI assistants love this)
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
        <nav aria-label="Breadcrumb" className={`text-sm ${className}`}>
          <ol className="flex items-center flex-wrap gap-1">
            {allItems.map((item, index) => {
              const isLast = index === allItems.length - 1;
              const isHome = index === 0;

              return (
                <li key={index} className="flex items-center">
                  {index > 0 && (
                    <ChevronRight
                      className="h-3.5 w-3.5 text-slate-400 mx-1 flex-shrink-0"
                      aria-hidden="true"
                    />
                  )}

                  {isLast || !item.href ? (
                    <span
                      className="text-slate-700 font-medium"
                      aria-current="page"
                    >
                      {isHome ? (
                        <Home className="h-3.5 w-3.5 inline" aria-label="Home" />
                      ) : (
                        item.label
                      )}
                    </span>
                  ) : (
                    <Link
                      href={item.href}
                      className="text-blue-600 hover:text-blue-800 hover:underline transition-colors"
                    >
                      {isHome ? (
                        <Home className="h-3.5 w-3.5 inline" aria-label="Home" />
                      ) : (
                        item.label
                      )}
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