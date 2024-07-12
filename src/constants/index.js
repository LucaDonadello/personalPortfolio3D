import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    java,
    pythonLogo,
    aws,
    python,
    Ai,
    deeplearningLogo,
    Nova,
    Attendance,
    basketBall,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "FullStack Developer",
      icon: backend,
    },
    {
      title: "Software Developer",
      icon: creator,
    },
    {
      title: "Software Engineer",
      icon: mobile,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "java",
      icon: java,
    },
    {
      name: "pythonLogo",
      icon: pythonLogo,
    },
  ];
  
  //for the moment leave name experience but inlcude awards -- add expereiences later on
  const experiences = [
    {
      title: "100 days of code",
      company_name: "Python bootcamp",
      icon: python,
      iconBg: "#383E56",
      date: "August 2023",
      points: [
        "Python Fundamentals: Mastering Python basics provides the foundation for complex application development.",
        "Data Structures & Algorithms: Proficiency in data structures aids efficient problem-solving and coding optimization.",
        "Object-Oriented Programming (OOP): Understanding OOP enables modular, reusable code for large-scale projects.",
        "Problem-Solving Skills: Coding tasks enhance problem-solving ability, vital in software development.",
      ],
    },
    {
      title: "Generative AI",
      company_name: "Large Language Models",
      icon: Ai,
      iconBg: "#E6DEDD",
      date: "December 2023",
      points: [
        "AI Fundamentals: Grasp core AI concepts like machine learning, neural networks, NLP, and computer vision.",
        "ML & Deep Learning: Learn techniques like supervised/unsupervised learning and deep neural networks.",
        "Data Processing: Acquire skills in cleaning data, feature selection, and transformation.",
        "Model Optimization: Understand how to evaluate and optimize AI models for better performance.",
      ],
    },
    {
      title: "AWS",
      company_name: "Cloud Technical Essentials",
      icon: aws,
      iconBg: "#E6DEDD",
      date: "March 2024",
      points: [
        "Core Services Overview: Understand essential AWS services like compute, storage, networking, and databases.",
        "Security and Compliance: Learn AWS security practices, IAM, encryption, and compliance standards.",
        "Monitoring and Management: Gain skills in monitoring with CloudWatch, managing resources, and automating infrastructure.",
        "Cost Optimization: Master AWS pricing models, cost management strategies, and tools for controlling spending.",
      ],
    },
    {
      title: "Machine Learning Specialization",
      company_name: "Deep Learning AI",
      icon: deeplearningLogo,
      iconBg: "#383E56",
      date: "July 2024",
      points: [
        "Predictive Modeling: Master building and training supervised models for prediction and classification tasks using NumPy and scikit-learn.",
        "Deep Learning Mastery: Develop neural networks with TensorFlow for multi-class classification, expanding into advanced machine learning techniques.",
        "Algorithmic Versatility: Explore decision trees, ensemble methods, and unsupervised learning like clustering and anomaly detection for diverse data challenges.",
        "Intelligent Systems Creation: Build recommender systems using collaborative filtering and deep learning, and apply deep reinforcement learning for adaptive decision-making.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "Your dedication and innovation in computer science inspire us. Your problem-solving and enthusiasm set a high standard.",
      name: "Jonhatan Lee",
      designation: "Student",
      company: "UTD",
    },
    {
      testimonial:
        "Working with you was a pleasure. Your professionalism made the project smooth and efficient. Let's collaborate again soon!",
      name: "Sugkirthy Sridhar",
      designation: "Student",
      company: "UTD",
    },
    {
      testimonial:
        "Your leadership made the project a success. Your clear direction kept us on track. It was great and easy working with you.",
      name: "Samuel Benicewicz",
      designation: "Student",
      company: "UTD",
    },
  ];
  
  const projects = [
    {
      name: "Nova FPS",
      description:
        "Simple First person shooter game developed in Unity using C#. The game was made by me and my university group and aim to entertain as many people as possible and learn the basics of game development.",
      tags: [
        {
          name: "Unity",
          color: "blue-text-gradient",
        },
        {
          name: "C#",
          color: "green-text-gradient",
        },
        {
          name: "Blender",
          color: "pink-text-gradient",
        },
      ],
      image: Nova,
      source_code_link: "https://github.com/LucaDonadello/NOVA-FPS",
    },
    {
      name: "Attendance Application",
      description:
        "The Attendance Application integrates a JavaFX desktop app for professors with a user-friendly interface and a web app with JavaScript, HTML, CSS, Ajax frontend, and a Java backend for administrators.",
      tags: [
        {
          name: "Java",
          color: "blue-text-gradient",
        },
        {
          name: "JavaFX",
          color: "green-text-gradient",
        },
        {
          name: "JavaScript",
          color: "pink-text-gradient",
        },
      ],
      image: Attendance,
      source_code_link: "https://github.com/LucaDonadello/Project-4485",
    },
    {
      name: "BasketBall Application",
      description:
        "The NBA database system is an application that allows users to search and collect data forstatistical data-gathering purposes easily. Users will also be able to narrow their search by filtering results.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "MYSQL",
          color: "green-text-gradient",
        },
        {
          name: "JavaScript",
          color: "pink-text-gradient",
        },
      ],
      image: basketBall,
      source_code_link: "https://github.com/LucaDonadello/BasketballDatabase",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };