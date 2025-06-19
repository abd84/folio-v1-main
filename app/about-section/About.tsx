import SongCarousel from "./SongCarousel";
import "../animations/animate.css";
import AnimatedBody from "../animations/AnimatedBody";
import AnimatedTitle from "../animations/AnimatedTitle";

// Make sure you have this CSS in your global stylesheet (e.g., globals.css)
// @keyframes fadeIn {
//   from { opacity: 0; transform: translateY(10px); }
//   to { opacity: 1; transform: translateY(0); }
// }
// .animate-fade-in {
//   animation: fadeIn 0.5s ease-out forwards;
// }

const About = () => {
  const certifications = [
    { title: "Generative AI Engineering", issuer: "Coursera" },
    { title: "Machine Learning with Python", issuer: "Coursera" },
    { title: "Deep Learning", issuer: "Coursera" },
    { title: "Data Visualization with Python", issuer: "Coursera" },
  ];

  return (
    <section
      className="relative z-10 w-full items-center justify-center overflow-hidden bg-[#0E1016] bg-cover bg-center pt-24 pb-24 md:pt-28 md:pb-28" // Reduced vertical padding
      id="about"
    >
      <div className="mx-auto flex w-[90%] flex-col items-center justify-center lg:max-w-[1212.8px]">
        <AnimatedTitle
          text={
            "I MAKE DATA INSIGHTFUL, MODELS INTELLIGENT, AND SYSTEMS TRANSFORMATIVE."
          }
          className={
            // Typography scale reduced for mobile and adjusted for other screens
            "mb-10 text-left text-[32px] font-bold leading-[0.9em] tracking-tighter text-[#e4ded7] sm:text-4xl md:mb-16 md:text-5xl lg:text-6xl"
          }
          wordSpace={"mr-[14px]"}
          charSpace={"mr-[0.001em]"}
        />

        <div className="mx-auto flex w-[100%] flex-col lg:max-w-[1200px] lg:flex-row lg:gap-20">
          {/* Left side text content */}
          <div className="mb-10 flex w-[100%] flex-col gap-4 text-base font-medium leading-relaxed tracking-wide text-[#e4ded7] md:mb-16 md:gap-6 md:text-lg lg:mb-16 lg:max-w-[90%]">
            <AnimatedBody
              text={
                "A Data Scientist and AI Engineer with a passion for building smart, data-driven solutions. I hold a Bachelor's degree in Data Science from FAST NUCES, Lahore, Pakistan."
              }
            />
            <AnimatedBody
              text={
                "Beyond my academic and internship experience, I also work as a freelancer, providing intelligent solutions to global clients via Upwork. My expertise covers various domains such as building machine/deep learning models, Large Language Models (LLMs), Explainable AI (XAI), custom chatbot development, fine-tuning models, natural language processing (NLP), computer vision, and data analytics."
              }
            />
          </div>

          {/* Right side skills list */}
          <div className="mb-16 flex w-[100%] flex-col gap-8 text-base md:text-lg sm:mb-20 md:mb-24 lg:mt-0 lg:max-w-[30%]">
            <div className="flex flex-col gap-3">
              <h3 className="text-xl font-semibold text-[#e4ded7]"> {/* Adjusted size and weight */}
                Programming Languages
              </h3>
              <AnimatedBody text={"Python, C++, SQL."} className="text-[#FFE4C4]" />
            </div>
            <div className="flex flex-col gap-3">
              <h3 className="text-xl font-semibold text-[#e4ded7]"> {/* Adjusted size and weight */}
                Machine Learning
              </h3>
              <AnimatedBody
                text={"Scikit-learn, TensorFlow, PyTorch, Keras, Hugging Face, OpenCV"}
                className="text-[#FFE4C4]"
              />
            </div>
            <div className="flex flex-col gap-3">
              <h3 className="text-xl font-semibold text-[#e4ded7]"> {/* Adjusted size and weight */}
                Data Tools
              </h3>
              <AnimatedBody
                text={"Pandas, NumPy, Matplotlib, Seaborn, Plotly, Tableau, PowerBI"}
                className="text-[#FFE4C4]"
              />
            </div>
          </div>
        </div>

        {/* Certifications Section */}
        <div className="mt-10 flex w-full flex-col items-start justify-center">
          <AnimatedTitle
            text={"Certifications"}
            className="mb-10 text-left text-[32px] font-bold leading-[0.9em] tracking-tighter text-[#e4ded7] sm:text-4xl md:mb-12 md:text-5xl"
            wordSpace={"mr-[14px]"}
            charSpace={"mr-[0.001em]"}
          />
          <AnimatedBody
            text="My commitment to continuous learning is backed by certifications from industry leaders, validating my skills in key areas of AI and data science."
            className="mb-12 w-full max-w-4xl text-left text-base leading-relaxed tracking-wide text-[#e4ded7]/80 md:text-lg"
          />

          {/* --- IMPROVED GRID LAYOUT --- */}
          {/* Now 1 column on mobile, 2 on tablet, and 4 on desktop for better readability */}
          <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="group flex animate-fade-in transform flex-col justify-center rounded-lg bg-[#1a1d24] p-5 text-left opacity-0 transition-all duration-300 hover:!opacity-100 hover:shadow-lg hover:shadow-yellow-300/10 md:opacity-70"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <h4 className="text-md font-bold text-[#FFE4C4] transition-colors duration-300 group-hover:text-yellow-300">
                  {cert.title}
                </h4>
                <p className="text-sm text-[#e4ded7]/60 transition-colors duration-300 group-hover:text-white">
                  {cert.issuer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;