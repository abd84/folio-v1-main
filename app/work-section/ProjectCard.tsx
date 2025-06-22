"use client"; // Ensures the component is client-side

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const ProjectCard = ({
  id,
  name,
  description,
  technologies,
  domain,
  github,
  image,
  available,
}: ProjectProps) => {
  // State to manage description visibility
  const [isDescriptionVisible, setIsDescriptionVisible] = useState(false);

  // Toggle description visibility
  const toggleDescription = () => setIsDescriptionVisible((prev) => !prev);

  return (
    <motion.div
      style={{
        backgroundColor: "#212531",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        position: "relative",
      }}
      className={`relative z-10 w-full items-stretch justify-center overflow-hidden rounded-3xl bg-center py-0 h-[550px] sm:h-[400px] md:h-[650px] lg:h-[500px]`}
      initial="initial"
      animate="animate"
    >
      {/* Project Image */}
      <Image
        src={image}
        alt={name}
        style={{ borderRadius: "16px" }}
        className={`absolute -bottom-2 w-[70%] sm:w-[85%] md:w-[60%] lg:max-w-[55%] project-image ${
          id % 2 === 0 ? "right-0" : "left-0"
        }`}
      />

      {/* Card Content */}
      <div
        className={`absolute top-0 text-[#0E1016] ${
          id % 2 === 0 ? "left-0 ml-8 lg:ml-14" : "right-0 mr-8 lg:mr-14"
        } mt-6 flex items-center justify-between gap-4 lg:mt-10`}
      >
        {/* Domain Name */}
        <div className="text-[#FFE4C4] text-[16px] sm:text-[18px] md:text-[20px] font-semibold">
          {domain}
        </div>

        {/* GitHub Icon */}
        <div className="flex items-center justify-center gap-4">
          {available ? (
            <Link
              href={github}
              target="_blank"
              className="rounded-full"
              aria-label="Open GitHub Repository"
            >
              <FontAwesomeIcon
                icon={faGithub}
                className="w-[20px] rounded-full bg-white p-3 text-[20px] sm:w-[25px] sm:text-[24px] lg:w-[30px] lg:text-[28px]"
              />
            </Link>
          ) : (
            <div className="rounded-xl bg-white px-4 py-2 md:px-5 md:py-3 lg:px-6 lg:py-4">
              <h3 className="text-[16px] sm:text-[18px] lg:text-[20px]">
                Coming soon
              </h3>
            </div>
          )}
        </div>
      </div>

      {/* Project Title and Description */}
      <div
        className={`absolute text-[#FFE4C4] ${
          !(id % 2 === 0)
            ? "right-0 top-20 mr-0 ml-10 md:right-0 md:ml-0 lg:right-0 lg:top-40 lg:mr-4"
            : "left-10 top-20 ml-0 md:mr-12 lg:top-40 lg:ml-4"
        } mb-10 md:mb-16 lg:mb-14`}
      >
        {/* Project Title */}
        <h2 className="max-w-[100%] text-[28px] leading-tight text-[#e4ded7] sm:text-[32px] md:text-[40px] lg:max-w-[450px] lg:text-[48px] mb-0">
          {name}
        </h2>

        {/* Project Description */}
        <p className="mt-4 w-[100%] max-w-[457px] text-[16px] font-semibold text-[#95979D] sm:text-[15px] md:text-[18px]">
          {isDescriptionVisible ? description : `${description.substring(0, 100)}...`}
        </p>

        {/* Toggle Button */}
        <button
          onClick={toggleDescription}
          className="text-blue-500 mt-2 font-semibold text-sm"
        >
          {isDescriptionVisible ? "View Less" : "View More"}
        </button>

        {/* Technologies */}
        <div className="mt-2 flex flex-wrap gap-1.5 sm:gap-2 ">
          {technologies && technologies.length > 0 && technologies.map((tech, index) => (
            <span
              key={index}  // Using index to make sure the key is unique
              className="whitespace-nowrap rounded-lg px-1 py-1 text-[12px] font-bold uppercase tracking-wide sm:text-[12px] lg:text-[12px]"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
