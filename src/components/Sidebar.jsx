import React from "react";
import { useState } from "react";
import {
  RiHome3Line,
  RiStore3Line,
  RiLayout2Line,
  RiApps2Line,
  RiLiveLine,
  RiDownload2Line,
  RiSettings3Line,
  RiCheckboxBlankCircleFill,
  RiMenuFill,
  RiCloseLine,
} from "react-icons/ri";

function Sidebar() {
  const [showMenu, setShowMenu] = useState(true);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    // Contenedor padre
    <div
      className={`fixed top-0 w-75 h-full overflow-y-scroll border border-gray-800 p-8 flex flex-col justify-between bg-[#141414] transition-all z-50 lg:left-0 ${
        showMenu ? "left-0" : "-left-full"
      }`}
    >
      {/* Contenedor superior del sidebar */}
      <div className="">
        {/* Logo */}
        <h1 className="text-white uppercase font-bold text-2xl tracking-[5px] mb-10">
          Tu Logo
        </h1>
        <ul className="text-gray-100 text-xl">
          <li>
            <a className="flex items-center gap-4 hover:bg-[#232323] hover:cursor-pointer py-3 px-4 rounded-xl transition-colors">
              <RiHome3Line /> Home
            </a>
          </li>
          <li>
            <a className="flex items-center gap-4 hover:bg-[#232323] hover:cursor-pointer py-3 px-4 rounded-xl transition-colors">
              <RiStore3Line /> Store
            </a>
          </li>
          <li>
            <a className="flex items-center gap-4 hover:bg-[#232323] hover:cursor-pointer py-3 px-4 rounded-xl transition-colors">
              <RiLayout2Line /> Library
            </a>
          </li>
          <li>
            <a className="flex items-center gap-4 hover:bg-[#232323] hover:cursor-pointer py-3 px-4 rounded-xl transition-colors">
              <RiApps2Line /> Friends
            </a>
          </li>
          <li>
            <a className="flex items-center gap-4 hover:bg-[#232323] hover:cursor-pointer py-3 px-4 rounded-xl transition-colors">
              <RiLiveLine /> Live
            </a>
          </li>
        </ul>
      </div>
      {/* Contenedor inferior del sidebar */}
      <div className="">
        <ul className="text-gray-100 text-xl">
          <li>
            <a className="flex items-center gap-4 hover:bg-[#232323] hover:cursor-pointer py-3 px-4 rounded-xl transition-colors">
              <RiDownload2Line /> Downloads
            </a>
          </li>
          <li>
            <a className="flex items-center gap-4 hover:bg-[#232323] hover:cursor-pointer py-3 px-4 rounded-xl transition-colors">
              <RiSettings3Line /> Settings
            </a>
          </li>
          <li>
            <a className="flex items-center gap-4 hover:bg-[#232323] hover:cursor-pointer py-3 px-4 rounded-xl transition-colors relative">
              <img
                src="https://img.freepik.com/foto-gratis/chico-amable-positivo-teniendo-idea_74855-3630.jpg?w=900&t=st=1680555462~exp=1680556062~hmac=0e012225148d4f822803a28d45a0e630c0b8c6adf274ac7c50eb8b5cc598ad6d"
                className="w-6 h-6 object-cover rounded-full"
              />
              <RiCheckboxBlankCircleFill className="absolute text-green-600 bottom-3 left-8 text-[10px]" />
              UserName
            </a>
          </li>
        </ul>
      </div>
      {/* Btn menu movil */}
      <button
        onClick={toggleMenu}
        className="lg:hidden text-white bg-blue-600 fixed bottom-8 right-5 p-2 text-lg rounded-full z-50"
      >
        {showMenu ? <RiCloseLine /> : <RiMenuFill />}
      </button>
    </div>
  );
}

export default Sidebar;
