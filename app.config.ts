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
        title: "Revivoto",
        link: "https://revivoto.com",
        description:
          "Had a great experience creating a website and dashboards using Nuxt 3, Typescript, Tailwind and other tech stacks such as SASS and headlessui",
      },
    ],
  } as IConfig,
});
