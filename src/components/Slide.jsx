import React from "react";
import { RiArrowLeftCircleLine, RiArrowRightCircleLine } from "react-icons/ri";

function Slide() {
  return (
    <div className="mt-10 mb-6 flex items-center justify-between">
      <h5 className="text-gray-300 text-xl">Games on Sale</h5>
      <div className="text-gray-400 text-3xl flex items-center gap-4">
        <RiArrowLeftCircleLine className="cursor-pointer" />
        <RiArrowRightCircleLine className="cursor-pointer text-white" />
      </div>
    </div>
  );
}

export default Slide;
