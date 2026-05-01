import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions | Stone Works Remodeling",
  description: "Terms and conditions for using Stone Works Remodeling services and website.",
  // noindex — terms pages should not appear in search results
  robots: { index: false, follow: false },
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-white py-16 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-black text-gray-900 mb-8">Terms &amp; Conditions</h1>

        <div className="prose prose-lg text-gray-700 space-y-6">
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">1. Acceptance of Terms</h2>
            <p>By accessing our website or engaging our services, you agree to all terms listed on this page.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">2. Services</h2>
            <p>All remodeling services provided by Stone Works Remodeling are subject to a written contract and final written approval before work begins. Scope, pricing, and timelines are confirmed in writing prior to any project start.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">3. Privacy Policy</h2>
            <p>Your personal information — including name, phone number, email, and address — is kept secure and never sold to third parties. Information submitted through our website forms is used solely to contact you regarding your remodeling inquiry.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">4. Warranty</h2>
            <p>Stone Works Remodeling provides a 5-year workmanship warranty on all completed projects. This warranty covers defects in installation and workmanship. It does not cover damage caused by misuse, neglect, or natural wear and tear.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">5. Liability</h2>
            <p>Stone Works Remodeling is not responsible for damages resulting from misuse of this website or from circumstances outside our control. Our liability is limited to the scope of work agreed upon in writing.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">6. Contact Us</h2>
            <p>
              For questions regarding these terms, please contact our team at{" "}
              <a href="mailto:val@stoneworksremodeling.com" className="text-blue-600 hover:underline">
                val@stoneworksremodeling.com
              </a>{" "}
              or call us at{" "}
              <a href="tel:+12483468926" className="text-blue-600 hover:underline">
                (248) 346-8926
              </a>.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
