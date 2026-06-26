import { Category } from "@/type";
import { FunctionComponent } from "react";
import { projects } from "@/data";

const NavItem: FunctionComponent<{
  value: Category | "all";
  active: string;
  handleFilterCategory: Function;
}> = ({ value, handleFilterCategory, active }) => {
  let classaName = "cursor-pointer hover:text-greenn capitalize";
  if (value === active) classaName += " text-greenn";
  return (
    <li className={classaName} onClick={() => handleFilterCategory(value)}>
      {value}
    </li>
  );
};

const ProjectsNavbar: FunctionComponent<{
  handleFilterCategory: Function;
  active: string;
}> = ({ handleFilterCategory, active }) => {
  return (
    <div className="flex space-x-3 px-2 py-2 list-none overflow-x-auto">
      <NavItem
        value="all"
        handleFilterCategory={handleFilterCategory}
        active={active}
      />
      {projects.map((project) => (
        <NavItem
          key={project.category[0]}
          value={project.category[0]}
          handleFilterCategory={handleFilterCategory}
          active={active}
        />
      ))}
    </div>
  );
};

export default ProjectsNavbar;
