import SongCarousel from "./SongCarousel";
import "../animations/animate.css";
import { motion } from "framer-motion";

const About = () => {
  const certifications = [
    { title: "Generative AI Engineering Specialization", issuer: "IBM", url: "https://www.coursera.org/account/accomplishments/specialization/HA3BY8LDN5X9?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=s12n" },
    { title: "Machine Learning with Python", issuer: "IBM", url: "https://courses.cognitiveclass.ai/certificates/252406e75061477f85ffcf22147250f9" },
    { title: "Deep Learning Specialization", issuer: "Deeplearning.ai", url: "https://www.coursera.org/account/accomplishments/certificate/DL-EXAMPLE" },
    { title: "Data Visualization", issuer: "Cognitive Class", url: "https://courses.cognitiveclass.ai/certificates/813fd4df67554cd6ba91ac73eaeb86bc" },
    { title: "Gen AI for Everyone", issuer: "Deeplearning.ai", url: "https://www.coursera.org/account/accomplishments/verify/TR3V24YCTC7X" },
  ];

  return (
    <section
      className="relative z-10 w-full items-center justify-center overflow-hidden bg-[#0E1016] bg-cover bg-center pt-24 pb-24 md:pt-28 md:pb-28"
      id="about"
    >
      <div className="mx-auto flex w-[90%] flex-col items-center justify-center lg:max-w-[1212.8px]">
        <h2 className="mb-10 text-center text-[32px] font-bold leading-[0.9em] tracking-tighter text-[#e4ded7] sm:text-4xl md:mb-16 md:text-5xl lg:text-6xl">
          I MAKE DATA SMART, MODELS POWERFUL, AND SYSTEMS INNOVATIVE.
        </h2>

        <div className="mx-auto flex w-[100%] flex-col lg:max-w-[1200px] lg:flex-row lg:gap-20">
          {/* Left side text content */}
          <div className="mb-10 flex w-[100%] flex-col gap-4 text-base font-medium leading-relaxed tracking-wide text-[#e4ded7] md:mb-16 md:gap-6 md:text-lg lg:mb-16 lg:max-w-[90%]">
            <p>
              I am a Data Scientist and AI/ML Engineer with a strong passion for building smart, data-driven solutions. I hold a Bachelor&apos;s degree in Data Science from FAST NUCES, Lahore, Pakistan. My expertise includes working with machine learning, deep learning, Large Language Models (LLMs), Explainable AI (XAI), NLP, computer vision, and data analytics.
            </p>
          </div>

          {/* Right side skills list */}
          <div className="mb-16 flex w-[100%] flex-col gap-8 text-base md:text-lg sm:mb-20 md:mb-24 lg:mt-0 lg:max-w-[30%]">
            <div className="flex flex-col gap-3">
              <h3 className="text-xl font-semibold text-[#e4ded7]">
                Core Expertise
              </h3>
              <div className="flex flex-col gap-3">
                <p className="text-[#FFE4C4]"><span className="text-white font-semibold">Machine Learning & DL:</span>
                  TensorFlow, Keras, PyTorch, Scikit-learn, Diffusion models, GANs, Ensemble models, XGBoost, LightGBM, CatBoost
                </p>
                <p className="text-[#FFE4C4]"><span className="text-white font-semibold">TinyML Applications:</span>
                  Model quantization, pruning, distillation, TensorFlow Lite, Edge AI deployment
                </p>
                <p className="text-[#FFE4C4]"><span className="text-white font-semibold">Data Analytics & Visualization:</span>
                  Pandas, NumPy, Matplotlib, Seaborn, Plotly, Tableau, Power BI
                </p>
                <p className="text-[#FFE4C4]"><span className="text-white font-semibold">NLP:</span>
                  BERT, GPT-3, T5, RoBERTa, XLNet, Hugging Face, LlamaIndex, RAG
                </p>
                <p className="text-[#FFE4C4]"><span className="text-white font-semibold">AI Automation:</span>
                  AI agents, Make.com, n8n, Zapier, Airflow
                </p>
                <p className="text-[#FFE4C4]"><span className="text-white font-semibold">Deployment & Cloud Infrastructure:</span>
                  Docker, Kubernetes, AWS, Azure, Pinecone
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Song Carousel Section */}
        <div className="relative w-full flex justify-center mt-8">
          <SongCarousel />
        </div>

        {/* Certifications Section */}
        <div className="mt-10 flex w-full flex-col items-start justify-center">
          <h3 className="mb-10 text-left text-[32px] font-bold leading-[0.9em] tracking-tighter text-[#e4ded7] sm:text-4xl md:mb-12 md:text-5xl">
            Certifications
          </h3>
          <p className="mb-12 w-full max-w-4xl text-left text-base leading-relaxed tracking-wide text-[#e4ded7]/80 md:text-lg">
            My commitment to continuous learning is backed by certifications from industry leaders, validating my skills in key areas of AI and data science.
          </p>

          {/* Certifications Grid */}
          <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="group flex transform flex-col justify-center rounded-lg bg-[#1a1d24] p-5 text-left transition-all duration-300 hover:shadow-lg hover:shadow-yellow-300/10"
              >
                <h4 className="text-md font-bold text-[#FFE4C4] transition-colors duration-300 group-hover:text-yellow-300">
                  <a href={cert.url} target="_blank" rel="noopener noreferrer" className="hover:underline">
                    {cert.title}
                  </a>
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
