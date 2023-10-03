import { useState } from "react";
import logo from "../assets/logo.png";
import moon from "../assets/moon.png";

type date = {
  setdark: (value: boolean) => void;
  isDark: boolean;
};

function Navbar(props: date) {
  const [clickMenu, setClickMenu] = useState(false);

  return (
    <nav className="w-full fixed top-0 bg-white z-10 dark:bg-slate-900">
      <div className="container mx-auto flex py-5 justify-between items-center">
        <div className="flex gap-2 items-center">
          <img className="w-8" src={logo} alt="" />
          <span className="text-2xl font-bold text-indigo-900 dark:text-white ">
            Portwind
          </span>
        </div>
        <div>
          <ul className="hidden md:flex space-x-10 text-gray-600 dark:text-gray-100  text-sm font-bold uppercase ">
            <li className="hover:text-gray-500 ">
              <a href="#">Home</a>
            </li>
            <li className="hover:text-gray-500">
              <a href="#about">About Me</a>
            </li>
            <li className="hover:text-gray-500">
              <a href="#services">Services</a>
            </li>
            <li className="hover:text-gray-500">
              <a href="#works">Works</a>
            </li>
            <li className="hover:text-gray-500">
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
        <img
          onClick={() => props.setdark(!props.isDark)}
          className="hidden md:block w-5 cursor-pointer"
          src={moon}
          alt=""
        />
        <div
          onClick={() => setClickMenu(!clickMenu)}
          className="bg-white space-y-1 md:hidden cursor-pointer z-10 mr-3 "
        >
          <div className="w-6 h-0.5 bg-black"></div>
          <div className="w-6 h-0.5 bg-black"></div>
          <div className="w-6 h-0.5 bg-black"></div>
        </div>
        {clickMenu && (
          <ul className="w-full   bg-indigo-900 text-white absolute top-0 left-0 p-10 rounded-b-3xl space-y-10 text-center">
            <li className="">
              <a onClick={() => setClickMenu(!clickMenu)} href="#">
                Home
              </a>
            </li>
            <li className="">
              <a onClick={() => setClickMenu(!clickMenu)} href="#about">
                About Me
              </a>
            </li>
            <li className="">
              <a onClick={() => setClickMenu(!clickMenu)} href="#services">
                Services
              </a>
            </li>
            <li className="">
              <a onClick={() => setClickMenu(!clickMenu)} href="#works">
                Works
              </a>
            </li>
            <li className="">
              <a onClick={() => setClickMenu(!clickMenu)} href="#contact">
                Contact
              </a>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
