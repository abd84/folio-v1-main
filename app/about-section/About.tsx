import SongCarousel from "./SongCarousel";
import "../animations/animate.css";
import AnimatedBody from "../animations/AnimatedBody";
import AnimatedTitle from "../animations/AnimatedTitle";

const About = () => {
  return (
    <section
      className="relative z-10 w-full items-center justify-center overflow-hidden bg-[#0E1016] bg-cover bg-center pt-16 pb-36 md:pt-20 md:pb-44 lg:pt-20 lg:pb-56"
      id="about"
    >
      <div className="mx-auto flex w-[90%] flex-col items-center justify-center lg:max-w-[1212.8px]">
        <AnimatedTitle
          text={
            "I MAKE DATA INSIGHTFUL, MODELS INTELLIGENT, AND SYSTEMS TRANSFORMATIVE."
          }
          className={
            "mb-10 text-left text-[40px] font-bold leading-[0.9em] tracking-tighter text-[#e4ded7] sm:text-[45px] md:mb-16 md:text-[60px] lg:text-[80px]"
          }
          wordSpace={"mr-[14px]"}
          charSpace={"mr-[0.001em]"}
        />

        <div className="mx-auto flex w-[100%] flex-col lg:max-w-[1200px] lg:flex-row lg:gap-20">
          <div className="mb-10 flex w-[100%] flex-col gap-4 text-[18px] font-medium  leading-relaxed tracking-wide text-[#e4ded7] md:mb-16 md:gap-6 md:text-[20px] md:leading-relaxed lg:mb-16  lg:max-w-[90%] lg:text-[24px] ">
            <AnimatedBody
              text={
                "A Data Scientist and AI Engineer with a passion for building smart, data-driven solutions. I hold a Bachelor's degree in Data Science from FAST NUCES, Lahore, Pakistan."
              }
            />
            <AnimatedBody
              text={
                "As a Research Assistant at FAST NUCES, I've explored the impact of Generative AI tools on student learning and engagement. In my experience, I focused on implementing and optimizing machine learning models, achieving 90% predictive accuracy on real-world datasets. My work involved enhancing model performance through robust data preprocessing and feature engineering , and significantly improving trend identification through data visualization."
              }
              className={"hidden"}
            />
            <AnimatedBody
              text={
                "Beyond my academic and internship experience, I also work as a freelancer, providing intelligent solutions to global clients via Upwork, including those from the USA, and Europe. My expertise covers various domains such as building machine/deep learning models, Large Language Models (LLMs), Explainable AI (XAI), custom chatbot development, fine-tuning models, natural language processing (NLP), computer vision, and data analytics."
              }
            />
            <AnimatedBody
              text={
                "I hold certifications in Generative AI Engineering, Machine Learning with Python, Deep Learning, and Data Visualization with Python. I love transforming real-world problems into practical AI solutions and strive to blend research-level AI with deployable systems. If you're looking for someone who can make a meaningful impact, let's connect."
              }
            />
          </div>

          <div className="mb-24 flex w-[100%] flex-col gap-4 text-[18px] font-normal leading-relaxed tracking-wide text-[#e4ded7]/80 sm:mb-32 md:mb-40 md:gap-6 md:text-[16px] md:leading-normal lg:mt-0 lg:mb-16 lg:max-w-[30%] lg:text-[18px]">
            <div className="flex flex-col gap-4 md:gap-3">
              <h2
                className={
                  "text-[24px] font-bold text-[#e4ded7] md:text-[30px] lg:text-[20px]"
                }
              >
                Programming Languages
              </h2>
              <AnimatedBody text={"Python, C++, SQL."} />
            </div>
            <div className="flex flex-col gap-3">
              <h2
                className={
                  "text-[24px] font-bold text-[#e4ded7] md:text-[30px] lg:text-[20px]"
                }
              >
                Machine Learning Frameworks
              </h2>
              <AnimatedBody
                text={
                  "Scikit-learn, tensorflow, keras, pytorch, Hugging Transformers, NLTK, Computer vision, OpenCV, YOLO"
                }
              />
            </div>
            <div className="flex flex-col gap-3">
              <h2
                className={
                  "text-[24px] font-bold text-[#e4ded7] md:text-[30px] lg:text-[20px]"
                }
              >
                Data Analysis and visualization
              </h2>
              <AnimatedBody
                text={
                  "Matplotlib, Seaborn, Plotly, Tableau, powerBI, Pandas, Numpy, Apache spark"
                }
                className="w-full whitespace-pre-line break-words text-[18px] md:text-[16px] lg:text-[18px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
