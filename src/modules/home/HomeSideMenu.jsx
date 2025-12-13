import React from "react";

export default function HomeSideMenu() {
  return (
    <div className="w-72 h-full border-r-2 border-gray-300">
      <div className="cursor-pointer font-semibold text-xl pl-8 bg-gray-200 pb-4 pt-4">Visitors</div>
      <div className="">
        <div className="">
          <div className="cursor-pointer hover:bg-gray-200 hover:text-black  px-4 py-2 transition-all duration-200 mt-3 pl-8">
            Manage Visitors
          </div>
        </div>
        <div className="cursor-pointer hover:bg-gray-200 hover:text-black  px-4 py-3 transition-all duration-200 pl-8">
          Visitor Check-In
        </div>
        <div className="cursor-pointer hover:bg-gray-200 hover:text-black  px-4 py-2 transition-all duration-200 pl-8">
          Blacklist Master
        </div>

      </div>
    </div>
  );
}
