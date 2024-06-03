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
    carrent,
    jobit,
    tripguide,
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
      icon: Ai, //change with AI
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
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };