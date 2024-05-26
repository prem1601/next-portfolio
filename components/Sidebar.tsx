import { GiTie } from "react-icons/gi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";

const Sidebar = () => {
  return (
    <div>
      <img
        src="/next.svg"
        alt="user avatar"
        className="w-32 h-32 rounded-full mx-auto"
      />

      <h2 className="my-4 text-3xl font-medium tracking-wider">
        <span>Preetam </span>
        <span>Chinde</span>
      </h2>

      <p className="px-w py-1 bg-gray-200 rounded-full my-3">Web Developer</p>
      <a
        href=""
        className="px-w py-1 bg-gray-200 rounded-full my-3 flex items-center justify-center"
        download="Preetam Chinde CV"
      >
        <GiTie className="w-6 h-6" />
        <span>Download Resume</span>
      </a>

      {/* social icons  */}
      <div className=" flex justify-around items-center text-green-500 w-9/12 md:w-full mx-auto">
        <a href="" target="_blank" rel="noopener noreferrer">
          <FaGithub className="w-8 h-8 cursor-pointer" />
        </a>
        <a href="" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="w-8 h-8 cursor-pointer" />
        </a>
      </div>

      {/* Address  */}
      <div className="my-5 py-4 bg-gray-200 -mx-4">
        <div className="flex items-center justify-center space-x-2">
          <IoLocationOutline className="w-6 h-6" />
          <span>Pune, India</span>
        </div>
        <p className="my-2">preetamchinde@gmail.com</p>
        <p className="my-2">8788717707</p>
      </div>

      {/* Buttons  */}
      <button className=" bg-gradient-to-r from-green-400 to-blue-400 w-8/12 rounded-full py-2 px-5 text-white my-2">Email Me</button>
      <button className=" bg-gradient-to-r from-green-400 to-blue-400 w-8/12 rounded-full py-2 px-5 text-white my-2">Toggle Theme</button>
    </div>
  );
};

export default Sidebar;
