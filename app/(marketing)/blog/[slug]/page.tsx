import { notFound } from "next/navigation";
import Link from "next/link";
import { Metadata } from "next";
import { blogPosts, categories } from "@/lib/blogPosts";
import { ArrowRight, Clock, User } from "lucide-react";
import sanitizeHtml from "sanitize-html";
import RelatedService from "@/components/RelatedService";
import Breadcrumbs from "@/components/Breadcrumbs";
import ArticleSchema from "@/components/schemas/ArticleSchema";

type BlogParams = { slug: string };
interface BlogPostPageProps { params: Promise<BlogParams> }

// ── Metadata ──────────────────────────────────────────────────────────────────
export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;

  if (!slug) return {
    title: "Blog Post Not Found | Stone Works Remodeling",
    description: "The requested blog post could not be found.",
  };

  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {
    title: "Blog Post Not Found | Stone Works Remodeling",
    description: "The requested blog post could not be found.",
  };

  const metaTitle = post.meta_title || `${post.title} | Stone Works Remodeling`;
  const metaDescription = post.meta_description || post.excerpt;

  return {
    title: metaTitle,
    description: metaDescription,
    keywords: `${post.title.toLowerCase()}, bathroom remodeling metro detroit, stone works remodeling, ${post.category}`,
    openGraph: {
      title: post.meta_title || post.title,
      description: metaDescription,
      images: post.image ? [{ url: post.image, alt: post.title }] : [],
      type: "article",
      url: `https://www.stoneworksremodeling.com/blog/${post.slug}`,
    },
    twitter: {
      card: "summary_large_image",
      title: post.meta_title || post.title,
      description: metaDescription,
      images: post.image ? [post.image] : [],
    },
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
  };
}

// ── Page ──────────────────────────────────────────────────────────────────────

// Map post topics to relevant service pages so every post passes authority
// to money pages — the single biggest internal linking win
function getRelatedServices(post: (typeof blogPosts)[number]) {
  const slug = post.slug.toLowerCase();
  const title = post.title.toLowerCase();
  const category = post.category.toLowerCase();
  const links: { label: string; href: string; desc: string }[] = [];

  if (title.includes("shower") || slug.includes("shower") || title.includes("tub to shower")) {
    links.push({ label: "Tub-to-Shower Conversion", href: "/services/shower-conversions", desc: "Transform your tub into a modern walk-in shower." });
  }
  if (title.includes("walk-in tub") || slug.includes("walk-in-tub") || title.includes("accessible")) {
    links.push({ label: "Walk-in Tub Installation", href: "/services/walk-in-tubs", desc: "Safe, accessible tubs for seniors and all ages." });
  }
  if (title.includes("bathroom remodel") || title.includes("bathroom renovation") || category.includes("bathroom-remodel") || category.includes("remodeling-tip")) {
    links.push({ label: "Complete Bathroom Remodeling", href: "/services/bathroom-remodeling", desc: "Full renovations from design to final inspection." });
  }
  if (title.includes("stone") || title.includes("tile") || title.includes("marble") || title.includes("slate") || category === "stone-design") {
    links.push({ label: "Custom Stone & Tile Work", href: "/services/custom-works", desc: "Premium stone, marble, slate and custom tile installation." });
  }
  const seen = new Set<string>();
  return links.filter((l) => { if (seen.has(l.href)) return false; seen.add(l.href); return true; }).slice(0, 3);
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) notFound();

  const relatedServices = getRelatedServices(post);
  const categoryLabel = categories.find((c) => c.id === post.category)?.label || "Bathroom Remodeling";

  return (
    <div className="min-h-screen bg-gray-50">

      {/* AEO/GEO: Article schema connects this post to the Person + Business schemas */}
      <ArticleSchema
        headline={post.meta_title || post.title}
        description={post.meta_description || post.excerpt}
        image={post.image || "https://www.stoneworksremodeling.com/bathroom/bath1.jpeg"}
        datePublished={post.date}
        dateModified={post.date}
        slug={post.slug}
        articleSection={categoryLabel}
        keywords={[
          post.title.toLowerCase(),
          "bathroom remodeling metro detroit",
          "stone works remodeling",
          post.category,
        ]}
      />

      {/* Breadcrumbs with BreadcrumbList schema */}
      <div className="container mx-auto px-4 py-4 bg-white border-b border-slate-100">
        <Breadcrumbs items={[
          { label: "Blog", href: "/blog" },
          { label: post.title },
        ]} />
      </div>

      {/* Hero */}
      <section
        className="hero-bg py-24 sm:py-32 text-center text-white"
        style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url(${post.image})` }}
      >
        <div className="container mx-auto px-4">
          <span className="inline-block bg-gold-100 text-gold-800 text-xs font-semibold px-2.5 py-0.5 rounded-full mb-4">
            {categoryLabel}
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">{post.title}</h1>
          <div className="flex justify-center items-center text-sm text-gray-200">
            <Clock className="h-4 w-4 mr-1" />
            <span>{post.date}</span>
            <span className="mx-2">•</span>
            <User className="h-4 w-4 mr-1" />
            <span>{post.author}</span>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div
              className="prose prose-lg text-gray-700"
              dangerouslySetInnerHTML={{
                __html: sanitizeHtml(post.content, {
                  allowedTags: [
                    "p","h1","h2","h3","h4","h5","h6",
                    "ul","ol","li","blockquote","pre",
                    "strong","em","u","s","code","hr",
                    "br","a","img","div","span","table",
                    "thead","tbody","tr","th","td",
                  ],
                  allowedAttributes: {
                    a: ["href","name","target","rel"],
                    img: ["src","alt","width","height"],
                    "*": ["class","style"],
                  },
                  allowedClasses: { "*": ["*"] },
                }),
              }}
            />
            <div className="mt-8">
              <Link href="/blog" className="text-blue-600 hover:text-blue-800 font-medium flex items-center">
                ← Back to Blog
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Internal service links — passes SEO authority to money pages */}
      {relatedServices.length > 0 && (
        <section className="py-10 bg-slate-50 border-t border-slate-100">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <p className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-4">Our Related Services</p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {relatedServices.map((s) => (
                  <Link
                    key={s.href}
                    href={s.href}
                    className="bg-white border border-slate-200 hover:border-blue-400 rounded-xl p-4 group transition-all"
                  >
                    <p className="font-bold text-gray-900 text-sm group-hover:text-blue-600 transition-colors mb-1">{s.label}</p>
                    <p className="text-slate-500 text-xs leading-relaxed">{s.desc}</p>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Related service auto-link */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <RelatedService />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 sm:py-16 bg-slate-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Transform Your Bathroom with Stone Works Remodeling
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Inspired by this article? Contact our expert team to bring your bathroom vision to life in Metro Detroit.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all shadow-lg"
          >
            Get a Free Consultation
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}

// Static params for SSG
export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}