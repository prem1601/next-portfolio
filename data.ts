import { IService, ISkill } from "./type";
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
