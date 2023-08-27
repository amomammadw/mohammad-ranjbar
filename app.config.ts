export default defineAppConfig({
  config: {
    // * header
    header: {
      title: "Mohammad Ranjbar",
      slogan: "Frontend Developer",
      items: [
        { link: "https://github.com/amomammadw82", icon: "mdi:github" },
        {
          link: "https://www.linkedin.com/in/mohammad-ranjbar-15408518b/",
          icon: "mdi:linkedin",
        },
        {
          link: "/files/Ranjbar-CV.pdf",
          icon: "mdi:file-pdf-box",
        },
      ],
    },

    // * about
    about: {
      title: "Hi There 👋",
      description:
        "My name is <b class='text-blue-500'>Mohammad</b>, a passionate Frontend Developer based in <b>Tehran, Iran</b> with <b>3+ years</b> of experience in Vuejs and Nuxt, also worked with react, nextjs and typescript and ready to start your projects :)",
      image: {
        src: "/img/me.jpg",
        alt: "Mohammad Ranjbar",
      },
    },

    // * projects
    projects: [
      {
        title: "AI Home Design",
        link: "https://aihomedesign.webp",
        description:
          "Had a delightful experience in creating a web application that integrates with a AI engine for redesigning houses.",

        image: {
          src: "/img/projects/aihomedesign.webp",
          alt: "AIhomedesign",
        },

        stack: [
          "Vuejs",
          "Nuxtjs",
          "Typescript",
          "TailwindCSS",
          "HeadlessUI",
          "Pusherjs",
        ],
      },
      {
        title: "Revivoto",
        link: "https://revivoto.com",
        description:
          "Collaborated with an professional team to create a fully-featured website and user-dashboard to handle heavy processes and realtime connections using web sockets",

        image: {
          src: "/img/projects/revivoto.webp",
          alt: "Revivoto",
        },

        stack: [
          "Vuejs 3",
          "Nuxtjs",
          "Pinia",
          "Typescript",
          "TailwindCSS",
          "HeadlessUI",
          "Socket IO",
        ],
      },
      {
        title: "Trader4",
        link: "https://github.com/traderfour/Trader4.net",
        description:
          "Had a great time working with a international team to create a great marketplace for traders",

        image: {
          src: "/img/projects/trader4.webp",
          alt: "Trader Four",
        },

        stack: [
          "Typescript",
          "Nuxt",
          "Pinia",
          "i18n",
          "TailwindCSS",
          "Flowbite",
        ],
      },
    ],
    skills: [
      { src: "/svg/typescript.svg", alt: "Typescript" },
      { src: "/svg/git.svg", alt: "Git" },
      { src: "/svg/nuxt.svg", alt: "Nuxt" },
      { src: "/svg/next.svg", alt: "Nextjs" },
      { src: "/svg/vue.svg", alt: "Vuejs" },
      { src: "/svg/react.svg", alt: "Reactjs" },
      { src: "/svg/tailwind.svg", alt: "TailwindCSS" },
      { src: "/svg/vuetify.svg", alt: "Vuetify" },
    ],
  } as IConfig,
});
