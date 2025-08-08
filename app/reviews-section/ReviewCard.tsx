// import { WorkExperienceProps } from "./reviewDetails";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
// import Image from "next/image";
// import Link from "next/link";
// import "../globals.css";
// import profile from "../../public/samuel.avif";
// import slash from "../../public/review-slash.svg";
// import { motion } from "framer-motion";

// const WorkCard = ({
//   name,
//   company,
//   date,
//   details,
//   profileImg,
// }: WorkExperienceProps) => {
//   return (
//     <motion.div
//   initial={{ opacity: 0, y: 10 }}
//   whileInView={{
//     opacity: 1,
//     y: 0,
//     transition: {
//       duration: 0.7,
//       ease: [0.44, 0, 0.22, 0.99],
//     },
//   }}
//   viewport={{ amount: "some", once: true }}
//   className="relative mx-auto flex h-[520px] w-full max-w-[540px] flex-col items-start justify-between gap-6 rounded-[28px] border-[3px] border-[#212531] bg-[#181B23] p-[36px] shadow-xl transition-all duration-300 hover:scale-[1.025] hover:shadow-2xl sm:h-[520px] sm:items-center sm:justify-start lg:h-[480px] lg:max-w-[540px]"
// >
//   <Image
//     src={slash}
//     alt={"slash"}
//     className="absolute top-[34px] left-[28px] w-[51px]"
//   />
//   <div className="flex gap-6 sm:absolute sm:bottom-[36px] sm:left-[36px]">
//     <Image
//       src={profileImg}
//       alt={name}
//       width={1600}
//       height={840}
//       className="h-[41px] w-[41px] rounded-full bg-contain bg-center object-cover grayscale"
//     />
//     <div className="flex flex-col gap-1 pr-7 sm:gap-2">
//       <h3 className="w-full text-[22px] font-bold uppercase leading-[28px] tracking-[-0.46056px] text-[#e4ded7] sm:text-[26px]">
//         {name}
//       </h3>
//       <p className="text-lg font-bold leading-[22px] text-[#e4ded7] sm:text-xl">
//         {company}
//       </p>
//       <p className="mt-0 text-sm font-medium leading-[18px] text-[#95979D] sm:text-base">
//         {date}
//       </p>
//     </div>
//   </div>
//   {/* Adjust margin-top here to reduce space between title and details */}
//   <div className="mt-2 w-full sm:mt-4">
//     <h4 className="mb-3 text-[16px] font-semibold uppercase tracking-wide text-[#e4ded7] sm:text-[18px]">
//       Details
//     </h4>
//     <p className="whitespace-pre-line break-words text-[15px] font-[500] leading-relaxed tracking-wide text-[#e4ded7] sm:text-[17px]">
//       {details}
//     </p>
//   </div>
// </motion.div>

//   );
// };

// export { WorkCard };
// export default WorkCard;
