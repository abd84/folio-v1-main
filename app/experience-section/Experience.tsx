import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import "./stars.css";
// Use string paths for public assets with next/image
const NU = "/National_University_of_Computer_and_Emerging_Sciences_logo.png";
const BW = "/thebytewise_logo.jpeg";
const TENX = "/tenx.png";
const SS = "/buildables.png";

const Experience = () => {
  const experiences = [
    {
      period: "July 2025 - Present",
      company: "Buildables (Ex-Bytewise Limited)",
      role: "Lead AI/ML",
      description: "Leading AI/ML track for the Buildable Fellowship Program, guiding participants through hands-on projects and helping them apply AI/ML concepts to real-world challenges.",
      logo: SS,
    },
    {
      period: "May 2025 - July 2025",
      company: "TenX.ai",
      role: "AI/ML Intern",
      description: "Worked on a project for Faisal Bank, one of Pakistan's top banks, developing and deploying machine learning models to solve business problems, achieving a 15% improvement in prediction accuracy.",
      logo: TENX,
    },
    {
      period: "Feb 2025 - June 2025",
      company: "FAST NUCES Lahore",
      role: "Research Assistant",
      description: "Fine-tuned pre-trained LLMs on domain-specific data, boosting NLP benchmark performance. Collaborated on research tackling LLM challenges like bias, ethics, and fairness, while also exploring the use of AI in enhancing educational institutions.",
      logo: NU,
    },
    {
      period: "Jan 2025 - June 2025",
      company: "FAST NUCES Lahore",
      role: "Teaching Assistant - SOFTWARE ENGINEERING",
      description: "Assisted in teaching advanced software engineering techniques to undergraduate students. Developed practical assignments and provided mentorship to 150+ students.",
      logo: NU,
    },
     {
      period: "May 2024 - June 2024",
      company: "Bytewise Limited",
      role: "Data Science Intern",
      description: "Built ML models with 90% accuracy using regression, classification, clustering, and neural networks. Enhanced performance through data preprocessing and feature engineering. Fine-tuned deep models like ResNet-150 and EfficientNet-B on real-world data.",
      logo: BW,
    },
  ];

  return (
    <section 
      id="experience"
      className="relative w-full overflow-hidden bg-[#0E1016] py-24 md:py-28"
      style={{ position: 'relative' }}
    >
      <div className="stars-container" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 1, pointerEvents: 'none' }}>
        <div id="stars"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>
      </div>
      
      <div className="container relative z-20 mx-auto w-[90%] max-w-[1212.8px]">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-16 text-center text-4xl font-bold text-[#e4ded7] sm:text-5xl md:text-6xl"
        >
          Experience Journey
        </motion.h2>
        
        <div className="relative">
          {/* Timeline stem */}
          <div className="absolute left-[15px] top-0 h-full w-1 bg-blue-500 md:left-1/2 md:-ml-0.5"></div>
          
          {/* Timeline entries */}
          <div className="ml-8 md:ml-0">
            {experiences.map((experience, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative mb-16 md:w-1/2 ${
                  index % 2 === 0 
                    ? "md:pr-12 md:text-right md:ml-0" 
                    : "md:pl-12 md:ml-auto"
                }`}
              >
                {/* Timeline circle marker */}
                <div className="absolute left-[-35px] h-6 w-6 rounded-full border-4 border-blue-500 bg-[#0E1016] md:left-auto md:right-[-13px]">
                  {index % 2 === 1 && <div className="absolute left-[-13px] h-6 w-6 rounded-full border-4 border-blue-500 bg-[#0E1016]"></div>}
                </div>
                
                {/* Content */}
                <div className="rounded-lg bg-[#1a1d24] p-6 shadow-lg transition-all duration-300 hover:shadow-blue-500/10 flex flex-col items-center">
                  {experience.logo && (
                    <div className="mb-4 flex items-center justify-center">
                      <Image src={experience.logo} alt={experience.company + ' logo'} width={48} height={48} className="rounded-full object-contain" />
                    </div>
                  )}
                  <span className="mb-2 inline-block rounded-full bg-blue-500/20 px-3 py-1 text-sm font-medium text-blue-400">
                    {experience.period}
                  </span>
                  <h3 className="mb-1 text-xl font-bold text-[#e4ded7]">{experience.role}</h3>
                  <h4 className="mb-4 text-lg text-blue-400">{experience.company}</h4>
                  <p className="text-sm text-[#e4ded7]/70">{experience.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
