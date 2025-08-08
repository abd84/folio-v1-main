import "../animations/animate.css";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
// Certification logos (ensure they are in the public folder)
const NU = "/deeplearning.png";
const BW = "/ibm.png";
const TENX = "/datacamp.png";
const SS = "/datacamp.png";

const About = () => {
  const certifications = [
    {
      logoUrl: SS,
    },
    {
      logoUrl: TENX,
    },
    {
      title: "Generative AI Engineering Specialization",
      issuer: "IBM",
      url: "https://www.coursera.org/account/accomplishments/specialization/HA3BY8LDN5X9?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=s12n",
      logoUrl: BW,
    },
    {
      title: "Machine Learning with Python",
      issuer: "IBM",
      url: "https://courses.cognitiveclass.ai/certificates/252406e75061477f85ffcf22147250f9",
      logoUrl: BW,
    },
    {
      title: "Deep Learning Specialization",
      issuer: "Deeplearning.ai",
      url: "https://www.coursera.org/account/accomplishments/certificate/DL-EXAMPLE",
      logoUrl: NU,
    },
    {
      title: "Data Visualization",
      issuer: "Cognitive Class",
      url: "https://courses.cognitiveclass.ai/certificates/813fd4df67554cd6ba91ac73eaeb86bc",
      logoUrl: BW,
    },
    {
      title: "Gen AI for Everyone",
      issuer: "Deeplearning.ai",
      url: "https://www.coursera.org/account/accomplishments/verify/TR3V24YCTC7X",
      logoUrl: NU,
    },
  ];


  return (
    <section
      className="relative z-10 w-full items-center justify-center overflow-hidden bg-[#0E1016] bg-cover bg-center pt-24 pb-24 md:pt-28 md:pb-28"
      id="about"
    >
        {/* Stars Animation */}
<div className="stars-container">
  <div id="stars"></div>
  <div id="stars2"></div>
  <div id="stars3"></div>
</div>
      <div className="mx-auto flex w-[90%] flex-col items-center justify-center lg:max-w-[1212.8px]">
        <h2 className="mb-10 text-center text-[42px] font-bold leading-tight tracking-tighter text-[#e4ded7] sm:text-5xl md:mb-16 md:text-6xl lg:text-7xl">
          About Me
        </h2>
        
        {/* Brief Summary */}
        <div className="mb-16 max-w-3xl text-center">
          <p className="text-lg text-[#e4ded7]/90 md:text-xl">
            A dedicated Data Scientist, Analyst, and AI Engineer with a deep passion for Machine Learning, Deep Learning, 
            Natural Language Processing, Computer Vision, and Agentic AI. I thrive on building intelligent, innovative 
            solutions that make real-world impact.
          </p>
        </div>

        {/* Three Feature Blocks */}
        <div className="grid w-full grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          
          {/* Educational Excellence */}
          <div className="flex flex-col items-center rounded-lg bg-[#1a1d24]/80 p-8 text-center transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10">
            <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-green-400 to-green-600 text-white">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14v7" />
              </svg>
            </div>
            <h3 className="mb-3 text-2xl font-bold text-[#e4ded7]">Education Excellence</h3>
            <p className="mb-4 text-[#e4ded7]/70">Academic Foundation</p>
            <p className="text-sm text-[#e4ded7]/80">
              Final-year BS Data Science student at FAST-NUCES Lahore with a strong academic track record in AI, machine learning, 
              deep learning, data analysis, NLP, computer vision, and big data analytics. Demonstrated excellence in coursework 
              with consistent top performance.
            </p>
          </div>
          
          {/* Technical Expertise */}
          <div className="flex flex-col items-center rounded-lg bg-[#1a1d24]/80 p-8 text-center transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10">
            <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-blue-400 to-blue-600 text-white">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
            </div>
            <h3 className="mb-3 text-2xl font-bold text-[#e4ded7]">Technical Expertise</h3>
            <p className="mb-4 text-[#e4ded7]/70">Core Technologies</p>
            <p className="text-sm text-[#e4ded7]/80">
              Skilled in programming languages including Python, R, C++, C, C#, Java, JavaScript, HTML, and CSS. Proficient with 
              tools and frameworks such as TensorFlow, PyTorch, Scikit-learn, Hugging Face Transformers, OpenCV, Docker, 
              Kubernetes, and cloud platforms like AWS and Azure.
            </p>
          </div>
          
          {/* Community Impact */}
          <div className="flex flex-col items-center rounded-lg bg-[#1a1d24]/80 p-8 text-center transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10">
            <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-teal-400 to-teal-600 text-white">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="mb-3 text-2xl font-bold text-[#e4ded7]">Community Impact</h3>
            <p className="mb-4 text-[#e4ded7]/70">Mentorship & Teaching</p>
            <p className="text-sm text-[#e4ded7]/80">
             Leading AI/Ml track for Fellowship programme by bytewise limited. Also serving as a Teaching Assistant at FAST-NUCES, mentoring over 150 students in data science and software engineering.
            </p>
          </div>
        </div>
        
        {/* Tech Stack & Expertise Section */}
<div className="mt-20 w-full">
  <h3 className="mb-12 text-center text-3xl font-bold text-[#e4ded7] md:text-4xl">Tech Stack & Expertise</h3>

  {/* AI & Machine Learning */}
  <h4 className="text-xl font-bold text-[#e4ded7] mb-6">AI & Machine Learning</h4>
  <div className="flex flex-wrap gap-4 mb-8">
    <span className="bg-[#1a1d24] text-[#e4ded7] py-2 px-4 rounded-full text-base">PyTorch</span>
    <span className="bg-[#1a1d24] text-[#e4ded7] py-2 px-4 rounded-full text-base">TensorFlow</span>
    <span className="bg-[#1a1d24] text-[#e4ded7] py-2 px-4 rounded-full text-base">Scikit-learn</span>
    <span className="bg-[#1a1d24] text-[#e4ded7] py-2 px-4 rounded-full text-base">Keras</span>
    <span className="bg-[#1a1d24] text-[#e4ded7] py-2 px-4 rounded-full text-base">Langchain</span>
  </div>

  {/* Data Science */}
  <h4 className="text-xl font-bold text-[#e4ded7] mb-6">Data Science</h4>
  <div className="flex flex-wrap gap-4 mb-8">
    <span className="bg-[#1a1d24] text-[#e4ded7] py-2 px-4 rounded-full text-base">Pandas</span>
    <span className="bg-[#1a1d24] text-[#e4ded7] py-2 px-4 rounded-full text-base">NumPy</span>
    <span className="bg-[#1a1d24] text-[#e4ded7] py-2 px-4 rounded-full text-base">SQL</span>
    <span className="bg-[#1a1d24] text-[#e4ded7] py-2 px-4 rounded-full text-base">Matplotlib</span>
    <span className="bg-[#1a1d24] text-[#e4ded7] py-2 px-4 rounded-full text-base">Seaborn</span>
    <span className="bg-[#1a1d24] text-[#e4ded7] py-2 px-4 rounded-full text-base">Pyspark</span>
    
    
  </div>

  {/* NLP & Vision */}
  <h4 className="text-xl font-bold text-[#e4ded7] mb-6">NLP & Vision</h4>
  <div className="flex flex-wrap gap-4 mb-8">
    <span className="bg-[#1a1d24] text-[#e4ded7] py-2 px-4 rounded-full text-base">Transformers</span>
    <span className="bg-[#1a1d24] text-[#e4ded7] py-2 px-4 rounded-full text-base">Spacy</span>
    <span className="bg-[#1a1d24] text-[#e4ded7] py-2 px-4 rounded-full text-base">HuggingFace</span>
    <span className="bg-[#1a1d24] text-[#e4ded7] py-2 px-4 rounded-full text-base">BERT</span>
    <span className="bg-[#1a1d24] text-[#e4ded7] py-2 px-4 rounded-full text-base">YOLO</span>
  </div>

  {/* Web & App Development */}
  <h4 className="text-xl font-bold text-[#e4ded7] mb-6">Web & App Development</h4>
  <div className="flex flex-wrap gap-4 mb-8">
    <span className="bg-[#1a1d24] text-[#e4ded7] py-2 px-4 rounded-full text-base">Next.js</span>
    <span className="bg-[#1a1d24] text-[#e4ded7] py-2 px-4 rounded-full text-base">React</span>
    <span className="bg-[#1a1d24] text-[#e4ded7] py-2 px-4 rounded-full text-base">FastAPI</span>
    <span className="bg-[#1a1d24] text-[#e4ded7] py-2 px-4 rounded-full text-base">Node.js</span>
    <span className="bg-[#1a1d24] text-[#e4ded7] py-2 px-4 rounded-full text-base">Flask</span>
    <span className="bg-[#1a1d24] text-[#e4ded7] py-2 px-4 rounded-full text-base">AWS</span>
    <span className="bg-[#1a1d24] text-[#e4ded7] py-2 px-4 rounded-full text-base">Docker</span>
  </div>

  {/* MLOps */}
  <h4 className="text-xl font-bold text-[#e4ded7] mb-6">MLOps</h4>
  <div className="flex flex-wrap gap-4 mb-8">
    <span className="bg-[#1a1d24] text-[#e4ded7] py-2 px-4 rounded-full text-base">Kubeflow</span>
    <span className="bg-[#1a1d24] text-[#e4ded7] py-2 px-4 rounded-full text-base">MLflow</span>
    <span className="bg-[#1a1d24] text-[#e4ded7] py-2 px-4 rounded-full text-base">TensorFlow Extended (TFX)</span>
    <span className="bg-[#1a1d24] text-[#e4ded7] py-2 px-4 rounded-full text-base">Seldon</span>
  </div>

  {/* AI Automation */}
  <h4 className="text-xl font-bold text-[#e4ded7] mb-6">AI Automation</h4>
  <div className="flex flex-wrap gap-4">
    <span className="bg-[#1a1d24] text-[#e4ded7] py-2 px-4 rounded-full text-base">Make.com</span>
    <span className="bg-[#1a1d24] text-[#e4ded7] py-2 px-4 rounded-full text-base">N8n</span>
    <span className="bg-[#1a1d24] text-[#e4ded7] py-2 px-4 rounded-full text-base">Zapier</span>
  </div>

     {/* Languages Section */}
<div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
  <h3 className="col-span-2 text-2xl font-bold text-[#e4ded7] sm:col-span-3 md:col-span-4 lg:col-span-5">
    Programming Languages
  </h3>
  <div className="flex items-center justify-center rounded-full bg-blue-500/20 py-1 px-3 text-xs font-medium text-blue-400">
    Python
  </div>
  <div className="flex items-center justify-center rounded-full bg-green-500/20 py-1 px-3 text-xs font-medium text-green-400">
    C++
  </div>
  <div className="flex items-center justify-center rounded-full bg-purple-500/20 py-1 px-3 text-xs font-medium text-purple-400">
    JavaScript
  </div>
  <div className="flex items-center justify-center rounded-full bg-yellow-500/20 py-1 px-3 text-xs font-medium text-yellow-400">
    SQL
  </div>
  <div className="flex items-center justify-center rounded-full bg-red-500/20 py-1 px-3 text-xs font-medium text-red-400">
    HTML/CSS
  </div>
  <div className="flex items-center justify-center rounded-full bg-gray-500/20 py-1 px-3 text-xs font-medium text-gray-400">
    React
  </div>
</div>
    </div>
        <div className="mt-20 flex w-full flex-col items-center justify-center">
          <h3 className="mb-10 text-center text-3xl font-bold text-[#e4ded7] md:text-4xl">
            Professional Certifications
          </h3>
          <p className="mb-12 w-full max-w-2xl text-center text-base leading-relaxed tracking-wide text-[#e4ded7]/80 md:text-lg">
            My commitment to continuous learning is backed by certifications from industry leaders, validating my skills in key areas of AI and data science.
          </p>

          {/* Certifications Grid */}
          <div className="grid w-full grid-cols-2 gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="group flex transform flex-col justify-center items-center rounded-lg p-5 text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-lg hover:shadow-blue-500/10"
              >
                {/* Show only image for first two certifications */}
                {index < 2 ? (
                  <div className="w-full h-full flex justify-center items-center">
                    <Image
                      src={cert.logoUrl}
                      alt={cert.title + " logo"}
                      width={160}
                      height={160}
                      className="rounded-lg object-contain"
                    />
                  </div>
                ) : (
                  <>
                    <h4 className="text-xs font-bold text-[#e4ded7] transition-colors duration-300 group-hover:text-blue-400">
                      <a
                        href={cert.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline"
                      >
                        {cert.title}
                      </a>
                    </h4>
                    <p className="text-xs text-[#e4ded7]/60 transition-colors duration-300 group-hover:text-white">
                      {cert.issuer}
                    </p>
                    {/* Display the logo image for certifications */}
                    <div className="mt-4">
                      <Image
                        src={cert.logoUrl}
                        alt={cert.issuer + " logo"}
                        width={48}
                        height={48}
                        className="rounded-full object-contain"
                      />
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>


        </div>
      </div>
    </section>
  );
};

export default About;