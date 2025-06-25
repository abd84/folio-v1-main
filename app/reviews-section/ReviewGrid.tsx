import WorkCard from "./ReviewCard";
import { workExperiences } from "./reviewDetails";
import AnimatedWords2 from "../animations/AnimatedWords2";
import { monaSans } from "../fonts/monaSans";
import { motion } from "framer-motion";

const Reviews = () => {
  return (
    <section className="z-10 flex w-full flex-col items-center justify-center overflow-hidden bg-[#0E1016] bg-cover bg-center pt-20 md:pb-16 lg:pb-24">
      <div
        className={`relative mb-16 flex w-full flex-col items-center justify-center gap-10  text-[#e4ded7] sm:items-center lg:max-w-[1440px]`}
      >
        <h1 className={`flex max-w-[500px] flex-col items-start text-left pr-5 ${monaSans.className} font-extrabold uppercase leading-[0.9em] text-[#e4ded7] sm:max-w-full sm:flex-row sm:items-center sm:justify-center sm:text-center lg:text-center text-[clamp(70px,14vw,155.04px)]`}>
          Work Experience
        </h1>
        {/* <AnimatedWords2
          title={"Work Experience"}
          style={`flex max-w-[500px] flex-col items-start text-left pr-5 ${monaSans.className} font-extrabold uppercase leading-[0.9em] text-[#e4ded7] sm:max-w-full sm:flex-row sm:items-center sm:justify-center sm:text-center lg:text-center text-[clamp(70px,14vw,155.04px)]`}
        /> */}
      </div>
      <motion.div className="grid w-[90%] max-w-[1345px] grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-2 lg:grid-cols-2">
        {workExperiences.map((exp, index) => (
          <WorkCard
            key={index}
            name={exp.name}
            company={exp.company}
            date={exp.date}
            details={exp.details}
            profileImg={exp.profileImg}
          />
        ))}
      </motion.div>
      <motion.a
        initial={{ opacity: 0, y: 20 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.7,
            delay: 0.1,
            ease: [0.44, 0, 0.22, 0.99],
          },
        }}
        viewport={{ amount: "some", once: true }}
        href="https://www.upwork.com/freelancers/~01e1539123e8154286"
        target="_blank"
        className="mt-10 mb-5 sm:mb-0 sm:mt-20 text-white"
      >
        Hire me on Upwork ✨
      </motion.a>
    </section>
  );
};

export default Reviews;
