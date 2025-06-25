import Link from "next/link";
import { monaSans } from "../fonts/monaSans";
import "../animations/animate.css";

const Contact = () => {
  return (
    <section
      className="relative z-10 flex h-[95vh] w-full items-center justify-center overflow-hidden bg-[#0E1016] bg-cover bg-center py-16 md:h-[80vh] md:py-20 lg:h-[90vh] lg:pt-0 lg:pb-28 3xl:h-[75vh]"
      id="contact"
    >
      <div className="mx-auto flex w-[90%] flex-col items-center justify-center pt-10 md:pt-0">
        <div
          className={`flex flex-col items-center justify-center ${monaSans.className} relative w-full sm:items-center lg:max-w-[1440px] `}
        >
          <h2 className="font-anton flex max-w-[500px] flex-col items-start text-left text-[120px] font-extrabold uppercase leading-[0.9em] tracking-tighter text-[#e4ded7] sm:max-w-full sm:flex-row sm:items-center sm:justify-center sm:text-center sm:text-[150px] md:text-[180px] lg:text-center lg:text-[220px] xl:text-[280px]">
            Let&apos;s Talk
          </h2>
        </div>

        <div className="mt-20 flex w-full flex-col items-center justify-center gap-16 sm:mt-32 sm:gap-12 md:mt-40 md:flex-row md:items-start md:justify-between lg:mt-12 lg:max-w-[1440px]">
          <div className="flex w-[350px] max-w-[90%] flex-col items-center text-center text-[14px] font-semibold uppercase text-[#e4ded7] sm:w-[350px] sm:text-[14px] md:w-[310px] md:items-start md:text-left md:text-[16px] lg:w-[420px] lg:text-[16px]">
            <p className="-mb-1 inline-block overflow-hidden pt-1 sm:-mb-2 md:-mb-3 lg:-mb-4">
              Got a question, proposal, project, or want to work together on something?
            </p>
            
            <div className="mt-5 flex w-full items-center justify-center gap-4 md:w-[335px] md:justify-start md:gap-2.5 lg:w-auto">
              <Link
                href="mailto:abdullahnaeem884@gmail.com?subject=Lets%20work%20together!&amp;body=Hello%2C%20I%20think%20we%20need%20you%20to%20work%20on%2Fcollaborate%20this%20particular%20product...%20Reach%20out%20as%20soon%20as%20you%20can."
                target="_blank"
                aria-label="Send me an email"
                className="mt-1 underline underline-offset-2 hover:no-underline sm:mt-2 md:mt-3 lg:mt-4"
              >
                <span className="whitespace-nowrap text-[14px] leading-tight sm:text-[14px] md:text-[16px]">
                  Send me an email
                </span>
              </Link>
              <span className="mx-2 whitespace-nowrap text-[14px] leading-tight sm:text-[14px] md:text-[16px]">
                or
              </span>
              <Link
                href="https://www.upwork.com/freelancers/~01e1539123e8154286"
                target="_blank"
                aria-label="Hire me now"
                className="mt-1 underline underline-offset-2 hover:no-underline sm:mt-2 md:mt-3 lg:mt-4"
              >
                <span className="whitespace-nowrap text-[14px] leading-tight sm:text-[14px] md:text-[16px]">
                  Hire me now
                </span>
              </Link>
            </div>
          </div>

          <div className="flex gap-10 text-[16px] font-bold text-[#e4ded7] sm:gap-14 sm:text-[24px] md:gap-10 md:text-[16px] lg:gap-20 lg:text-[28px]">
            <Link
              href="https://github.com/abd84"
              target="_blank"
              aria-label="View GitHub Profile"
            >
              <span className="text-[16px] font-bold text-[#e4ded7] sm:text-[20px] md:text-[16px] lg:text-[28px]">
                GH
              </span>
            </Link>
            <Link
              href="https://www.linkedin.com/in/abdnaeem84/"
              target="_blank"
              aria-label="View LinkedIn Profile"
            >
              <span className="text-[16px] font-bold text-[#e4ded7] sm:text-[20px] md:text-[16px] lg:text-[28px]">
                LN
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
