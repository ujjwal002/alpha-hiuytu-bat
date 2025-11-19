// import Image from "next/image";
export function generateMetadata() {
  const url = "https://www.stoneworksremodeling.com/";

  return {
    alternates: {
      canonical: url,
      languages: {
        "en": url,
        "en-US": url,
        "x-default": url,
      },
    },
  };
}
import HomePage from "./components/Home";
// import GalleryPage from "./(marketing)/gallery/page";

// import GalleryPage from "./(marketing)/gallery/page";

export default function Home() {
  return (
    <div >
      <HomePage/>
      {/* <GalleryPage/> */}
      
    </div>
  );
}
