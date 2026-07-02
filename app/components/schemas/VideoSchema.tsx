// app/components/schemas/VideoSchema.tsx
// VideoObject schema for embedded Instagram reels and YouTube videos.
// AI assistants weight video content heavily as a trust/authenticity signal.
//
// Usage:
//   <VideoSchema
//     name="Bathroom Remodel Before and After — Livonia, MI"
//     description="Tub-to-shower conversion in Livonia, completed in 5 days"
//     thumbnailUrl="https://www.stoneworksremodeling.com/instagram/image-2.png"
//     contentUrl="https://www.instagram.com/reel/DOHl_86EZJU/"
//     uploadDate="2025-09-15"
//     duration="PT45S"
//   />

interface VideoSchemaProps {
  name: string;
  description: string;
  thumbnailUrl: string;       // Absolute URL to thumbnail
  contentUrl: string;         // Absolute URL where video can be watched
  uploadDate: string;         // ISO 8601 format: "2025-09-15"
  duration?: string;          // ISO 8601 duration: "PT45S" = 45 seconds, "PT2M30S" = 2 min 30 sec
  embedUrl?: string;          // Embed URL if different from contentUrl
}

export default function VideoSchema({
  name,
  description,
  thumbnailUrl,
  contentUrl,
  uploadDate,
  duration,
  embedUrl,
}: VideoSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name,
    description,
    thumbnailUrl,
    contentUrl,
    ...(embedUrl && { embedUrl }),
    uploadDate,
    ...(duration && { duration }),
    publisher: {
      "@type": "Organization",
      name: "Stone Works Remodeling",
      logo: {
        "@type": "ImageObject",
        url: "https://www.stoneworksremodeling.com/instagram/logo.jpeg",
      },
    },
    author: {
      "@id": "https://www.stoneworksremodeling.com/#owner",
    },
    isFamilyFriendly: true,
    inLanguage: "en-US",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// Helper: pre-built schemas for the 3 Instagram reels already embedded
// on the homepage. Drop these into your homepage to instantly add video schema.
export function HomepageVideoSchemas() {
  return (
    <>
      <VideoSchema
        name="Luxury Bathroom Remodeling Metro Detroit — Spa-Style Master Bath Tour"
        description="Cinematic tour of a luxury spa-style bathroom design by Stone Works Remodeling — marble walls, walnut floating vanity, brass fixtures, and a freestanding soaking tub. Serving Wayne, Oakland & Macomb Counties, MI."
        thumbnailUrl="https://www.stoneworksremodeling.com/bathroom/hero-poster.jpg"
        contentUrl="https://www.stoneworksremodeling.com/bathroom/hero-video.mp4"
        uploadDate="2026-07-03"
        duration="PT15S"
      />
      <VideoSchema
        name="Bathroom Remodel Project — Metro Detroit"
        description="Stone Works Remodeling completes a full bathroom renovation in Metro Detroit, MI."
        thumbnailUrl="https://www.stoneworksremodeling.com/instagram/image.png"
        contentUrl="https://www.instagram.com/reel/DNQxTAGOaTg/"
        uploadDate="2025-08-20"
        duration="PT60S"
      />
      <VideoSchema
        name="Bathroom Remodel Before and After — Metro Detroit"
        description="Tub-to-shower conversion before and after by Stone Works Remodeling in Metro Detroit, Michigan."
        thumbnailUrl="https://www.stoneworksremodeling.com/instagram/image-2.png"
        contentUrl="https://www.instagram.com/reel/DOHl_86EZJU/"
        uploadDate="2025-09-15"
        duration="PT45S"
      />
      <VideoSchema
        name="Walk-in Tub Installation — Metro Detroit"
        description="Walk-in tub installation for an aging-in-place homeowner in Metro Detroit, MI."
        thumbnailUrl="https://www.stoneworksremodeling.com/instagram/image-3.png"
        contentUrl="https://www.instagram.com/reel/DPwbEMDkaW8/"
        uploadDate="2025-10-10"
        duration="PT30S"
      />
    </>
  );
}