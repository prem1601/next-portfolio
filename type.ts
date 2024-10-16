export interface IService {
  title: string;
  about: string;
  Icon: any;
}

export interface ISkill {
  name: string;
  level: string;
  Icon: any;
}

export type Category = "react" | "next" | "javascript";
// export type Category = 'react' | 'node' | 'express' | 'mongo' | 'next' | 'javascript'
export interface IProject {
  name: string;
  description: string;
  img_path: string;
  deployed_url: string;
  github_url: string;
  category: Category[];
  key_techs: string[];
}
