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
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    eocean,
    Rombo,
    Fiverr,
    Reservation,
    Dentalai,
    jasmin
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
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Python Developer",
      icon: creator,
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
  
  const experiences = [
    {
      title: "Software Engineer",
      company_name: "Eocean Pvt Ltd.",
      icon: eocean,
      iconBg: "#383E56",
      date: "Aug 2023 - Jan 2025",
      points: [
        "Developed a packet count system with bit encoding for efficient SMS transmission in JavaScript.",
        "Designed and integrated APIs between frontend and backend systems for seamless data flow.",
        "Created specialized tools for the Jasmine portal including phone validation and regex testing utilities.",
        "Implemented Winston logger to enhance application monitoring capabilities.",
        "Built GSM 7-bit encoding and UDH protocols for message concatenation in SMS services.",
        "Established comprehensive security infrastructure with token-based authentication and role-based access control.",
        "Developed user account management system with verification protocols and profile management.",
      ],
    },
    {
      title: "Software Engineer",
      company_name: "Rombo Technologies",
      icon: Rombo,
      iconBg: "#E6DEDD",
      date: "Aug 2022 - July 2023",
      points: [
        "Built interactive and user-friendly front-end interfaces using Next.js.",
        "Developed efficient and scalable back-end services with Node.js.",
        "Ensured cross-browser compatibility and optimized application performance.",
        "Integrated RESTful APIs to facilitate seamless client-server communication.",
        "Applied modern web development practices including responsive design, modular architecture, and state management with Redux.",
      ]      
    },
    {
      title: "Web Developer",
      company_name: "Fiverr",
      icon: Fiverr,
      iconBg: "#383E56",
      date: "Jan 2021 - Feb 2023",
      points: [
        "Developed a table and food booking system allowing users to reserve tables and place orders with preferred seating views.",
        "Implemented SMS confirmation functionality to notify users upon successful booking.",
        "Designed and developed an interactive and user-friendly UI using Next.js to enhance customer experience.",
        "Built and managed scalable back-end operations using Node.js for seamless booking and order processing.",
        "Collaborated closely with clients to understand requirements and deliver tailored solutions.",
        "Integrated third-party APIs for SMS notifications and real-time data handling.",
        "Conducted thorough testing and debugging to ensure reliability and performance across devices and browsers.",
        "Provided ongoing maintenance, feature enhancements, and technical support post-deployment.",
        "Optimized application performance and loading speed through best practices and code reviews.",
        "Maintained clear project documentation and communicated progress regularly with stakeholders.",
      ]
    },
    // {
    //   title: "Full stack Developer",
    //   company_name: "Meta",
    //   icon: meta,
    //   iconBg: "#E6DEDD",
    //   date: "Jan 2023 - Present",
    //   points: [
    //     "Developing and maintaining web applications using React.js and other related technologies.",
    //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //     "Implementing responsive design and ensuring cross-browser compatibility.",
    //     "Participating in code reviews and providing constructive feedback to other developers.",
    //   ],
    // },
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
      name: "Reservation Platform",
      description:
        "A web-based reservation platform where Sellers list services for Admin approval, and Buyers can browse, book, and manage reservations. The system supports real-time live chat for seamless communication and ensures efficient service coordination across all user roles.",
      tags: [
        {
          name: "NextJs",
          color: "blue-text-gradient",
        },
        {
          name: "Neon Serverless DB",
          color: "green-text-gradient",
        },
        {
          name: "tailwindcss",
          color: "pink-text-gradient",
        },
      ],
      image: Reservation,
      source_code_link: "https://github.com/HUZAIFAKHALIL/qreserve",
    },
    {
      name: "Dental Code Generation",
      description:
        "A web application where dental professionals generate procedure codes based on treatments. It integrates with backend APIs for real-time code generation, ensuring accurate billing and compliance with dental standards.",
      tags: [
        {
          name: "ReactJs",
          color: "blue-text-gradient",
        },
        {
          name: "Python",
          color: "green-text-gradient",
        },
        {
          name: "tailwindcss",
          color: "pink-text-gradient",
        },
      ],
      image: Dentalai,
      source_code_link: "https://github.com/HUZAIFAKHALIL/Ai-Dental",
    },
    {
      name: "CPaSS Jasmin Portal",
      description:
        "A web application with GSM 7-bit SMS support for sending messages to users, phone validation, and regex testing. Includes secure authentication, role-based access, and account management with messaging preferences.",
      tags: [
        {
          name: "ReactJs",
          color: "blue-text-gradient",
        },
        {
          name: "MongoDB",
          color: "green-text-gradient",
        },
        {
          name: "tailwindcss",
          color: "pink-text-gradient",
        },
        {
          name: "NestJs",
          color: "green-text-gradient",
        },
      ],
      image: jasmin,
      source_code_link: "https://github.com/HUZAIFAKHALIL",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };