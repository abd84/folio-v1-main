"use client"; // Make sure this component is rendered client-side

import { useState } from "react";
import ProjectGrid from "../work-section/ProjectGrid";
import { devProjects } from "../work-section/projectDetails";

const ProjectsPage = () => {
  const [domain, setDomain] = useState("Machine Learning/Deep Learning");

  const filteredProjects =
    domain === "All Projects"
      ? devProjects
      : devProjects.filter((project) => project.domain === domain);

  return (
    <div className="bg-[#0E1016] px-4 py-20 text-white sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <h1 className="mb-12 text-center text-4xl font-bold md:mb-16 md:text-5xl">
          All Projects
        </h1>

        <div className="flex justify-center mb-6">
          <button
            onClick={() => setDomain("Machine Learning/Deep Learning")}
            className="mx-4 px-4 py-2 text-blue-500 border-2 border-blue-500 rounded bg-transparent hover:bg-blue-500 hover:text-white transition-all"
          >
            Machine Learning/Deep Learning
          </button>
          <button
            onClick={() => setDomain("AI Automation")}
            className="mx-4 px-4 py-2 text-blue-500 border-2 border-blue-500 rounded bg-transparent hover:bg-blue-500 hover:text-white transition-all"
          >
            AI Automation
          </button>
          <button
            onClick={() => setDomain("All Projects")}
            className="mx-4 px-4 py-2 text-blue-500 border-2 border-blue-500 rounded bg-transparent hover:bg-blue-500 hover:text-white transition-all"
          >
            All Projects
          </button>
        </div>

        <div className="flex justify-center">
          <ProjectGrid projects={filteredProjects} />
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
