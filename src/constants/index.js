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
  socket,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

const words = [
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
];
const counterItems = [
  { value: 3, suffix: "+", label: "Years of Experience" },
  { value: 6, suffix: "+", label: "Highly Satisfied Clients" },
  { value: 50, suffix: "+", label: "Completed Projects" },
  { value: 95, suffix: "%", label: "Client Retention Rate" },
];
const expCards = [
  {
    review:
      "Ameen led the development of 5+ Web3 applications at BlockOn Ventures, demonstrating exceptional technical leadership in blockchain integration and performance optimization. His architectural decisions significantly improved our production deployments.",
    imgPath: "/images/blockon-ventures.png", // Update path
    // Update path
    title: "React.js Developer (Web3 Specialist)",
    company: "BlockOn Ventures",
    date: "May 2024 – January 2025",
    responsibilities: [
      "Architected NuChain Explorer/Validator and led Telegram Mini Apps development, delivering ahead of schedule.",
      "Implemented cross-chain wallet integrations (MetaMask, WalletConnect) and custom transaction handlers.",
      "Designed 50+ reusable React components, optimized apps with code-splitting, lazy loading, and API caching.",
      "Established testing standards (Jest/Vitest), mentored 3 junior developers, and improved codebase maintainability by 40%.",
    ],
    techStack:
      "React, Next.js, TypeScript, Web3.js, Ethers.js, Three.js, Node.js, MongoDB, Docker, AWS",
    },
    {
    review:
      "Ameen made critical contributions to Dial.WTF and other Web3 projects at Neogencode, particularly in wallet authentication and WebRTC implementations. His performance optimizations set new standards for our team.",
    imgPath: "/images/neogencode.png", // Update path
    logoPath: "/images/neogencode-logo.png", // Update path
    title: "React.js Developer (Web3)",
    company: "Neogencode Technologies",
    date: "December 2023 – April 2024 | February 2025 – Present",
    responsibilities: [
      "Developed core functionality for Dial.WFT (WebRTC peer-to-peer calling with wallet auth)",
      "Integrated smart contracts using Ethers.js for blockchain interactions",
      "Returned in 2025 to lead urgent Next.js migration for Dial.WTF features",
      "Conducted code reviews maintaining 95%+ code quality standards",
      "Collaborated with junior developers on Web3 implementation patterns",
    ],
    techStack:
      "React, Next.js, Ethers.js, WebRTC, Web3.js, Node.js, PostgreSQL, Redis",
  },
  // {
  //   review:
  //     "As a freelance contributor, Ameen delivered critical frontend solutions for client projects including blockchain explorers and validator dashboards, often under tight deadlines.",
  //   imgPath: "/images/freelance.png", // Update path
  //   logoPath: "/images/freelance-logo.png", // Update path
  //   title: "Freelance React Developer",
  //   company: "Client Projects",
  //   date: "2023 – Present",
  //   responsibilities: [
  //     "Built responsive interfaces for 3+ blockchain explorer dashboards",
  //     "Implemented real-time data visualization for validator networks",
  //     "Contributed to Dial.WTF's frontend architecture during critical phases",
  //     "Developed custom Web3 hooks for wallet connection flows",
  //     "Optimized client-side rendering performance by 35%",
  //   ],
  //   techStack:
  //     "React, TypeScript, Tailwind CSS, Web3.js, REST APIs, WebSockets",
  // },
];
const socialImgs = [
  {
    name: "insta",
    imgPath: "/images/insta.png",
  },
  {
    name: "fb",
    imgPath: "/images/fb.png",
  },
  {
    name: "x",
    imgPath: "/images/x.png",
  },
  {
    name: "linkedin",
    imgPath: "/images/linkedin.png",
  },
];

const testimonialsNew = [
  {
    name: "Kajal Prasad",
    mentions: "@kajalprasad",
    link: "https://www.linkedin.com/in/kajal-prasad-02938721b/",
    review: [
      "I had the pleasure of working with Ameen on multiple blockchain projects, where he was a key frontend developer. He skillfully integrated complex smart contract logic into intuitive, user-friendly interfaces. Beyond his technical expertise, Ameen stands out for his strong research skills and ability to stay ahead of trends. He’s always exploring new tools and frameworks to improve user experience. A highlight was his smooth and efficient implementation of Telegram Mini Apps, which aligned perfectly with our goals. His dedication, problem-solving mindset, and collaborative nature make him a valuable team member. I’d gladly work with him again on future projects.",
    ],
    imgPath: "/images/kajal-person.png",
  },
  {
    name: "Sakina",
    mentions: "@sakina",
    link: "https://www.linkedin.com/in/sakina-a-3652a12bb",
    review: [
      "Working with Ameen has always been a pleasure. He is not only a brilliant software engineer with strong technical skills, but also an exceptional team player. His ability to solve complex problems efficiently, along with his positive attitude and willingness to help others, makes him a truly valuable colleague. I’ve always admired his dedication, professionalism, and collaborative nature. Any team would be lucky to have him!",
    ],
    imgPath: "/images/sakina-person.png",
  },
  {
    name: "Anas Malik",
    mentions: "@anas_malik",
    link: "https://www.linkedin.com/in/anas-malik-01",
    review: [
      "Working with Ameen has been one of the best experiences for me. We've collaborated on several Web3 and other projects, and it's always a pleasure teaming up with him. He brings great energy, a strong problem-solving mindset, and a constant drive to explore and integrate new technologies. As a backend developer, having someone like Ameen on the frontend is truly a blessing. His reliability and enthusiasm make every project smoother. I genuinely look forward to working with him again in the future.",
    ],
    imgPath: "/images/anas-person.png",
  },
  {
    name: "Himanshu Sachan",
    mentions: "@himanshu_sachan",
    link: "https://www.linkedin.com/in/sachanh",
    review: [
      "I had the pleasure of working with Ameen on our Telegram Mini Apps, where I served as the product owner. His contribution was truly exceptional — he played a key role in the successful launch of our apps on the Telegram platform. Ameen consistently brings a strong focus on improving the product, always exploring ways to enhance functionality and user experience. Having him on the team was a great advantage, both technically and collaboratively. I genuinely look forward to working with him again in the future.",
    ],
    imgPath: "/images/himanshu-person.png",
  },
  {
    name: "Ashraya Dargarh",
    mentions: "@ashray_dargarh",
    link: "https://www.linkedin.com/in/ashraya-dargarh-20393916b",
    review: [
      "If I talk about my experience working with you then here is my experience:I had a great experience working with you. I got to learn so many new things, and today, you’ve truly made a huge impact on my development journey. One of the most valuable lessons I’ve learned is to always aim to write the best possible code while keeping the bigger picture in mind especially thinking about how my logic would perform if thousands or even millions of users were on the platform. So yeah, it’s been an amazing experience, and I’m really happy to have had such a supportive coding partner ",
    ],
    imgPath: "/images/ashray-person.png",
  },
  {
    name: "Albert Flores",
    mentions: "@albertflores",
    link: "https://www.linkedin.com/in/albertflores/",
    review: [
      "Ameen was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend and backend dev are top-notch.",
    ],
    imgPath: "/images/client6.png",
  },
];

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
    title: "Full Stack Web Development",
    icon: web,
  },
  {
    title: "React  & React Native Development",
    icon: mobile,
  },
  {
    title: "Backend Node Js Services",
    icon: backend,
  },
  {
    title: "Web3 & Blockchain Integration",
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
  // {
  //   name: "TypeScript",
  //   icon: typescript,
  // },
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
    name: "socket.io",
    icon: socket,
  },
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "Starbucks",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "Tesla",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Shopify",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Meta",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
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

export {
  services,
  testimonialsNew,
  words,
  technologies,
  experiences,
  testimonials,
  projects,
  counterItems,
  expCards,
  socialImgs,
};
