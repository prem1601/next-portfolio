import { IProject } from "@/type";
import React, { FunctionComponent, useState } from "react";
import { AiFillGithub, AiFillProject } from "react-icons/ai";
import { MdClose } from "react-icons/md";

const ProjectCard: FunctionComponent<{
  project: IProject;
}> = ({
  project: {
    category,
    deployed_url,
    description,
    github_url,
    img_path,
    key_techs,
    name,
  },
}) => {
  const [showDetail, setShowDetail] = useState(false);

  return (
    <div>
      <div>
        <img
          src={img_path}
          alt={name}
          className=" cursor-pointer"
          onClick={() => setShowDetail(true)}
        />
        <p className="my-2 text-center">{name}</p>
      </div>

      {showDetail && (
        <div className="grid md:grid-cols-2 absolute top-0 left-0 z-10 h-auto w-full gap-x-12 text-black bg-gray-200 dark:text-white dark:bg-dark-100 px-2 py-5">
          <div>
            <div className="">
              <img src={img_path} alt={name} />
              <div className="flex justify-center my-4 space-x-3">
                <a
                  className="flex items-start px-4 py-2 space-x-3 text-lg bg-gray-200 dark:bg-dark-200"
                  href={github_url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <AiFillGithub /> <span>Github</span>
                </a>
                <a
                  className="flex items-start px-4 py-2 space-x-3 text-lg bg-gray-200 dark:bg-dark-200"
                  href={deployed_url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <AiFillProject /> <span>Project</span>
                </a>
              </div>
            </div>
          </div>

          <div>
            <h2 className="mb-3 text-xl font-medium md:text-2xl">{name}</h2>
            <h3 className="mb-3 font-medium">{description}</h3>
            <div className="flex flex-wrap mt-5 space-x-2 text-sm tracking-wider">
              {key_techs.map((tech) => (
                <span
                  className="px-2 py-1 my-1 bg-gray-200 dark:bg-dark-200 rounded-sm"
                  key={tech}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <button
            onClick={() => setShowDetail(false)}
            className="absolute top-3 right-3 rounded-full p-1 focus:outline-none bg-gray-200 dark:bg-dark-200"
          >
            <MdClose size={30} />
          </button>
        </div>
      )}
    </div>
  );
};

export default ProjectCard;
