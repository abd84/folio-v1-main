import Link from "next/link";
import Image from "next/image";
import { monaSans } from "../fonts/monaSans";
import { motion } from "framer-motion";
import profile from "../../public/header1.png";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    // Reset animation state when pathname changes
    setIsLoaded(false);
    
    // Wait for preloader to finish (around 5 seconds) or immediately if coming from another page
    const delay = pathname === "/" ? 5500 : 100;
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [pathname]);

  // Animation variants
  const imageAnimation = {
    initial: {
      y: 50,
      opacity: 0,
      scale: 0.8,
    },
    animate: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        delay: 0.5,
        duration: 1,
        ease: [0.2, 0.65, 0.3, 0.9],
      },
    },
  };

  const bodyAnimation = {
    initial: {
      opacity: 0,
      y: 20,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.2,
        duration: 1,
        ease: [0.2, 0.65, 0.3, 0.9],
      },
    },
  };

  const wordAnimation = {
    initial: {
      opacity: 0,
      y: 150,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.3,
        ease: [0.2, 0.65, 0.3, 0.9],
        duration: 1,
      },
    },
  };

  const titleContainerAnimation = {
    animate: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const name = "Abdullah Naeem";

  return (
    <motion.section
      className="relative z-10 flex h-[85vh] w-full items-stretch justify-center bg-[url('/hero.jpg')] bg-cover  bg-center py-0 sm:h-[90vh]  md:h-[100vh] 3xl:h-[85vh]"
      id="home"
      initial="initial"
      animate={isLoaded ? "animate" : "initial"}
    >
      <motion.div className="absolute left-0 top-0 right-0 bottom-0 h-full w-full bg-[#0E1016] mix-blend-color"></motion.div>

      <div className="absolute top-10 flex justify-between sm:w-[90%] lg:max-w-[1440px]">
        <div>
          <Link
            href="https://www.upwork.com/freelancers/~01e1539123e8154286"
            target="_blank"
            aria-label="BOOK A CALL"
          >
            <motion.button
              className="hidden rounded-md border-2 border-[#e4ded7] py-2 px-4 text-[14px] font-semibold text-[#e4ded7] sm:block  md:text-[16px] lg:block"
              variants={bodyAnimation}
            >
              LET&rsquo;S WORK TOGETHER
            </motion.button>
          </Link>
        </div>

        <div className="flex gap-10 text-[#e4ded7] sm:gap-12 md:gap-14 lg:gap-14">
          <Link
            href="https://github.com/abd84"
            target="_blank"
            aria-label="View GitHub Profile"
          >
            <motion.p
              className="text-[16px] font-bold text-[#e4ded7] md:text-[16px]"
              variants={bodyAnimation}
            >
              GITHUB
            </motion.p>
          </Link>
          <Link
            href="https://www.linkedin.com/in/abdnaeem84/"
            target="_blank"
            aria-label="View LinkedIn Profile"
          >
            <motion.p
              className="text-[16px] font-bold text-[#e4ded7] md:text-[16px]"
              variants={bodyAnimation}
            >
              LINKEDIN
            </motion.p>
          </Link>
        </div>
      </div>

      <div className="-mt-36 flex flex-col items-center justify-center sm:-mt-20 lg:my-40 lg:-mt-2 lg:py-40 ">
        <div
          className={`relative flex flex-col items-center justify-center ${monaSans.className}`}
        >
          <motion.div
            className="flex max-w-[500px] flex-col overflow-hidden text-center text-[96px] font-extrabold leading-[0.8em] text-[#e4ded7] sm:text-[120px] sm:leading-[0.85em] md:max-w-[900px] md:text-[155.5px] lg:text-[215px]"
            initial="initial"
            animate={isLoaded ? "animate" : "initial"}
            variants={titleContainerAnimation}
          >
            {name.split(" ").map((word, wordIndex) => (
              <motion.div
                key={wordIndex}
                className="flex items-center justify-center overflow-hidden"
                variants={titleContainerAnimation}
              >
                <motion.span
                  className="inline-block overflow-hidden pt-1 -mr-4 sm:-mr-5 md:-mr-7 lg:-mr-9 -mb-1 sm:-mb-2 md:-mb-3 lg:-mb-4"
                  variants={wordAnimation}
                >
                  {word + "\u00A0"}
                </motion.span>
              </motion.div>
            ))}
          </motion.div>
          <motion.div
            className="absolute bottom-[-110px] mx-auto sm:bottom-[-100px] md:bottom-[-130px] lg:bottom-[-150px]"
            variants={imageAnimation}
          >
            <Image
              src={profile}
              priority
              alt="Abdullah Naeem"
              data-blobity-tooltip="Hi there"
              data-blobity-invert="false"
              className=" w-[150px] rounded-[16px] grayscale hover:grayscale-0 md:w-[200px] md:rounded-[32px] lg:w-[245px]"
            />
          </motion.div>
        </div>
      </div>

      <div
        className="absolute bottom-10 flex items-center 
      justify-center
      md:bottom-10 lg:w-[90%] lg:max-w-[1440px] lg:justify-between"
      >
        <motion.div
          className="  max-w-[350px] md:max-w-[400px] lg:max-w-[400px]"
          variants={bodyAnimation}
        >
          <p className="z-50 text-center text-[16px] font-medium text-[#e4ded7] md:text-[20px] lg:text-left">
            Data Scientist and AI/ML Engineer. Currently available for work.
          </p>
        </motion.div>

        <motion.div
          className="  hidden max-w-[500px] lg:block lg:max-w-[420px]"
          variants={bodyAnimation}
        >
          <p className="text-right text-[16px] font-semibold text-[#e4ded7] md:text-[20px]">
            Focused on tranforming raw data into real world intelligence
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Hero;
