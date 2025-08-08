"use client";
import Hero from "./hero-section/Hero";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import PreLoader from "./animations/PreLoader/PreLoader";
import NavBar from "./navbar/NavBar";
import dynamic from "next/dynamic";
// import Reviews from "./reviews-section/ReviewGrid";
const Work = dynamic(() => import("./work-section/Work"));
const About = dynamic(() => import("./about-section/About"));
const Experience = dynamic(() => import("./experience-section/Experience"));
const Contact = dynamic(() => import("./contact-section/Contact"));
const Footer = dynamic(() => import("./footer/Footer"));

export default function Home() {
  const [pageKey, setPageKey] = useState(0);
  const pathname = usePathname();

  useEffect(() => {
    // Force page refresh when pathname changes
    setPageKey(prev => prev + 1);
    
    // Scroll to top when page loads
    window.scrollTo({
      top: 0,
      left: 0,
    });
  }, [pathname]);

  return (
    <div key={pageKey}>
      <PreLoader />
      <NavBar />
      {/* <ScrollerMotion> */}
      <main className="flex flex-col items-center justify-center">
        <Hero />
        <About />
        <Experience />
        <Work />
        {/* <Reviews /> */}
        <Contact />
        <Footer />
      </main>
      {/* </ScrollerMotion> */}
    </div>
  );
}
