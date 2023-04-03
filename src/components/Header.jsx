import React from "react";
import { RiNotification2Fill, RiSearchLine } from "react-icons/ri";

function Header() {
  return (
    <div className="fixed pl-[340px] w-full text-white flex items-center justify-between p-8">
      <nav className="flex items-center gap-4">
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
        <li>
          <form className="relative">
            <RiSearchLine className="text-gray-500 absolute top-3 left-2"/>
            <input
              type="text"
              className="bg-[#232323] outline-none text-gray-300 py-2 pl-8 pr-4 rounded-full"
            />
          </form>
        </li>
      </ul>
    </div>
  );
}

export default Header;
