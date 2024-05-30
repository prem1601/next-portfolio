import { IProject, IService, ISkill } from "./type";
import { RiComputerLine } from "react-icons/ri";
import { FaServer } from "react-icons/fa";
import { AiOutlineApi } from "react-icons/ai";
import { BsCircleFill } from "react-icons/bs";
import { MdDeveloperMode } from "react-icons/md";

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
    level: "75%",
    Icon: BsCircleFill,
  },
  {
    name: "CSS",
    level: "80%",
    Icon: BsCircleFill,
  },
  {
    name: "TypeScript",
    level: "70%",
    Icon: BsCircleFill,
  },
  {
    name: "Javascript",
    level: "70%",
    Icon: BsCircleFill,
  },
  {
    name: "Express.js",
    level: "60%",
    Icon: BsCircleFill,
  },
  {
    name: "MongoDB",
    level: "48%",
    Icon: BsCircleFill,
  },
  {
    name: "Tailwind CSS",
    level: "60%",
    Icon: BsCircleFill,
  },
  {
    name: "Next.js",
    level: "50%",
    Icon: BsCircleFill,
  },
  {
    name: "HTML",
    level: "80%",
    Icon: BsCircleFill,
  },
];

export const tools: ISkill[] = [
  {
    name: "VS Code",
    level: "60%",
    Icon: BsCircleFill,
  },
  {
    name: "React Icons",
    level: "53%",
    Icon: BsCircleFill,
  },
  {
    name: "Framer Motion",
    level: "70%",
    Icon: BsCircleFill,
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
];
