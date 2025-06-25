"use client";
export type ProjectProps = {
  id: number;
  name: string;
  description: string;
  technologies: string[];
  github: string;
  demo: string;
  image: string;
  available: boolean;
  domain: string; // Added domain property
};

export const devProjects = [
  {
    id: 0,
    name: "CryoET Classifier",
    description:
      "Developed a deep learning model to classify five protein classes (ribosome, virus-like particles, apo-ferritin, thyroglobulin, and β-galactosidase) in cryoET datasets using ResNet-50 and DenseNet-121 for feature extraction, and U-Net for segmentation.",
    technologies: ["OpenCV", "TensorFlow", "NumPy"],
    github: "https://github.com/abd84/CryoET-Protein-Complex-Annotation-Classification",
    demo: "",
    image: require(".//../../public/projects/project-1.jpg"),
    available: true,
    domain: "Machine Learning/Deep Learning", // Added domain
  },
  {
    id: 1,
    name: "Early Osteoporosis Diagnosis",
    description:
      "This model utilizes advanced analytics and machine learning on patient data and medical images to predict early osteoporosis risk. Its aim is proactive intervention, preventing bone loss and improving long-term health outcomes.",
    technologies: ["Transfomers, Scikit-learn"],
    github: "",
    demo: "",
    image: require(".//../../public/projects/project-9.jpg"),
    available: true,
    domain: "Machine Learning/Deep Learning", // Added domain
  },
   {
    id: 2,
    name: "Google Analytics Report Automation",
    description:
      "This workflow collects weekly Google Analytics data, compares it with the same week from the previous year, and summarizes the insights. It then automates the sending of the report via email and Telegram, ensuring timely and efficient delivery.",
    technologies: ["N8N", "Google Analytics API"],
    github: "",
    demo: "",
    image: require(".//../../public/projects/project-10.jpg"),
    available: true,
    domain: "AI Automation", // Added domain
  },
  {
    id: 3,
    name: "Voice-Text Summarizer",
    description:
      "Fine-tuned HuBERT for voice-to-text conversion and BERT for summarization, enabling accurate transcription and concise summary generation from audio inputs. Achieving 92% accuracy.",
    technologies: ["Hubert", "Bert", "Pytorch"],
    github: "https://github.com/abd84/Voice-to-Text-Summarizer-via-Transfer-learning-and-Semantic-Representation",
    demo: "",
    image: require(".//../../public/projects/project-2.jpg"),
    available: true,
    domain: "Machine Learning/Deep Learning", // Added domain
  },
  {
    id: 4,
    name: "DermaStratif",
    description:
      "Developed the DermaStratif model using EfficientNet-B0 with Adapter and LoRA fine-tuning, improving accuracy from 74% to 80%. Classified skin lesions into 8 categories for skin cancer diagnosis.",
    technologies: ["PyTorch", "Resnet150", "Efficientnet B"],
    github: "https://github.com/abd84/DermaStratif-Multiclass-Lesion-Stratification-and-diagnosis",
    demo: "",
    image: require(".//../../public/projects/project-3.jpg"),
    available: true,
    domain: "Machine Learning/Deep Learning", // Added domain
  },
    {
    id: 5,
    name: "Shopify AI Automation",
    description:
      "Streamline your Shopify order fulfillment. This AI automatically processes new orders, generates courier slips, sends shipping confirmations to customers, and delivers a consolidated PDF of all slips to the owner's inbox for easy record-keeping.",
    technologies: ["MAKE.COM"],
    github: "",
    demo: "",
    image: require(".//../../public/projects/project-8.jpg"),
    available: true,
    domain: "AI Automation", // Added domain
  },
  

  {
    id: 6,
    name: "Customer Support Automation",
    description:
      "This workflow automates customer support by initially attempting to resolve queries using AI-driven solutions. If the system cannot handle the query, it forwards the case to a human support agent for further assistance. This approach improves efficiency and reduces the workload on support agents.",
    technologies: ["Make.com", "OpenAI API"],
    github: "",
    demo: "",
    image: require(".//../../public/projects/project-11.jpg"),
    available: true,
    domain: "AI Automation", // Added domain
  },
  {
    id: 7,
    name: "Nail Morphology Classifier",
    description:
      "Developed a real-time Nail Detection System using TensorFlow, OpenCV, and YOLO, achieving 92% accuracy in detecting nail shapes and colors from live webcam feeds.",
    technologies: ["YOLO", "scikit-learn", "Tensorflow"],
    github: "https://github.com/abd84/Nail-detection-tensor-flow-",
    demo: "",
    image: require(".//../../public/projects/project-2.jpg"),
    available: true,
    domain: "Machine Learning/Deep Learning", // Added domain
  },
  {
    id: 8,
    name: "Upwork Forecasting",
    description:
      "Analyzed Upwork project data in Power BI to predict budgets, skills, and timelines. Developed and compared RNN, ANN, Random Forest, and Decision Tree models, with RNN achieving 89% accuracy.",
    technologies: ["Plotly", "Pandas", "scikit-learn"],
    github: "https://github.com/abd84/Upwork-Data-Analysis-and-Budget-Skills-Prediction-",
    demo: "",
    image: require(".//../../public/projects/project-4.jpg"),
    available: true,
    domain: "Data Analytics", // Added domain
  },
  {
    id: 9,
    name: "Nova-AI",
    description: "AI virtual assistant for task automation using Python and OpenAI APIs.",
    technologies: ["OpenAI", "Flask", "scikit-learn"],
    github: "https://github.com/abd84/AI-virtual-assistant",
    demo: "",
    image: require(".//../../public/projects/project-6.jpg"),
    available: true,
    domain: "AI Automation", // Added domain
  },
  {
    id: 10,
    name: "CuisineAI",
    description:
      "Built a recipe recommendation system with Python, using content-based and collaborative filtering, NLP for ingredient extraction, and Scikit-learn for personalized suggestions.",
    technologies: ["NLTK", "Pandas", "scikit-learn"],
    github: "https://github.com/abd84/-Data-Science-Group-2---BWF---Abdullah-naeem/tree/main/Recipe%20recommendation%20Project",
    demo: "",
    image: require(".//../../public/projects/project-7.jpg"),
    available: true,
    domain: "Machine Learning/Deep Learning", // Added domain
  },

];
