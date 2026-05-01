import { notFound } from "next/navigation";
import ServiceContent from "@/components/ServiceContent";
import services from "@/lib/services";
import { Metadata } from "next";

// Define the props type for dynamic routes
interface PageProps {
  params: Promise<{ slug: string }>;
}

// Generate static params for pre-rendering
export async function generateStaticParams() {
  return services.map((service: typeof services[number]) => ({
    slug: service.id,
  }));
}

// Generate metadata for SEO
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params; // Await the params Promise
  const service = services.find((s) => s.id === slug);

  if (!service) {
    return {
      title: "Service Not Found | Stone Works Remodeling",
      description: "The requested service could not be found.",
    };
  }

  return {
    title: `${service.title} in Metro Detroit, MI | Stone Works Remodeling`,
    description: service.shortDescription,
    keywords: `${service.title.toLowerCase()}, bathroom remodeling metro detroit, michigan, stone works remodeling`,
    // FIX: relative canonical so metadataBase handles the domain
    alternates: {
      canonical: `/services/${slug}`,
    },
    openGraph: {
      title: `${service.title} | Stone Works Remodeling — Metro Detroit`,
      description: service.shortDescription,
      images: [{ url: service.imageSrc, alt: `${service.title} — Stone Works Remodeling Metro Detroit` }],
      type: "website",
      url: `https://www.stoneworksremodeling.com/services/${slug}`,
    },
    twitter: {
      card: "summary_large_image",
      title: `${service.title} | Stone Works Remodeling`,
      description: service.shortDescription,
      images: [service.imageSrc],
    },
  };
}

export default async function ServicePage({ params }: PageProps) {
  const { slug } = await params;
  const service = services.find((s) => s.id === slug);

  if (!service) notFound();

  return (
    <main className="pt-16">
      {/* ================= GEO + AI CONTEXT ================= */}
        <section className="bg-gradient-to-b from-gray-50 to-white border-b border-gray-100">
              <div className="max-w-5xl mx-auto px-4 py-12">
                {/* Badge */}
                <span className="inline-block mb-4 text-sm font-semibold uppercase tracking-wider text-blue-600">
                  Trusted Local Remodeling Experts
                </span>
      
                {/* Heading */}
                <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight mb-5">
                  {service.title} Services in{" "}
                  <span className="text-blue-600">Metro Detroit, MI</span>
                </h2>
      
                {/* Description */}
                <p className="text-lg text-gray-700 leading-relaxed mb-4 max-w-3xl">
                  <strong>Stone Works Remodeling</strong> provides professional{" "}
                  <strong>{service.title.toLowerCase()}</strong> services throughout{" "}
                  <strong>Metro Detroit, Michigan</strong>, specializing in premium stone,
                  marble, and tile craftsmanship for residential homes.
                </p>
      
                {/* Cities highlight */}
                <p className="text-gray-600 max-w-3xl">
                  Homeowners in{" "}
                  <span className="font-semibold text-gray-900">
                    Detroit, Troy, Novi, Sterling Heights, Royal Oak
                  </span>{" "}
                  and surrounding cities trust our experienced team for high-quality
                  remodeling, transparent pricing, and long-lasting results.
                </p>
      
                {/* Divider */}
                <div className="mt-8 h-1 w-24 bg-blue-600 rounded-full"></div>
              </div>
            </section>

      {/* ================= CLIENT UI (UNCHANGED) ================= */}
      <ServiceContent service={service} />
    </main>
  );
}
