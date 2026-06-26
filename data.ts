import { IProject, IService, ISkill } from "./type";
import { RiComputerLine } from "react-icons/ri";
import { FaCss3Alt, FaHtml5, FaJs, FaReact, FaServer, FaCode } from "react-icons/fa";
import { AiOutlineApi } from "react-icons/ai";
import { SiClaude } from "react-icons/si";
import { MdDeveloperMode } from "react-icons/md";
import { SiExpress, SiGithubcopilot, SiMongodb, SiNextdotjs, SiTailwindcss, SiTypescript } from "react-icons/si";
import { SiReact } from "react-icons/si";

export const services: IService[] = [
  {
    title: "FrontEnd Developer",
    about:
      "I can build a beautiful and scalable SPA using <b>HTML</b>, <b>CSS</b>  and <b>React.js</b>.",
    Icon: RiComputerLine,
  },
  {
    title: "BackEnd Developer",
    about:
      "Handle database, server, api using <b>Express </b> & other popular frameworks.",
    Icon: FaServer,
  },
  {
    title: "API Development",
    about: "I can develop robust REST API using <b>Node API</b>.",
    Icon: AiOutlineApi,
  },
  {
    title: "Competitive Coder",
    about: "a daily problem solver in <b>HackerRank</b> and <b>Leet Code</b>.",
    Icon: MdDeveloperMode,
  },
];

export const languages: ISkill[] = [
  {
    name: "React.js",
    level: "98%",
    Icon: FaReact,
  },
  {
    name: "CSS",
    level: "80%",
    Icon: FaCss3Alt,
  },
  {
    name: "TypeScript",
    level: "90%",
    Icon: SiTypescript,
  },
  {
    name: "Javascript",
    level: "95%",
    Icon: FaJs,
  },
  {
    name: "Express.js",
    level: "80%",
    Icon: SiExpress,
  },
  {
    name: "MongoDB",
    level: "85%",
    Icon: SiMongodb,
  },
  {
    name: "Tailwind CSS",
    level: "80%",
    Icon: SiTailwindcss,
  },
  {
    name: "Next.js",
    level: "70%",
    Icon: SiNextdotjs,
  },
  {
    name: "HTML",
    level: "80%",
    Icon: FaHtml5,
  },
];

export const tools: ISkill[] = [
  {
    name: "VS Code",
    level: "85%",
    Icon: FaCode,
  },
  {
    name: "Claude",
    level: "85%",
    Icon:  SiClaude,
  },
  {
    name: "Github Copilot",
    level: "85%",
    Icon: SiGithubcopilot,
  },
  {
    name: "React Icons",
    level: "56%",
    Icon: SiReact,
  },
];

export const projects: IProject[] = [
  {
    name: "Portfolio",
    description: "Portfolio is designed and developed using Next.js",
    img_path: "/images/portfolio-nextjs.png",
    deployed_url: "https://portfolio-preetamchinde.vercel.app/",
    github_url: "https://github.com/prem1601/next-portfolio",
    category: ["next"],
    key_techs: ["Next.js", "Tailwind CSS", "Framer Motion"],
  },
  {
    name: "Product Page",
    description: "This is designed to showcase the products.",
    img_path: "/images/product-page.png",
    deployed_url: "https://preetam-product-page.netlify.app",
    github_url: "https://github.com/prem1601/Product-Page",
    category: ["javascript"],
    key_techs: ["HTML", "CSS", "Javascript", "Bootstrap"],
  },
  {
    name: "Chat App",
    description: "This app is a personal chat application.",
    img_path: "/images/chat-app.png",
    deployed_url: "https://reactfirebasechatapp.netlify.app",
    github_url: "https://github.com/prem1601/chat-app",
    category: ["react"],
    key_techs: ["React", "Bootstrap", "Firebase"],
  },
  {
    name: "Workforce System",
    description:
      "This is a workforce system for a company with a RBAC (Role Based Access Control) and a permission system.",
    img_path: "/images/workforce-system.png",
    deployed_url: "https://workforce-saas-app.vercel.app/",
    github_url: "https://github.com/prem1601/Workforce_SaaS",
    category: ["fullstack"],
    key_techs: [
      "MongoDB",
      "Express.js",
      "Node.js",
      "React",
      "Redux Toolkit",
      "JWT",
      "Tailwind CSS",
      "Mongoose",
      "React Query",
      "TypeScript"
    ],
  },
  // {
  //   name: "airbnb Clone",
  //   description:
  //     "This is a Airbnb mini clone with authentication and booking system.",
  //   img_path: "/images/airbnb-clone.png",
  //   deployed_url: "https://airbnb-mini-clone.vercel.app/",
  //   github_url: "https://github.com/prem1601/Airbnb_Mini_Clone",
  //   category: ["fullstack"],
  //   key_techs: ["Node.js", "Express.js", 'EJS', 'express-session', 'bcryptjs', 'express-validator', "MongoDB", "Tailwind CSS"],
  // },
];
