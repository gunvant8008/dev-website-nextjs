const projectsData = [
  {
    id: 0,
    image: "images/projectImages/00crmDashboard.png",
    title: "User & Sales Dashboard",
    github: "https://github.com/gunvant8008/Institute-crm",
    private: false,
    demo: "https://institute-crm.vercel.app/",
    design: "https://github.com/gunvant8008/Institute-crm/blob/main/README.md",
    category: "Web App",
    description:
      "This is a simple user and sales dashboard for a SAAS business. Used react-query for optimistic updates and caching. Mock service worker is used for mocking api calls. Zod is used for data validation.",
    technologies: [
      "NextJS",
      "React-Query",
      "Zod",
      "Mock Service Worker",
      "Tailwind",
      "Jest"
    ],
    status: "In Progress"
  },
  {
    id: 1,
    image: "images/projectImages/00doctorSearch.png",
    title: "Doctor & Pharmacy Search",
    github: "https://github.com/gunvant8008/gp-search-gmap-nextjs",
    private: true,
    demo: "https://gp-search.vercel.app/",
    design: "https://github.com/gunvant8008/gp-search-gmap-nextjs",
    category: "Web App",
    description:
      "User can search near by doctors and pharmacies based on their current location. Using Google places API to get nearby places data.",
    technologies: [
      "NextJS",
      "React-Query",
      "Google Map API",
      "Google Clusters",
      "Tailwind"
    ],
    status: "Completed"
  },
  {
    id: 2,
    image: "images/projectImages/01UrjaaFitness.png",
    title: "Fitness Store",
    github: "https://github.com/gunvant8008/UrjaaFitness.com-WP",
    private: false,
    demo: "https://urjaafitness.com/",
    design:
      "https://github.com/gunvant8008/UrjaaFitness.com-WP/blob/main/README.md",
    category: "Online Store",
    description:
      "This is a fitness landing page with an online store where clients can buy fitness programs. Clients can pay online using different payment methods.",
    technologies: ["Wordpress", "Woocommerce", "Razorpay"],
    status: "Completed"
  },
  {
    id: 3,
    image: "images/projectImages/01iGyanam.png",
    title: "SAAS Business Website",
    github: "https://github.com/gunvant8008/igyanam.com-nextjs-contentful",
    private: false,
    demo: "https://igyanam.vercel.app",
    design:
      "https://github.com/gunvant8008/igyanam.com-nextjs-contentful/blob/main/README.md",
    category: "Website with CMS",
    description:
      "A clean and simple business website with a content management system. Project is in progress. ",
    technologies: ["Next.js", "Contentful CMS", "Tailwind", "Figma"],
    status: "In Progress"
  },
  {
    id: 4,
    image: "images/projectImages/02BlogApp.jpeg",
    title: "Personal Blog & Portfolio",
    github: "https://github.com/gunvant8008/personal-blog-portfolio-next-tcss",
    private: false,
    demo: "https://gunvant.codewithprojects.com/",
    design:
      "https://github.com/gunvant8008/personal-blog-portfolio-next-tcss/blob/main/README.md",
    category: "Blog",
    description:
      "Blazing fast static blog and personal website using markdown files and nextjs with dark & light theme.",
    technologies: ["NextJS", "Tailwind"],
    status: "Completed"
  },
  {
    id: 5,
    image: "images/projectImages/03CryptoApp.jpeg",
    title: "Live Crypto Market",
    github: "https://github.com/gunvant8008/02-crypto-api-react-tcss",
    private: false,
    demo: "https://incredible-scone-2060aa.netlify.app/",
    design:
      "https://github.com/gunvant8008/02-crypto-api-react-tcss/blob/main/README.md",
    category: "Web App",
    description:
      "Get live cryptocurrencies prices, used coingecko api for live data.",
    technologies: ["React", "Tailwind", "Coingecko-api"],
    status: "Completed"
  }
]

export default projectsData
