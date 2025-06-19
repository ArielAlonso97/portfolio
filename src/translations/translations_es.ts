export const es_translations: ITranslations = {
  language: "es",
  navbar: {
    sections: [
      { title: "Presentación", id: "presentation" },
      { title: "Educación", id: "education" },
      { title: "Habilidades", id: "skills" },
      { title: "Experiencia", id: "experience" },
      { title: "Contacto", id: "contact" },
    ],
  },
  presentation: {
    title: "Presentación",
    role: "Web Developer Mid",
    description:
      "Soy desarrollador full stack con experiencia en la creación de aplicaciones web utilizando tecnologías como ASP.NET Core, C#, Express.js, SQL Server, PostgreSQL, MongoDB, React y Next.js. Actualmente curso una Ingeniería en Sistemas Computacionales y tengo más de 4 años de experiencia en desarrollo. He trabajado tanto en soluciones internas como en productos SaaS para sectores inmobiliarios y empresariales. Me enfoco en construir sistemas escalables, mantenibles y con buenas prácticas de arquitectura, seguridad y control de versiones.",
  },
  education: {
    title: "Educación",
    universities: [
      {
        name: "Universidad Tecnológica Metropolitana",
        degree: "T.S.U. en Diseño Digital y Animación | 2017-2020",
      },
      {
        name: "Universidad UTEL",
        degree:
          "Licenciatura en Ingeniería en Sistemas Computacionales | EN CURSO 2022-2026",
      },
    ],
    certificates: {
      title: "Certificados",
      list: [
        {
          title: "FrontEnd Fundamentals",
          iFrame: `<div data-iframe-width="150" data-iframe-height="270" data-share-badge-id="3b59cb69-8f44-4a62-b02b-aa36219d9ff8" data-share-badge-host="https://www.credly.com"></div><script type="text/javascript" async src="//cdn.credly.com/assets/utilities/embed.js"></script>`,
          issuedBy: "Universidad Tecmilenio",
        },
        {
          title: "Programación con Java Script I",
          iFrame: `<div data-iframe-width="150" data-iframe-height="270" data-share-badge-id="f4d2e01b-56fe-471f-810e-c65297cc18ab" data-share-badge-host="https://www.credly.com"></div><script type="text/javascript" async src="//cdn.credly.com/assets/utilities/embed.js"></script>`,
          issuedBy: "Universidad Tecmilenio",
        },
        {
          title: "Programación con Java Script II",
          iFrame: `<div data-iframe-width="150" data-iframe-height="270" data-share-badge-id="217e89c4-7be1-4145-ae22-134bb9bb0b23" data-share-badge-host="https://www.credly.com"></div><script type="text/javascript" async src="//cdn.credly.com/assets/utilities/embed.js"></script>`,
          issuedBy: "Universidad Tecmilenio",
        },

        {
          title: "React-nivel avanzado",
          iFrame: `<div data-iframe-width="150" data-iframe-height="270" data-share-badge-id="388d81dd-aaed-4c81-b563-19b9c07f5a0c" data-share-badge-host="https://www.credly.com"></div><script type="text/javascript" async src="//cdn.credly.com/assets/utilities/embed.js"></script>`,
          issuedBy: "Universidad Tecmilenio",
        },

        {
          title: "BackEnd intermedio",
          iFrame: `<div data-iframe-width="150" data-iframe-height="270" data-share-badge-id="f2d2438f-3801-4c26-a122-040b2116786d" data-share-badge-host="https://www.credly.com"></div><script type="text/javascript" async src="//cdn.credly.com/assets/utilities/embed.js"></script>`,
          issuedBy: "Universidad Tecmilenio",
        },

        {
          title: "Backend con Node.js nivel avanzado",
          iFrame: `<div data-iframe-width="150" data-iframe-height="270" data-share-badge-id="2f918932-15fd-45c4-bc33-ff720256258f" data-share-badge-host="https://www.credly.com"></div><script type="text/javascript" async src="//cdn.credly.com/assets/utilities/embed.js"></script>`,
          issuedBy: "Universidad Tecmilenio",
        },

        {
          title: "Ruta de formación Fullstack JavaScript",
          iFrame: `<div data-iframe-width="150" data-iframe-height="270" data-share-badge-id="ea6c7b95-8ff9-412a-b985-a88f3a063a21" data-share-badge-host="https://www.credly.com"></div><script type="text/javascript" async src="//cdn.credly.com/assets/utilities/embed.js"></script>`,
          issuedBy: "Universidad Tecmilenio",
        },
      ],
    },
  },
  skills: {
    title: "Habilidades",
    description:
      "Mientras más alto el porcentaje, mayor es el tiempo y la experiencia que tengo usando la tecnología.",
    percentageDes: "Nivel de comodidad",
    languages: {
      title: "Lenguajes",
      list: [
        {
          key: "C# y ASP.NET Core",
          porcentage: 60,
          description:
            "Desarrollo de APIs RESTful con ASP.NET Core, manejo de rutas, middlewares, autenticación JWT, integración con Entity Framework, migraciones, validaciones y principios de Clean Architecture.",
          years: 2,
        },
        {
          key: "Express.js",
          porcentage: 70,
          description:
            "Creación de APIs REST con Node.js, middlewares personalizados, validación y sanitización de datos, autenticación básica, conexión con MongoDB y PostgreSQL.",
          years: 3,
        },
        {
          key: "JavaScript",
          porcentage: 85,
          description:
            "ES6+, asincronía, manejo de errores, estructuras de datos, y uso avanzado del lenguaje en el backend con Node.js.",
          years: 4,
        },
        {
          key: "Git",
          porcentage: 70,
          description:
            "Control de versiones, ramas, pull requests, resolución de conflictos y flujo Git colaborativo.",
          years: 4,
        },
        {
          key: "HTML y CSS",
          porcentage: 40,
          description:
            "Conocimientos básicos de maquetado y diseño, útiles para pruebas rápidas de integración en el frontend.",
          years: 4,
        },
        {
          key: "React.js",
          porcentage: 40,
          description:
            "Uso básico de React para integración con backend y pruebas en entornos fullstack.",
          years: 4,
        },
        {
          key: "Python",
          porcentage: 40,
          description:
            "Automatización de tareas, scripts CLI y experiencia básica con FastAPI para creación de APIs REST.",
          years: 2,
        },
        {
          key: "Django",
          porcentage: 40,
          description:
            "Conocimientos básicos en construcción de modelos, autenticación y uso del panel administrativo.",
          years: 1,
        },
      ],
    },

    spokenLanguages: {
      title: "Idiomas",
      list: ["Español - Nativo", "Inglés - C1 Avanzado"],
    },
  },
  experience: {
    title: "Experiencia Laboral",
    jobs: [
      {
        position: "Desarrollador Full Stack (.NET y Express)",
        company:
          "Soul Lens Studios - Explorers (División de Propiedades Mérida)",
        date: "Octubre 2024 - Presente",
        tasks: [
          "Formo parte de un nuevo departamento enfocado en el desarrollo de software interno y productos SaaS para el sector inmobiliario y empresarial.",
          "Desarrollo de aplicaciones full stack utilizando TypeScript, Express.js, MongoDB, PostgreSQL, SQL Server y .NET.",
          "Diseño y desarrollo de interfaces modernas con Next.js y React, implementando Server Side Rendering, rutas dinámicas y buenas prácticas de UI/UX.",
          "Implementación de CRUDs complejos, autenticación de usuarios, control de acceso y gestión de permisos.",
          "Diseño de arquitecturas escalables y mantenibles tanto en .NET como en el stack JavaScript.",
          "Colaboración en el despliegue y mantenimiento de productos web con enfoque en rendimiento y seguridad.",
        ],
      },
      {
        position: "Webmaster",
        company: "Propiedades Mérida",
        date: "Febrero 2024 - Octubre 2024",
        tasks: [
          "Administré y actualicé las páginas y aplicaciones web existentes de la empresa.",
          "Diseñé y desarrollé sitios web en WordPress y React con foco en rendimiento y experiencia de usuario.",
          "Implementé sitios responsivos con animaciones y layouts modernos.",
          "En octubre fui reasignado internamente a Soul Lens Studios - Explorers, una nueva división orientada al desarrollo de software interno.",
        ],
      },
      {
        position: "Líder del Departamento de Diseño",
        company: "Grim Panda LLC",
        date: "Febrero 2020 - Febrero 2024",
        tasks: [
          "Lideré un equipo internacional de gran tamaño en la creación de storyboards y publicidad interactiva para empresas como Rovio, Zynga, Ubisoft, entre otras.",
          "Actué como enlace clave entre los departamentos de diseño, desarrollo y producción.",
          "Colaboré con desarrolladores en la creación de publicidad interactiva utilizando HTML y JavaScript.",
        ],
      },
      {
        position: "Pasante Programador Full Stack JavaScript",
        company: "Pyxabyte",
        date: "Junio 2023 - Diciembre 2023",
        tasks: [
          "Colaboración en la creación de una plataforma web de estudios.",
          "Maquetado del sitio para escritorio y diseño receptivo utilizando Next.js y React.",
          "Desarrollo de endpoints.",
          "Implementación de manejo de excepciones.",
          "Validación de datos de entrada.",
          "Gestión de autorizaciones mediante Nest.js.",
        ],
      },
    ],
  },
  contact: {
    title: "Contactar",
    resumeButton: "Descargar CV",
    name: "Ariel Alvarado Arana",
    location: "Mérida, Yucatán",
    phone: "(+52) 99 92 97 19 85",
    email: "ariel32_124@hotmail.com",
    web: "arielalvarado.com",
  },
  contactForm: {
    namePlaceholder: "Tu Nombre",
    emailPlaceholder: "Tu Correo",
    messagePlaceholder: "Tu Mensaje",
    sendButton: "Enviar Mensaje",
    sendingButton: "Enviando...",
    successMessage: "¡Mensaje enviado con éxito!",
    errorMessage: "¡Ups! Algo salió mal. Por favor, intenta de nuevo.",
  },
};
