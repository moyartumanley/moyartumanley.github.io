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
          description: "These are some projects that I&#39;ve worked on!",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-repositories",
          title: "repositories",
          description: "My Github profile and projects that I&#39;ve worked on.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/repositories/";
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
      },{id: "post-google-gemini-updates-flash-1-5-gemma-2-and-project-astra",
        
          title: 'Google Gemini updates: Flash 1.5, Gemma 2 and Project Astra <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "We’re sharing updates across our Gemini family of models and a glimpse of Project Astra, our vision for the future of AI assistants.",
        section: "Posts",
        handler: () => {
          
            window.open("https://blog.google/technology/ai/google-gemini-update-flash-ai-assistant-io-2024/", "_blank");
          
        },
      },{id: "post-displaying-external-posts-on-your-al-folio-blog",
        
          title: 'Displaying External Posts on Your al-folio Blog <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://medium.com/@al-folio/displaying-external-posts-on-your-al-folio-blog-b60a1d241a0a?source=rss-17feae71c3c4------2", "_blank");
          
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
