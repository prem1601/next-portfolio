import ProjectCard from "@/components/ProjectCard";
import ProjectsNavbar from "@/components/ProjectsNavbar";
import { projects as projectsData } from "@/data";
import { Category } from "@/type";
import React, { useState } from "react";

const Projects = () => {
  const [projects, setProjects] = useState(projectsData);
  const [active, setActive] = useState("all");

  const handleFilterCategory = (caterogy: Category | "all") => {
    if (caterogy === "all") {
      setProjects(projectsData);
      setActive(caterogy);
      return;
    }

    const newArray = projectsData.filter((project) =>
      project.category.includes(caterogy)
    );
    setProjects(newArray);
    setActive(caterogy);
  };

  return (
    <div className="px-6 py-2 overflow-auto" style={{ height: "65vh" }}>
      <ProjectsNavbar handleFilterCategory={handleFilterCategory} active={active} />
      <div className="grid grid-cols-12 gap-4 my-3 relative">
        {projects.map((project, i) => (
          <div className="col-span-12 sm:col-span-6 lg:col-span-4 p-2 bg-gray-200 dark:bg-dark-200 rounded-lg">
            <ProjectCard project={project} key={i} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
