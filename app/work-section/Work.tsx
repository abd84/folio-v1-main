// app/work-section/Work.tsx

import ProjectGrid from "./ProjectGrid";
import { devProjects } from "./projectDetails"; // Corrected path: same directory
import Link from "next/link"; // Use Next.js Link for navigation
const Work = () => {
  const featuredProjects = devProjects.slice(0, 3);

  return (
    <section
      className="relative z-10 flex w-full flex-col items-center justify-center bg-[#0E1016] bg-cover bg-center py-12 sm:py-16 md:py-20 lg:py-24" // Adjusted padding
      id="work"
    >
      {/* Smaller base text size for mobile, then scales up */}
      <h2 className="mb-10 text-4xl text-[#e4ded7] sm:text-5xl md:mb-16 md:text-6xl lg:mb-16 lg:text-7xl">
        Featured Work
      </h2>

      <ProjectGrid projects={featuredProjects} />

      <Link href="/projects">
        <button className="mt-16 rounded-full bg-transparent px-6 py-3 text-base sm:text-lg text-white ring-2 ring-white transition-all duration-300 ease-in-out hover:bg-white hover:text-[#0E1016]">
          View All Projects
        </button>
      </Link>
    </section>
  );
};

export default Work;