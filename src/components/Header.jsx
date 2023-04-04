import React from "react";
import { RiNotification2Fill, RiSearchLine } from "react-icons/ri";

function Header() {
  return (
    <header className="bg-[#141414] fixed lg:pl-[280px] w-full text-white flex flex-col md:flex-row items-center justify-between p-8 gap-4 z-40">
      <nav className="flex items-center gap-4 order-1 lg:order-none">
        <a className="bg-blue-600 px-4 py-2 rounded-full hover:cursor-pointer">
          Discover
        </a>
        <a className="text-gray-500 px-4 py-2 rounded-full hover:cursor-pointer">
          Browse
        </a>
        <a className="text-gray-500 px-4 py-2 rounded-full hover:cursor-pointer">
          Wish list
        </a>
      </nav>
      <ul className="flex items-center gap-4">
        <li>
          <a className="text-gray-500 text-lg">
            <RiNotification2Fill />
          </a>
        </li>
        <li className="flex-1">
          <form className="relative">
            <RiSearchLine className="text-gray-500 absolute top-3 left-2"/>
            <input
              type="text"
              className="bg-[#232323] outline-none text-gray-300 py-2 pl-8 pr-4 rounded-full w-full"
              placeholder="Search"
            />
          </form>
        </li>
      </ul>
    </header>
  );
}

export default Header;
