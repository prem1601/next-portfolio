import { GiTie } from "react-icons/gi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { useTheme } from "next-themes";

const Sidebar = () => {
  // Toggle Theme
  const { theme, setTheme } = useTheme();
  const changeTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <>
      <img
        src="/images/image.jpg"
        alt="user avatar"
        className="w-32 h-32 rounded-full mx-auto shadow-custom-light dark:shadow-custom-dark"
      />

      <h2 className="my-4 text-3xl font-medium tracking-wider font-averia">
        <span className="text-greenn">Preetam </span>
        <span>Chinde</span>
      </h2>

      <p className="px-w py-1 bg-gray-200 dark:bg-dark-300 rounded-full my-3">Web Developer</p>
      <a
        href="/assets/Preetam_Chinde.pdf"
        className="px-w py-1 bg-gray-200 dark:bg-dark-300 rounded-full my-3 flex items-center justify-center"
        download="Preetam Chinde CV"
      >
        <GiTie className="w-6 h-6" />
        <span>Download Resume</span>
      </a>

      {/* social icons  */}
      <div className=" flex justify-around items-center text-greenn w-8/12 md:w-full mx-auto my-3 md:my-5">
        <a
          href="https://github.com/prem1601"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="w-8 h-8 cursor-pointer" />
        </a>
        <a
          href="https://www.linkedin.com/in/preetam-chinde-5258a01b6"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className="w-8 h-8 cursor-pointer" />
        </a>
      </div>

      {/* Address  */}
      <div className="my-5 py-4 bg-gray-200 dark:bg-dark-300 -mx-4">
        <div className="flex items-center justify-center space-x-2">
          <IoLocationOutline className="w-6 h-6" />
          <span>Pune, India</span>
        </div>
        <p className="my-2">preetamchinde@gmail.com</p>
        <p className="my-2">8788717707</p>
      </div>

      {/* Buttons  */}
      <button
        className=" bg-gradient-to-r from-greenn to-blue-400 w-8/12 rounded-full py-2 px-5 text-white my-2 hover:scale-105 hover:transition-all"
        onClick={() => window.open("mailto:preetamchinde@gmail.com")}
      >
        Email Me
      </button>
      <button
        className=" bg-gradient-to-r from-greenn to-blue-400 w-8/12 rounded-full py-2 px-5 text-white my-2 hover:scale-105 hover:transition-all"
        onClick={changeTheme}
      >
        Toggle Theme
      </button>
    </>
  );
};

export default Sidebar;
