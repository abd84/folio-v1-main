import ProjectGrid from "../work-section/ProjectGrid"; // Path to ProjectGrid relative to this file
import { devProjects } from "../work-section/projectDetails"; // Path to projectDetails relative to this file

const ProjectsPage = () => {
  return (
    <div className="bg-[#0E1016] px-4 py-20 text-white sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <h1 className="mb-12 text-center text-4xl font-bold md:mb-16 md:text-5xl">
          All Projects
        </h1>
        {/* Center the ProjectGrid using flexbox */}
        <div className="flex justify-center">
          {/* Pass the FULL list of projects to the grid */}
          <ProjectGrid projects={devProjects} />
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
