export type ProjectProps = {
  id: number;
  name: string;
  description: string;
  technologies: string[];
  github: string;
  demo: string;
  image: string;
  available: boolean;
};

export const devProjects = [
  {
    id: 0,
    name: "Cryoet Classifier",
    description:"Built a deep learning model to classify five protein classes in cryoET datasets using ResNet-50 and DenseNet-121 for feature extraction, and U-Net for segmentation",
    technologies: ["OpenCV", "TensorFlow", "NumPy"],
    github: "https://github.com/abd84/CryoET-Protein-Complex-Annotation-Classification",
    demo: "",
    image: require(".//../../public/projects/project-1.jpg"),
    available: true,
  },
  {
    id: 1,
    name: "V2T Summarizer",
    description:"Fine-tuned HuBERT for voice-to-text conversion and BERT for summarization, enabling accurate transcription and concise summary generation from audio inputs. Achieving 92% accuracy.",
    technologies: ["Hubert", "Bert", "Pytorch"],
    github: "https://github.com/abd84/Voice-to-Text-Summarizer-via-Transfer-learning-and-Semantic-Representation",
    demo: "",
    image: require(".//../../public/projects/v-t.png"),
    available: true,
  },
  {
    id: 2,
    name: "DermaStratif",
    description:"Skin lesion classifier using EfficientNet-B0 with LoRA tuning; boosted accuracy from 74% to 80%.",
    technologies: ["PyTorch", "Resnet150", "Efficientnet B"],
    github: "https://github.com/abd84/DermaStratif-Multiclass-Lesion-Stratification-and-diagnosis",
    demo: "",
    image: require(".//../../public/projects/project-3.jpg"),
    available: true,
  },
  {
    id: 3,
    name: "Nail Classifier",
    description:"Developed a real-time Nail Detection System, achieving 92% accuracy in detecting nail shapes and colors from live webcam feeds.",
    technologies: ["YOLO", "scikit-learn", "Tensorflow"],
    github: "https://github.com/abd84/Nail-detection-tensor-flow-",
    demo: "",
    image: require(".//../../public/projects/project-2.jpg"),
    available: true,
  },
  {
    id: 4,
    name: "Upwork Forecasting",
    description:"Predicted project budgets and timelines using ML models; RNN achieved 89% accuracy.",
    technologies: ["Plotly", "Pandas", "scikit-learn"],
    github: "https://github.com/abd84/Upwork-Data-Analysis-and-Budget-Skills-Prediction-",
    demo: "",
    image: require(".//../../public/projects/project-4.jpg"),
    available: true,
  },
  {
    id: 5,
    name: "Nova-AI",
    description:
      "AI virtual assistant for task automation using Python and OpenAI APIs.",
    technologies: ["OpenAI", "Flask", "scikit-learn"],
    github: "https://github.com/abd84/AI-virtual-assistant",
    demo: "",
    image: require(".//../../public/projects/project-7.jpg"),
    available: true,
  },
  {
    id: 6,
    name: "Recipe Recommender",
    description:
      "Suggested recipes using NLP, collaborative filtering, and personalized recommendations.",
    technologies: ["NLTK", "Pandas", "scikit-learn"],
    github: "https://github.com/abd84/-Data-Science-Group-2---BWF---Abdullah-naeem/tree/main/Recipe%20recommendation%20Project",
    demo: "",
    image: require(".//../../public/projects/project-6.jpg"),
    available: true,
  },
  {
    id: 7,
    name: "Shopify AI Automation",
    description:
      "Automated order fulfillment, courier slip generation, and summary email using MAKE.COM.",
    technologies: ["MAKE.COM"],
    github: "",
    demo: "",
    image: require(".//../../public/projects/shopify.png"),
    available: true,
  },
];
