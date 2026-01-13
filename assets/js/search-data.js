// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "These are some projects that I&#39;ve worked on. Some have been for courses while others are more personal projects. For development projects, I&#39;ve linked the GitHub repo towards the top of each project page. Most of my data visualization projects were done in Observable and written in JavaScript. I&#39;ve attached links to my Observable notebooks if you&#39;re interested in looking at my code! UX mockups are present on the page and prototypes will be linked as well!",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "Attached is a web version of my CV!",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "post-my-semester-abroad",
        
          title: "my semester abroad!",
        
        description: "Aug 16th - Dec 12th 2025",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/study-abroad/";
          
        },
      },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-website-update",
          title: 'Website update!',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/website-update/";
            },},{id: "news-first-blog-post-reflections-on-my-semester-abroad",
          title: 'First blog post!: reflections on my semester abroad',
          description: "",
          section: "News",},{id: "projects-analysis-of-different-llms-large-language-models",
          title: 'Analysis of Different LLMs (Large Language Models)',
          description: "Analysis using a dataset from GapMinder. Work was done for Data-driven Information Visualization course.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/ai-worldview/";
            },},{id: "projects-mn-barley-yields",
          title: 'MN Barley Yields',
          description: "d3.js visualizations from my Data-driven Information Visualizations course.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/barley-yields/";
            },},{id: "projects-discord-in-your-heart",
          title: 'Discord In Your Heart',
          description: "Submission for 2024 Cupid Game Jam hosted by Game Devs @ Mac",
          section: "Projects",handler: () => {
              window.location.href = "/projects/discord-in-your-heart/";
            },},{id: "projects-2026-summer-internship-season",
          title: '2026 Summer Internship Season',
          description: "The job market was NOT looking too hot this year. Sankey chart showing my applications and their results.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/employment/";
            },},{id: "projects-simple-c-shell",
          title: 'Simple C Shell',
          description: "This project utilizes C to implement a basic shell capable of parsing basic commands, input and output redirection, and piping. Worked on this for my Computer Systems course.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/shell-script/";
            },},{id: "projects-sl-departure-display",
          title: 'SL Departure Display',
          description: "An 8x8 pixel display that shows departures for Stockholm public transit. Worked on this during my semester abroad!",
          section: "Projects",handler: () => {
              window.location.href = "/projects/sl-departure/";
            },},{id: "projects-2025-thanksgiving-break",
          title: '2025 Thanksgiving Break',
          description: "A map visualization of my activities during Thanksgiving break. I made this while studying abroad but unfortunately only collected GPS data for two days. Some GPS data, such as when I went thrifting, was lost, however I still recorded the spots I visited on the embedded map below.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/thanksgiving-break/";
            },},{id: "projects-ux-portfolio-mockup",
          title: 'UX Portfolio Mockup',
          description: "A mockup of a potential UX portfolio site created in Figma.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/ux-portfolio-wireframe/";
            },},{id: "projects-imageboard-web-scraper",
          title: 'Imageboard Web Scraper',
          description: "A python-based web scraper created for ongoing research that I am a part of.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/web-scraper/";
            },},{
        id: 'social-cv',
        title: 'CV',
        section: 'Socials',
        handler: () => {
          window.open("/assets/pdf/Moyartu_s_Resume.pdf", "_blank");
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%6D%6D%61%6E%6C%65%79@%6D%61%63%61%6C%65%73%74%65%72.%65%64%75", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/moyartumanley", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/moyartu-manley", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
