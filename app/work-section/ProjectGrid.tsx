import ProjectCard from "./ProjectCard";
import { ProjectProps } from "./projectDetails"; // Keep this import for the ProjectProps type

// 1. Define the props interface for ProjectGrid
interface ProjectGridProps {
  projects: ProjectProps[]; // This component will now accept an array of projects
}

// 2. Destructure the 'projects' prop directly in the functional component
const ProjectGrid = ({ projects }: ProjectGridProps) => {
  return (
    <>
      {/* The filtering UI is commented out, so we'll only display the grid */}
      <div className="grid w-[90%] grid-cols-1 grid-rows-2 gap-y-10 gap-x-6 lg:max-w-[1200px] lg:grid-cols-1">
        {/* 3. Map over the 'projects' prop that is passed into the component */}
        {projects.map((project: ProjectProps) => (
          <ProjectCard
            id={project.id}
            key={project.id}
            name={project.name}
            description={project.description}
            technologies={project.technologies}
            github={project.github}
            demo={project.demo}
            image={project.image}
            available={project.available}
            domain={project.domain} // Pass the domain prop here
          />
        ))}
      </div>
    </>
  );
};

export default ProjectGrid;
