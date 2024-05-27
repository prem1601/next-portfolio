import Link from "next/link";
import { useRouter } from "next/router";
import { FunctionComponent, useEffect, useState } from "react";

const NavItem: FunctionComponent<{
  activeItem: string;
  setActiveItem: Function;
  routeName: string;
  route: string;
}> = ({ activeItem, setActiveItem, routeName, route }) => {
  return (
    activeItem !== routeName && (
      <Link href={route} onClick={() => setActiveItem(routeName)}>
        <span className="hover:text-greenn">{routeName}</span>
      </Link>
    )
  );
};


const Navbar = () => {
  const [activeItem, setActiveItem] = useState<string>("");

  const { pathname } = useRouter();

  useEffect(() => {
    if (pathname === "/") setActiveItem("About");
    if (pathname === "/projects") setActiveItem("Projects");
    if (pathname === "/resume") setActiveItem("Resume");
  }, []);

  return (
    <div className="flex items-center justify-between px-5 py-3 my-3">
      <span className="font-bold text-greenn text-lg border-b-4 border-greenn md:text-2xl ">
        {activeItem}
      </span>
      <div className="flex space-x-5 text-lg">
        <NavItem
          activeItem={activeItem}
          setActiveItem={setActiveItem}
          routeName="About"
          route="/"
        />
        <NavItem
          activeItem={activeItem}
          setActiveItem={setActiveItem}
          routeName="Projects"
          route="/projects"
        />
        <NavItem
          activeItem={activeItem}
          setActiveItem={setActiveItem}
          routeName="Resume"
          route="/resume"
        />
      </div>
    </div>
  );
};

export default Navbar;
