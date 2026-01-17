import Link from "next/link";

export default function RelatedService() {
  return (
    <section className="mt-16 border-t pt-10">
      <h3 className="text-2xl font-bold mb-4">
        Bathroom Remodeling Services in Metro Detroit
      </h3>

      <p className="text-gray-700 mb-6">
        Planning a bathroom remodel in Michigan? Stone Works Remodeling provides
        professional bathroom remodeling services across Metro Detroit, including
        Detroit, Troy, Novi, and surrounding areas.
      </p>

      <Link
        href="/services/"
        className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700"
      >
        View Bathroom Remodeling Services
      </Link>
    </section>
  );
}
