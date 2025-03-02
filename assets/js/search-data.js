// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-blog",
          title: "Blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-projects",
          title: "Projects",
          description: "A growing collection of your cool projects.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-repositories",
          title: "Repositories",
          description: "Github Repo&#39;s for my most pertinent projects.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/repositories/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "DESCRIPTION",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "dropdown-adsb-airports",
              title: "ADSB Airports",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/projects/1_project/";
              },
            },{id: "dropdown-iex-final-project",
              title: "IEX Final Project",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/projects/2_project/";
              },
            },{id: "dropdown-iex-training",
              title: "IEX Training",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/projects/3_project/";
              },
            },{id: "dropdown-bayesian-modelling",
              title: "Bayesian Modelling",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/projects/4_project/";
              },
            },{id: "dropdown-cms-independent-study",
              title: "CMS Independent Study",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/projects/5_project/";
              },
            },{id: "post-my-first-blog-post",
      
        title: "My First Blog Post",
      
      description: "I&#39;m very new to this",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2015/first_post/";
        
      },
    },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-a-simple-inline-announcement",
          title: 'A simple inline announcement.',
          description: "",
          section: "News",},{id: "news-a-long-announcement-with-details",
          title: 'A long announcement with details',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_2/";
            },},{id: "news-a-simple-inline-announcement-with-markdown-emoji-sparkles-smile",
          title: 'A simple inline announcement with Markdown emoji! :sparkles: :smile:',
          description: "",
          section: "News",},{id: "projects-airport-identification",
          title: 'Airport Identification',
          description: "Identification of airports based on plane density, with image recognition capacity",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-iex-final-presentation",
          title: 'IEX Final Presentation',
          description: "An app showcasing all the mini projects done as a part of the IEX data science internship",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-iex-training",
          title: 'IEX Training',
          description: "General overview of what I learned as an intern at IEX",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{id: "projects-bayesian-modelling",
          title: 'Bayesian Modelling',
          description: "My final project from my Bayesian Modelling class at UMass Amherst",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project/";
            },},{id: "projects-cms-synthetic-data-project",
          title: 'CMS Synthetic Data Project',
          description: "Data science project investigating and replicating methodologies used on real Medicare and Medicaid data",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%6C%75%6B%65%77%69%6C%73%65%6E%34%35@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/lwilsen", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/Luke Wilsen", "_blank");
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
