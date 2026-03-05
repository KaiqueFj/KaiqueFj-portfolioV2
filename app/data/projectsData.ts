export const projects = [
  {
    slug: "sneakers-store",
    imageSrc: "/Images/icons/icon.png",
    title: "Sneakers Store",
    description:
      "A modern full-stack e-commerce platform inspired by Nike’s design system, focused on delivering a smooth product discovery experience and a complete online purchasing workflow.",

    problemSolved:
      "Many small online stores struggle to provide a smooth and intuitive shopping experience while maintaining performance and secure authentication. Users often face slow product browsing, confusing checkout flows, and inconsistent interfaces across devices. The challenge was to design a modern storefront that allows users to quickly explore products, manage their shopping cart, authenticate securely, and complete purchases with minimal friction.",

    solution:
      "Developed a full-stack sneaker e-commerce platform using Next.js with a focus on performance, scalability, and modern UI patterns. Implemented authentication with NextAuth, dynamic product browsing with filtering, and persistent cart management. Supabase was used for backend services including database and authentication, while TailwindCSS enabled a responsive and consistent UI inspired by modern retail platforms.",

    highlights: [
      "Implemented secure authentication and session management using NextAuth",
      "Built dynamic product browsing with filtering and state management",
      "Designed a persistent shopping cart system with database integration",
      "Created a responsive UI with TailwindCSS optimized for mobile and desktop",
    ],

    technologies: [{ name: "NextJS" }, { name: "NextAuth" }, { name: "Supabase" }, { name: "Tailwind" }],

    links: [
      { name: "website", link: "https://crypto-currency-pgqa.onrender.com/overview" },
      { name: "github", link: "https://github.com/kaiqu/sneakers-store" },
    ],

    date: "Feb. 2026",
    linkText: "Sneakers-store.app",
  },

  {
    slug: "crypto-tracker",
    imageSrc: "/Images/icons/crypto-logo-coin.png",
    title: "Crypto Tracker",
    description:
      "A web platform designed to simplify cryptocurrency market monitoring by consolidating real-time price data, market metrics, and sentiment indicators into a single interface.",

    problemSolved:
      "Crypto investors often rely on multiple platforms to track prices, market trends, and market sentiment indicators. This fragmented experience makes it difficult to quickly understand overall market conditions or monitor multiple assets efficiently.",

    solution:
      "Built a server-rendered crypto dashboard that integrates with the CoinGecko API to fetch real-time market data. The platform aggregates price movements, market statistics, and sentiment indicators into a unified interface to simplify market analysis.",

    highlights: [
      "Integrated CoinGecko API for real-time cryptocurrency price data",
      "Aggregated market statistics and sentiment indicators in a single dashboard",
      "Implemented server-rendered pages using the Pug template engine",
      "Optimized data retrieval and persistence using MongoDB",
    ],

    technologies: [{ name: "NodeJS" }, { name: "MongoDB" }, { name: "Pug template" }, { name: "CoinGecko" }],

    links: [
      { name: "website", link: "https://crypto-currency-pgqa.onrender.com/overview" },
      { name: "github", link: "https://github.com/kaiqu/sneakers-store" },
    ],

    date: "Mar. 2025",
  },

  {
    slug: "super-chat",
    imageSrc: "/Images/icons/chat-icon.png",
    title: "Super Chat",
    description:
      "A real-time messaging platform designed to provide fast, reliable, and secure communication between users.",

    problemSolved:
      "Many traditional web applications lack real-time communication capabilities, which limits interactive user experiences. The challenge was to build a messaging system capable of delivering messages instantly while maintaining persistent chat history and supporting multiple concurrent users.",

    solution:
      "Developed a real-time chat application using Socket.io to enable instant bidirectional communication between clients and the server. The system stores chat history in MongoDB and manages connections and user sessions through a Node.js and Express backend.",

    highlights: [
      "Handles real-time message delivery using WebSockets",
      "Supports persistent chat history with MongoDB",
      "Manages concurrent user connections with Socket.io",
      "Optimized UI rendering with server-side templates using Pug",
    ],

    technologies: [{ name: "NodeJS" }, { name: "MongoDB" }, { name: "Pug template" }, { name: "Socket.io" }],

    links: [
      { name: "website", link: "https://crypto-currency-pgqa.onrender.com/overview" },
      { name: "github", link: "https://github.com/kaiqu/sneakers-store" },
    ],

    date: "Sep. 2025",
  },
];
