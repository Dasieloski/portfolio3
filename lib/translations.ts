type Translation = {
  nav: {
    home: string
    about: string
    skills: string
    projects: string
    experience: string
    contact: string
  }
  hero: {
    title: string
    subtitle: string
    description: string
    contactButton: string
    projectsButton: string
  }
  home: {
    aboutPreview: string
    skillsPreview: string
    projectsPreview: string
    learnMore: string
  }
  about: {
    title: string
    whoTitle: string
    whoText1: string
    whoText2: string
    detailsTitle: string
    name: string
    location: string
    email: string
    availability: string
    availabilityValue: string
    languages: string
    languagesValue: string
    downloadCV: string
    bioTitle: string
    bioText1: string
    bioText2: string
    bioText3: string
  }
  skills: {
    title: string
    frontend: string
    backend: string
    tools: string
    additionalTitle: string
    softSkills: string
    softSkill1: string
    softSkill2: string
    softSkill3: string
    softSkill4: string
    softSkill5: string
    languages: string
    language1: string
    language2: string
    language3: string
    nativeLevel: string
    advancedLevel: string
    intermediateLevel: string
  }
  projects: {
    title: string
    all: string
    web: string
    mobile: string
    codeButton: string
    demoButton: string
    viewProjectButton: string
    timelineTitle: string
    featuredTitle: string
    featured: {
      title: string
      description: string
    }
    ecommerce: {
      description: string
    }
    taskManager: {
      description: string
    }
    fitnessTracker: {
      description: string
    }
    chatApp: {
      title: string
      description: string
    }
    weatherApp: {
      description: string
    }
    musicApp: {
      title: string
      description: string
    }
  }
  experience: {
    title: string
    technologies: string
    achievementsTitle: string
    achievement1: {
      title: string
      description: string
    }
    achievement2: {
      title: string
      description: string
    }
    achievement3: {
      title: string
      description: string
    }
    testimonialsTitle: string
    testimonial1: {
      name: string
      position: string
      text: string
    }
    testimonial2: {
      name: string
      position: string
      text: string
    }
    job1: {
      title: string
      period: string
      company: string
      description1: string
      description2: string
      description3: string
    }
    job2: {
      title: string
      period: string
      company: string
      description1: string
      description2: string
      description3: string
    }
    job3: {
      title: string
      period: string
      company: string
      description1: string
      description2: string
      description3: string
    }
  }
  education: {
    title: string
    educationTitle: string
    certificationsTitle: string
    degree1: string
    university1: string
    period1: string
    description1: string
    degree2: string
    university2: string
    period2: string
    description2: string
    cert1: string
    certIssuer1: string
    certDate1: string
    certDescription1: string
    cert2: string
    certIssuer2: string
    certDate2: string
    certDescription2: string
    cert3: string
    certIssuer3: string
    certDate3: string
    certDescription3: string
  }
  availability: {
    title: string
    description: string
    status: string
    statusValue: string
    nextAvailable: string
    nextAvailableValue: string
    contactButton: string
  }
  cta: {
    title: string
    description: string
    primaryButton: string
    secondaryButton: string
  }
  contact: {
    title: string
    formTitle: string
    nameLabel: string
    namePlaceholder: string
    emailLabel: string
    emailPlaceholder: string
    subjectLabel: string
    subjectPlaceholder: string
    messageLabel: string
    messagePlaceholder: string
    submitButton: string
    submittingButton: string
    successTitle: string
    successMessage: string
    infoTitle: string
    emailTitle: string
    linkedinTitle: string
    githubTitle: string
    whatsappTitle: string
    locationTitle: string
    phoneTitle: string
    availabilityTitle: string
    availabilityValue: string
    availableFor: string
    freelance: string
    fullTime: string
    consulting: string
    mapPlaceholder: string
    officeTitle: string
    officeAddress: string
  }
  admin: {
    loginTitle: string
    loginDescription: string
    usernameLabel: string
    passwordLabel: string
    loginButton: string
    loginSuccess: string
    welcomeMessage: string
    dashboardTitle: string
    dashboardDescription: string
    projectsTab: string
    skillsTab: string
    educationTab: string
    experienceTab: string
    settingsTab: string
    settingsTitle: string
    profileSettings: string
    nameLabel: string
    emailLabel: string
    locationLabel: string
    phoneLabel: string
    bioLabel: string
    cvLabel: string
    uploadButton: string
    socialSettings: string
    availabilitySettings: string
    availabilityLabel: string
    resetButton: string
    saveButton: string
    backToSite: string
    dashboard: string
  }
  footer: {
    description: string
    quickLinks: string
    contactInfo: string
    email: string
    phone: string
    location: string
    rights: string
    designedWith: string
    andStyle: string
  }
}

type Translations = {
  es: Translation
  en: Translation
}

export const translations: Translations = {
  es: {
    nav: {
      home: "INICIO",
      about: "SOBRE MÍ",
      skills: "HABILIDADES",
      projects: "PROYECTOS",
      experience: "EXPERIENCIA",
      contact: "CONTACTO",
    },
    hero: {
      title: "DESARROLLADOR",
      subtitle: "FULL STACK",
      description: "Creando experiencias digitales con pasión por el diseño y la funcionalidad.",
      contactButton: "CONTACTAR",
      projectsButton: "VER PROYECTOS",
    },
    home: {
      aboutPreview:
       "Desarrollador Fullstack con 3 años de experiencia construyendo aplicaciones web modernas y escalables.",
      skillsPreview:
      "Especialista en JavaScript/TypeScript creando interfaces dinámicas y APIs robustas. Enfoque en código limpio y mejores prácticas.",
      projectsPreview:
       "Portafolio incluyendo plataformas e-commerce, sistemas de gestión y soluciones profesionales integrales.",
      learnMore: "SABER MÁS",
    },
    about: {
      title: "SOBRE MÍ",
      whoTitle: "QUIÉN SOY",
      whoText1:
       "Desarrollador Fullstack especializado en el ecosistema JavaScript/TypeScript. Con 3 años de experiencia creando aplicaciones web completas, desde el diseño de bases de datos hasta interfaces de usuario modernas.",
      whoText2:
        "Mi enfoque combina arquitecturas escalables con diseño intuitivo. Apasionado por implementar soluciones eficientes que equilibran rendimiento y experiencia de usuario.",
      detailsTitle: "DATOS PERSONALES",
      name: "Nombre",
      location: "Ubicación",
      email: "Email",
      availability: "Disponibilidad",
      availabilityValue: "Freelance / Tiempo completo",
      languages: "Idiomas",
      languagesValue: "Español (nativo), Inglés (técnico)",
      downloadCV: "DESCARGAR CV",
      bioTitle: "MI HISTORIA",
          "bioText1": "Inicié mi carrera desarrollando soluciones completas para clientes diversos, especializándome en aplicaciones empresariales. He liderado todos los aspectos técnicos desde la arquitectura del sistema hasta el deployment final.",
      "bioText2": "Mis proyectos incluyen tiendas virtuales con pasarelas de pago, sistemas de gestión con paneles administrativos complejos, y plataformas SaaS con autenticación segura y escalabilidad horizontal.",
      "bioText3": "Actualmente me especializo en stacks modernos: Frontend con React/Next.js y Tailwind, Backend con NestJS/Node.js y PostgreSQL. Mi meta es crear software mantenible que combine elegancia técnica con usabilidad excepcional."
    },
    skills: {
      title: "HABILIDADES",
      frontend: "FRONTEND",
      backend: "BACKEND",
      tools: "HERRAMIENTAS",
      additionalTitle: "HABILIDADES ADICIONALES",
      softSkills: "HABILIDADES BLANDAS",
      softSkill1: "Comunicación efectiva y trabajo en equipo",
      softSkill2: "Resolución de problemas y pensamiento crítico",
      softSkill3: "Gestión del tiempo y organización",
      softSkill4: "Adaptabilidad y aprendizaje continuo",
      softSkill5: "Liderazgo y mentoría",
      languages: "IDIOMAS",
      language1: "Español",
      language2: "Inglés",
      nativeLevel: "Nativo",
      advancedLevel: "Técnico",
    },
    projects: {
      title: "PROYECTOS",
      all: "TODOS",
      web: "WEB",
      mobile: "MÓVIL",
      codeButton: "CÓDIGO",
      demoButton: "DEMO",
      viewProjectButton: "VER PROYECTO",
      timelineTitle: "LÍNEA DE TIEMPO",
      featuredTitle: "PROYECTO DESTACADO",
      featured: {
        title: "SITIO WEB DE GESTIÓN DE GIMNASIO",
        description:
         " Un sitio web desarrollado para gimnasios, diseñado específicamente para gestionar de manera eficiente a los clientes, entrenadores y suscripciones. La plataforma permite registrar y administrar la información de los usuarios, asignar entrenadores a rutinas personalizadas, controlar las membresías activas y llevar un seguimiento del estado de cada cliente. Todo en una interfaz intuitiva, responsiva y fácil de usar tanto para el personal del gimnasio como para los clientes.",
      },
      ecommerce: {
        description: "Plataforma de comercio electrónico con carrito de compras, pagos y panel de administración.",
      },
      taskManager: {
        description: "Aplicación de gestión de tareas con funcionalidades de arrastrar y soltar, etiquetas y filtros.",
      },
      fitnessTracker: {
        description: "Aplicación móvil para seguimiento de ejercicios, nutrición y progreso físico.",
      },
      chatApp: {
        title: "CHAT EN TIEMPO REAL",
        description: "Aplicación de chat con mensajería en tiempo real, salas y mensajes privados.",
      },
      weatherApp: {
        description: "Aplicación de pronóstico del tiempo con geolocalización y visualización de datos.",
      },
      musicApp: {
        title: "MUSIC STREAMING",
        description: "Aplicación de streaming de música con reproductor personalizado y listas de reproducción.",
      },
    },
    experience: {
      title: "EXPERIENCIA",
      technologies: "Tecnologías utilizadas",
      achievementsTitle: "LOGROS DESTACADOS",
      achievement1: {
        title: "Optimización de Rendimiento",
        description:
          "Mejoré el tiempo de carga de una aplicación web en un 70% mediante técnicas de optimización y lazy loading.",
      },
      achievement2: {
        title: "Escalabilidad",
        description:
          "Diseñé una arquitectura de microservicios que permitió escalar la plataforma de 1,000 a 100,000 usuarios.",
      },
      achievement3: {
        title: "Innovación",
        description:
          "Desarrollé un algoritmo de recomendación personalizado que aumentó la conversión de usuarios en un 35%.",
      },
      testimonialsTitle: "TESTIMONIOS",
      testimonial1: {
        name: "Javier Domínguez",
        position: "CTO en Tech Innovations",
        text: "Juan es un desarrollador excepcional que combina habilidades técnicas sólidas con una gran capacidad para entender las necesidades del negocio. Su trabajo siempre supera las expectativas.",
      },
      testimonial2: {
        name: "Ana Sánchez",
        position: "Directora de Producto en Digital Solutions",
        text: "Trabajar con Juan ha sido una experiencia increíble. Su atención al detalle y su capacidad para resolver problemas complejos han sido fundamentales para el éxito de nuestros proyectos.",
      },
      job1: {
        title: "SENIOR FULL STACK DEVELOPER",
        period: "2021 - PRESENTE",
        company: "Tech Innovations Inc.",
        description1:
          "Lideré el desarrollo de una plataforma SaaS para gestión de proyectos utilizada por más de 10,000 usuarios.",
        description2: "Implementé una arquitectura de microservicios que mejoró el rendimiento del sistema en un 40%.",
        description3:
          "Supervisé un equipo de 5 desarrolladores y establecí prácticas de CI/CD que redujeron el tiempo de despliegue en un 60%.",
      },
      job2: {
        title: "FULL STACK DEVELOPER",
        period: "2018 - 2021",
        company: "Digital Solutions Co.",
        description1: "Desarrollé aplicaciones web y móviles para clientes en sectores de finanzas, salud y educación.",
        description2:
          "Creé una API RESTful que procesaba más de 1 millón de solicitudes diarias con un tiempo de respuesta promedio de 50ms.",
        description3:
          "Implementé soluciones de autenticación y autorización seguras para aplicaciones con datos sensibles.",
      },
      job3: {
        title: "FRONTEND DEVELOPER",
        period: "2016 - 2018",
        company: "Creative Web Agency",
        description1: "Diseñé y desarrollé interfaces de usuario para sitios web y aplicaciones web de alto tráfico.",
        description2: "Optimicé el rendimiento frontend reduciendo el tiempo de carga inicial en un 65%.",
        description3:
          "Colaboré con diseñadores UX/UI para implementar experiencias de usuario intuitivas y accesibles.",
      },
    },
    education: {
      title: "EDUCACIÓN Y CERTIFICACIONES",
      educationTitle: "EDUCACIÓN",
      certificationsTitle: "CERTIFICACIONES",
      degree1: "Ingeniería en Ciencias Informática",
      university1: "Universidad de Ciencias Informáticas",
      period1: "2018 - 2023",
     /*  description1:
        "Especialización en Desarrollo de Software y Sistemas Inteligentes. Proyecto final: Plataforma de análisis de datos en tiempo real.", */
     /*  degree2: "Máster en Desarrollo Web",
      university2: "Universidad Complutense de Madrid",
      period2: "2016 - 2017", */
     /*  description2: "Enfoque en tecnologías web modernas, arquitectura de aplicaciones y experiencia de usuario.",
      cert1: "AWS Certified Developer",
      certIssuer1: "Amazon Web Services",
      certDate1: "2022",
      certDescription1:
        "Certificación que valida la experiencia en desarrollo, despliegue y depuración de aplicaciones basadas en AWS.",
      cert2: "Professional Scrum Master",
      certIssuer2: "Scrum.org",
      certDate2: "2021",
      certDescription2:
        "Certificación que demuestra conocimiento profundo de la metodología Scrum y habilidades de liderazgo ágil.",
      cert3: "MongoDB Certified Developer",
      certIssuer3: "MongoDB University",
      certDate3: "2020",
      certDescription3:
        "Certificación que valida habilidades avanzadas en diseño y optimización de bases de datos NoSQL con MongoDB.", */
    },
    availability: {
      title: "DISPONIBILIDAD",
      description:
        "Actualmente estoy disponible para nuevos proyectos y oportunidades laborales. ¡Contáctame para discutir cómo puedo ayudar a tu equipo!",
      status: "ESTADO ACTUAL",
      statusValue: "DISPONIBLE",
      nextAvailable: "DISPONIBLE DESDE",
      nextAvailableValue: "INMEDIATO",
      contactButton: "CONTÁCTAME AHORA",
    },
    cta: {
      title: "¿LISTO PARA TRABAJAR JUNTOS?",
      description:
        "Estoy disponible para proyectos freelance, posiciones a tiempo completo y consultoría. ¡Contáctame para discutir tu proyecto!",
      primaryButton: "CONTÁCTAME",
      secondaryButton: "VER PROYECTOS",
    },
    contact: {
      title: "CONTACTO",
      formTitle: "ENVÍAME UN MENSAJE",
      nameLabel: "NOMBRE",
      namePlaceholder: "Tu nombre",
      emailLabel: "EMAIL",
      emailPlaceholder: "tu@email.com",
      subjectLabel: "ASUNTO",
      subjectPlaceholder: "Asunto de tu mensaje",
      messageLabel: "MENSAJE",
      messagePlaceholder: "Tu mensaje",
      submitButton: "ENVIAR MENSAJE",
      submittingButton: "ENVIANDO...",
      successTitle: "¡Mensaje enviado!",
      successMessage: "Gracias por tu mensaje. Te responderé lo antes posible.",
      infoTitle: "INFORMACIÓN DE CONTACTO",
      emailTitle: "EMAIL",
      linkedinTitle: "LINKEDIN",
      githubTitle: "GITHUB",
      whatsappTitle: "WHATSAPP",
      locationTitle: "UBICACIÓN",
      phoneTitle: "TELÉFONO",
      availabilityTitle: "DISPONIBILIDAD",
      availabilityValue: "Lunes a Viernes, 9:00 - 18:00",
      availableFor: "DISPONIBLE PARA",
      freelance: "FREELANCE",
      fullTime: "TIEMPO COMPLETO",
      consulting: "CONSULTORÍA",
      mapPlaceholder: "Mapa no disponible en la vista previa",
      officeTitle: "OFICINA PRINCIPAL",
      officeAddress: "Calle Gran Vía 123, 28013 Madrid, España",
    },
    admin: {
      loginTitle: "PANEL DE ADMINISTRACIÓN",
      loginDescription: "Inicia sesión para gestionar tu portfolio",
      usernameLabel: "Usuario",
      passwordLabel: "Contraseña",
      loginButton: "INICIAR SESIÓN",
      loginSuccess: "Inicio de sesión exitoso",
      welcomeMessage: "Bienvenido al panel de administración",
      dashboardTitle: "PANEL DE ADMINISTRACIÓN",
      dashboardDescription:
        "Gestiona tu portfolio desde aquí. Añade, edita o elimina proyectos, habilidades, educación y experiencia.",
      projectsTab: "PROYECTOS",
      skillsTab: "HABILIDADES",
      educationTab: "EDUCACIÓN",
      experienceTab: "EXPERIENCIA",
      settingsTab: "AJUSTES",
      settingsTitle: "AJUSTES DEL PORTFOLIO",
      profileSettings: "Información Personal",
      nameLabel: "Nombre",
      emailLabel: "Email",
      locationLabel: "Ubicación",
      phoneLabel: "Teléfono",
      bioLabel: "Biografía",
      cvLabel: "Curriculum Vitae",
      uploadButton: "SUBIR",
      socialSettings: "Redes Sociales",
      availabilitySettings: "Disponibilidad",
      availabilityLabel: "Estado de disponibilidad",
      resetButton: "RESETEAR",
      saveButton: "GUARDAR CAMBIOS",
      backToSite: "VOLVER AL SITIO",
      dashboard: "PANEL PRINCIPAL",
    },
    footer: {
      description:
        "Desarrollador Full Stack especializado en crear experiencias digitales atractivas y funcionales con tecnologías web modernas.",
      quickLinks: "ENLACES RÁPIDOS",
      contactInfo: "INFORMACIÓN DE CONTACTO",
      email: "Email",
      phone: "Teléfono",
      location: "Ubicación",
      rights: "Todos los derechos reservados",
      designedWith: "Diseñado y desarrollado con",
      andStyle: "y estilo Bauhaus-Brutalism",
    },
  },
    "en": {
    "nav": {
      "home": "HOME",
      "about": "ABOUT ME",
      "skills": "SKILLS",
      "projects": "PROJECTS",
      "experience": "EXPERIENCE",
      "contact": "CONTACT"
    },
    "hero": {
      "title": "FULL STACK",
      "subtitle": "DEVELOPER",
      "description": "Creating digital experiences with passion for design and functionality.",
      "contactButton": "CONTACT",
      "projectsButton": "VIEW PROJECTS"
    },
    "home": {
      "aboutPreview": "Fullstack Developer with 3 years of experience building modern and scalable web applications.",
      "skillsPreview": "JavaScript/TypeScript specialist creating dynamic interfaces and robust APIs. Focus on clean code and best practices.",
      "projectsPreview": "Portfolio including e-commerce platforms, management systems and comprehensive professional solutions.",
      "learnMore": "LEARN MORE"
    },
    "about": {
      "title": "ABOUT ME",
      "whoTitle": "WHO I AM",
      "whoText1": "Fullstack Developer specialized in the JavaScript/TypeScript ecosystem. With 3 years of experience creating complete web applications, from database design to modern user interfaces.",
      "whoText2": "My approach combines scalable architectures with intuitive design. Passionate about implementing efficient solutions that balance performance and user experience.",
      "detailsTitle": "PERSONAL DETAILS",
      "name": "Name",
      "location": "Location",
      "email": "Email",
      "availability": "Availability",
      "availabilityValue": "Freelance / Full-time",
      "languages": "Languages",
      "languagesValue": "Spanish (native), English (technical)",
      "downloadCV": "DOWNLOAD CV",
      "bioTitle": "MY STORY",
      "bioText1": "I started my career developing complete solutions for diverse clients, specializing in business applications. I've led all technical aspects from system architecture to final deployment.",
      "bioText2": "My projects include online stores with payment gateways, management systems with complex admin panels, and SaaS platforms with secure authentication and horizontal scalability.",
      "bioText3": "Currently I specialize in modern stacks: Frontend with React/Next.js and Tailwind, Backend with NestJS/Node.js and PostgreSQL. My goal is to create maintainable software that combines technical elegance with exceptional usability."
    },
    "skills": {
      "title": "SKILLS",
      "frontend": "FRONTEND",
      "backend": "BACKEND",
      "tools": "TOOLS",
      "additionalTitle": "ADDITIONAL SKILLS",
      "softSkills": "SOFT SKILLS",
      "softSkill1": "Effective communication and teamwork",
      "softSkill2": "Problem solving and critical thinking",
      "softSkill3": "Time management and organization",
      "softSkill4": "Adaptability and continuous learning",
      "softSkill5": "Leadership and mentoring",
      "languages": "LANGUAGES",
      "language1": "Spanish",
      "language2": "English",
      "nativeLevel": "Native",
      "advancedLevel": "Technical"
    },
    "projects": {
      "title": "PROJECTS",
      "all": "ALL",
      "web": "WEB",
      "mobile": "MOBILE",
      "codeButton": "CODE",
      "demoButton": "DEMO",
      "viewProjectButton": "VIEW PROJECT",
      "timelineTitle": "TIMELINE",
      "featuredTitle": "FEATURED PROJECT",
      "featured": {
        "title": "GYM MANAGEMENT WEBSITE",
        "description": "A website developed for gyms, specifically designed to efficiently manage clients, trainers and subscriptions. The platform allows registering and managing user information, assigning trainers to customized routines, controlling active memberships, and tracking each client's status. All in an intuitive, responsive and easy-to-use interface for both gym staff and clients."
      },
      "ecommerce": {
        "description": "E-commerce platform with shopping cart, payments and admin panel."
      },
      "taskManager": {
        "description": "Task management application with drag and drop functionality, tags and filters."
      },
      "fitnessTracker": {
        "description": "Mobile application for tracking exercises, nutrition and physical progress."
      },
      "chatApp": {
        "title": "REAL-TIME CHAT",
        "description": "Chat application with real-time messaging, rooms and private messages."
      },
      "weatherApp": {
        "description": "Weather forecast application with geolocation and data visualization."
      },
      "musicApp": {
        "title": "MUSIC STREAMING",
        "description": "Music streaming application with custom player and playlists."
      }
    },
    "experience": {
      "title": "EXPERIENCE",
      "technologies": "Technologies used",
      "achievementsTitle": "KEY ACHIEVEMENTS",
      "achievement1": {
        "title": "Performance Optimization",
        "description": "Improved a web application's loading time by 70% through optimization techniques and lazy loading."
      },
      "achievement2": {
        "title": "Scalability",
        "description": "Designed a microservices architecture that allowed scaling the platform from 1,000 to 100,000 users."
      },
      "achievement3": {
        "title": "Innovation",
        "description": "Developed a personalized recommendation algorithm that increased user conversion by 35%."
      },
      "testimonialsTitle": "TESTIMONIALS",
      "testimonial1": {
        "name": "Javier Domínguez",
        "position": "CTO at Tech Innovations",
        "text": "Juan is an exceptional developer who combines solid technical skills with a great ability to understand business needs. His work always exceeds expectations."
      },
      "testimonial2": {
        "name": "Ana Sánchez",
        "position": "Product Director at Digital Solutions",
        "text": "Working with Juan has been an incredible experience. His attention to detail and ability to solve complex problems have been fundamental to the success of our projects."
      },
      "job1": {
        "title": "SENIOR FULL STACK DEVELOPER",
        "period": "2021 - PRESENT",
        "company": "Tech Innovations Inc.",
        "description1": "Led the development of a SaaS project management platform used by over 10,000 users.",
        "description2": "Implemented a microservices architecture that improved system performance by 40%.",
        "description3": "Supervised a team of 5 developers and established CI/CD practices that reduced deployment time by 60%."
      },
      "job2": {
        "title": "FULL STACK DEVELOPER",
        "period": "2018 - 2021",
        "company": "Digital Solutions Co.",
        "description1": "Developed web and mobile applications for clients in finance, healthcare and education sectors.",
        "description2": "Created a RESTful API that processed over 1 million requests daily with an average response time of 50ms.",
        "description3": "Implemented secure authentication and authorization solutions for applications with sensitive data."
      },
      "job3": {
        "title": "FRONTEND DEVELOPER",
        "period": "2016 - 2018",
        "company": "Creative Web Agency",
        "description1": "Designed and developed user interfaces for high-traffic websites and web applications.",
        "description2": "Optimized frontend performance reducing initial load time by 65%.",
        "description3": "Collaborated with UX/UI designers to implement intuitive and accessible user experiences."
      }
    },
    "education": {
      "title": "EDUCATION & CERTIFICATIONS",
      "educationTitle": "EDUCATION",
      "certificationsTitle": "CERTIFICATIONS",
      "degree1": "Computer Science Engineering",
      "university1": "University of Information Sciences",
      "period1": "2018 - 2023"
    },
    "availability": {
      "title": "AVAILABILITY",
      "description": "I'm currently available for new projects and job opportunities. Contact me to discuss how I can help your team!",
      "status": "CURRENT STATUS",
      "statusValue": "AVAILABLE",
      "nextAvailable": "AVAILABLE FROM",
      "nextAvailableValue": "IMMEDIATE",
      "contactButton": "CONTACT ME NOW"
    },
    "cta": {
      "title": "READY TO WORK TOGETHER?",
      "description": "I'm available for freelance projects, full-time positions and consulting. Contact me to discuss your project!",
      "primaryButton": "CONTACT ME",
      "secondaryButton": "VIEW PROJECTS"
    },
    "contact": {
      "title": "CONTACT",
      "formTitle": "SEND ME A MESSAGE",
      "nameLabel": "NAME",
      "namePlaceholder": "Your name",
      "emailLabel": "EMAIL",
      "emailPlaceholder": "your@email.com",
      "subjectLabel": "SUBJECT",
      "subjectPlaceholder": "Your message subject",
      "messageLabel": "MESSAGE",
      "messagePlaceholder": "Your message",
      "submitButton": "SEND MESSAGE",
      "submittingButton": "SENDING...",
      "successTitle": "Message sent!",
      "successMessage": "Thank you for your message. I'll get back to you as soon as possible.",
      "infoTitle": "CONTACT INFORMATION",
      "emailTitle": "EMAIL",
      "linkedinTitle": "LINKEDIN",
      "githubTitle": "GITHUB",
      "whatsappTitle": "WHATSAPP",
      "locationTitle": "LOCATION",
      "phoneTitle": "PHONE",
      "availabilityTitle": "AVAILABILITY",
      "availabilityValue": "Monday to Friday, 9:00 - 18:00",
      "availableFor": "AVAILABLE FOR",
      "freelance": "FREELANCE",
      "fullTime": "FULL-TIME",
      "consulting": "CONSULTING",
      "mapPlaceholder": "Map not available in preview",
      "officeTitle": "MAIN OFFICE",
      "officeAddress": "Gran Vía Street 123, 28013 Madrid, Spain"
    },
    "admin": {
      "loginTitle": "ADMIN PANEL",
      "loginDescription": "Log in to manage your portfolio",
      "usernameLabel": "Username",
      "passwordLabel": "Password",
      "loginButton": "LOG IN",
      "loginSuccess": "Login successful",
      "welcomeMessage": "Welcome to the admin panel",
      "dashboardTitle": "ADMIN PANEL",
      "dashboardDescription": "Manage your portfolio from here. Add, edit or delete projects, skills, education and experience.",
      "projectsTab": "PROJECTS",
      "skillsTab": "SKILLS",
      "educationTab": "EDUCATION",
      "experienceTab": "EXPERIENCE",
      "settingsTab": "SETTINGS",
      "settingsTitle": "PORTFOLIO SETTINGS",
      "profileSettings": "Personal Information",
      "nameLabel": "Name",
      "emailLabel": "Email",
      "locationLabel": "Location",
      "phoneLabel": "Phone",
      "bioLabel": "Biography",
      "cvLabel": "Curriculum Vitae",
      "uploadButton": "UPLOAD",
      "socialSettings": "Social Media",
      "availabilitySettings": "Availability",
      "availabilityLabel": "Availability status",
      "resetButton": "RESET",
      "saveButton": "SAVE CHANGES",
      "backToSite": "BACK TO SITE",
      "dashboard": "MAIN PANEL"
    },
    "footer": {
      "description": "Full Stack Developer specialized in creating attractive and functional digital experiences with modern web technologies.",
      "quickLinks": "QUICK LINKS",
      "contactInfo": "CONTACT INFO",
      "email": "Email",
      "phone": "Phone",
      "location": "Location",
      "rights": "All rights reserved",
      "designedWith": "Designed and developed with",
      "andStyle": ""
    },
  },
}
