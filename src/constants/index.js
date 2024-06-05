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
    figma,
    docker,
    aws,
    python,
    Ai,
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
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
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
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Nova FPS",
      description:
        "Simple First person shooter game developed in Unity using C#. The game was made by me and my university group and aim to entertain as many people as possible.",
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