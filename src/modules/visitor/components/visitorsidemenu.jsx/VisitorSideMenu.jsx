"use client"

import React from 'react'
import Link from 'next/link';
import { usePathname } from "next/navigation";


function VisitorSideMenu() {
  const pathname = usePathname();
  const isActive = (path) =>pathname === path;

  return (
    <div className="w-[19rem] pt-[7.5rem] border-r-black">
      <div className="cursor-pointer font-semibold text-xl pl-8 bg-gray-200 pb-4 pt-4">Visitors</div>
      <div className="">
        <div className="">
          <div className={`cursor-pointer px-4 py-2 transition-all duration-200 mt-3 pl-8 ${isActive("/visitor/manage")? "bg-gray-300 font-semibold" : "hover:bg-gray-200 hover:text-black"}`}>
            <Link href="/visitor/manage">Manage Visitors</Link>
          </div>
        </div>
        <div className={`cursor-pointer  px-4 py-3 transition-all duration-200 pl-8 ${isActive("/visitor/checkin")? "bg-gray-300 font-semibold" : "hover:bg-gray-200 hover:text-black" }`}>
        <Link href="/visitor/checkin">Visitor Check-In</Link>
        </div>
        <div className="cursor-pointer hover:bg-gray-200 hover:text-black  px-4 py-2 transition-all duration-200 pl-8">
          Blacklist Master
        </div>

      </div>
    </div>
  );
}

export default VisitorSideMenu
