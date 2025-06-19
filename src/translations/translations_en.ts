export const en_translations: ITranslations = {
  language: "en",
  navbar: {
    sections: [
      { title: "Introduction", id: "presentation" },
      { title: "Education", id: "education" },
      { title: "Skills", id: "skills" },
      { title: "Experience", id: "experience" },
      { title: "Contact", id: "contact" },
    ],
  },
  presentation: {
    title: "Introduction",
    role: "Full Stack Developer",
    description:
      "I am a full stack developer with experience building web applications using technologies such as ASP.NET Core, C#, Express.js, SQL Server, PostgreSQL, MongoDB, React, and Next.js. I am currently pursuing a Bachelor's degree in Computer Systems Engineering and have over 4 years of development experience. I have worked on both internal solutions and SaaS products for the real estate and business sectors. I focus on building scalable, maintainable systems applying best practices in architecture, security, and version control.",
  },
  education: {
    title: "Education",
    universities: [
      {
        name: "Universidad Tecnológica Metropolitana",
        degree: "Associate Degree in Digital Design and Animation | 2017-2020",
      },
      {
        name: "Universidad UTEL",
        degree:
          "Bachelor's Degree in Computer Systems Engineering | IN PROGRESS 2022-2026",
      },
    ],
    certificates: {
      title: "Certificates",
      list: [
        {
          title: "FrontEnd Fundamentals",
          iFrame: `<div data-iframe-width="150" data-iframe-height="270" data-share-badge-id="3b59cb69-8f44-4a62-b02b-aa36219d9ff8" data-share-badge-host="https://www.credly.com"></div><script type="text/javascript" async src="//cdn.credly.com/assets/utilities/embed.js"></script>`,
          issuedBy: "Universidad Tecmilenio",
        },
        {
          title: "JavaScript Programming I",
          iFrame: `<div data-iframe-width="150" data-iframe-height="270" data-share-badge-id="f4d2e01b-56fe-471f-810e-c65297cc18ab" data-share-badge-host="https://www.credly.com"></div><script type="text/javascript" async src="//cdn.credly.com/assets/utilities/embed.js"></script>`,
          issuedBy: "Universidad Tecmilenio",
        },
        {
          title: "JavaScript Programming II",
          iFrame: `<div data-iframe-width="150" data-iframe-height="270" data-share-badge-id="217e89c4-7be1-4145-ae22-134bb9bb0b23" data-share-badge-host="https://www.credly.com"></div><script type="text/javascript" async src="//cdn.credly.com/assets/utilities/embed.js"></script>`,
          issuedBy: "Universidad Tecmilenio",
        },
        {
          title: "React - Advanced Level",
          iFrame: `<div data-iframe-width="150" data-iframe-height="270" data-share-badge-id="388d81dd-aaed-4c81-b563-19b9c07f5a0c" data-share-badge-host="https://www.credly.com"></div><script type="text/javascript" async src="//cdn.credly.com/assets/utilities/embed.js"></script>`,
          issuedBy: "Universidad Tecmilenio",
        },
        {
          title: "Backend Intermediate",
          iFrame: `<div data-iframe-width="150" data-iframe-height="270" data-share-badge-id="f2d2438f-3801-4c26-a122-040b2116786d" data-share-badge-host="https://www.credly.com"></div><script type="text/javascript" async src="//cdn.credly.com/assets/utilities/embed.js"></script>`,
          issuedBy: "Universidad Tecmilenio",
        },
        {
          title: "Backend with Node.js Advanced Level",
          iFrame: `<div data-iframe-width="150" data-iframe-height="270" data-share-badge-id="2f918932-15fd-45c4-bc33-ff720256258f" data-share-badge-host="https://www.credly.com"></div><script type="text/javascript" async src="//cdn.credly.com/assets/utilities/embed.js"></script>`,
          issuedBy: "Universidad Tecmilenio",
        },
        {
          title: "Fullstack JavaScript Learning Path",
          iFrame: `<div data-iframe-width="150" data-iframe-height="270" data-share-badge-id="ea6c7b95-8ff9-412a-b985-a88f3a063a21" data-share-badge-host="https://www.credly.com"></div><script type="text/javascript" async src="//cdn.credly.com/assets/utilities/embed.js"></script>`,
          issuedBy: "Universidad Tecmilenio",
        },
      ],
    },
  },
  skills: {
    title: "Skills",
    description:
      "The higher the percentage, the more time and experience I have using the technology.",
    percentageDes: "Comfort Level",
    languages: {
      title: "Languages",
      list: [
        {
          key: "C# and ASP.NET Core",
          porcentage: 70,
          description:
            "Development of RESTful APIs with ASP.NET Core, routing, middleware, JWT authentication, integration with Entity Framework, migrations, validations, and Clean Architecture principles.",
          years: 1,
        },
        {
          key: "Express.js",
          porcentage: 70,
          description:
            "Creation of REST APIs with Node.js, custom middleware, data validation and sanitization, basic authentication, connection to MongoDB and PostgreSQL.",
          years: 3,
        },
        {
          key: "JavaScript",
          porcentage: 85,
          description:
            "ES6+, asynchronous programming, error handling, data structures, and advanced use of the language in backend with Node.js.",
          years: 4,
        },
        {
          key: "Git",
          porcentage: 70,
          description:
            "Version control, branching, pull requests, conflict resolution, and collaborative Git workflows.",
          years: 4,
        },
        {
          key: "HTML and CSS",
          porcentage: 40,
          description:
            "Basic knowledge of layout and design, useful for quick frontend integration tests.",
          years: 4,
        },
        {
          key: "React.js",
          porcentage: 40,
          description:
            "Basic use of React for backend integration and testing in full stack environments.",
          years: 4,
        },
        {
          key: "Python",
          porcentage: 40,
          description:
            "Task automation, CLI scripts, and basic experience with FastAPI for building REST APIs.",
          years: 2,
        },
        {
          key: "Django",
          porcentage: 40,
          description:
            "Basic knowledge in building models, authentication, and admin panel usage.",
          years: 1,
        },
      ],
    },
    spokenLanguages: {
      title: "Languages",
      list: ["Spanish - Native", "English - C1 Advanced"],
    },
  },
  experience: {
    title: "Work Experience",
    jobs: [
      {
        position: "Full Stack Developer (.NET and Express)",
        company:
          "Soul Lens Studios - Explorers (Division of Propiedades Mérida)",
        date: "October 2024 - Present",
        tasks: [
          "Part of a new department focused on developing internal software and SaaS products for the real estate and business sectors.",
          "Develop full stack applications using TypeScript, Express.js, MongoDB, PostgreSQL, SQL Server, and .NET.",
          "Design and develop modern interfaces with Next.js and React, implementing Server Side Rendering, dynamic routing, and UI/UX best practices.",
          "Implement complex CRUD operations, user authentication, access control, and permission management.",
          "Design scalable and maintainable architectures both in .NET and JavaScript stacks.",
          "Collaborate on deployment and maintenance of web products with a focus on performance and security.",
        ],
      },
      {
        position: "Webmaster",
        company: "Propiedades Mérida",
        date: "February 2024 - October 2024",
        tasks: [
          "Managed and updated the company's existing web pages and applications.",
          "Designed and developed websites using WordPress and React focusing on performance and user experience.",
          "Implemented responsive sites with animations and modern layouts.",
          "In October, I was internally reassigned to Soul Lens Studios - Explorers, a new division focused on internal software development.",
        ],
      },
      {
        position: "Design Department Leader",
        company: "Grim Panda LLC",
        date: "February 2020 - February 2024",
        tasks: [
          "Led a large international team in creating storyboards and interactive advertising for companies such as Rovio, Zynga, Ubisoft, among others.",
          "Served as a key liaison between design, development, and production departments.",
          "Collaborated with developers in creating interactive advertising using HTML and JavaScript.",
        ],
      },
      {
        position: "Full Stack JavaScript Developer Intern",
        company: "Pyxabyte",
        date: "June 2023 - December 2023",
        tasks: [
          "Collaborated on the creation of a web platform for studies.",
          "Developed desktop layouts and responsive design using Next.js and React.",
          "Developed endpoints.",
          "Implemented exception handling.",
          "Validated input data.",
          "Managed authorization using Nest.js.",
        ],
      },
    ],
  },
  contact: {
    title: "Contact",
    resumeButton: "Download Resume",
    name: "Ariel Alvarado Arana",
    location: "Mérida, Yucatán",
    phone: "(+52) 99 92 97 19 85",
    email: "ariel32_124@hotmail.com",
    web: "arielalvarado.com",
  },
  contactForm: {
    namePlaceholder: "Your Name",
    emailPlaceholder: "Your Email",
    messagePlaceholder: "Your Message",
    sendButton: "Send Message",
    sendingButton: "Sending...",
    successMessage: "Message sent successfully!",
    errorMessage: "Oops! Something went wrong. Please try again.",
  },
};
