"use client";
import Link from "next/link";
import styles from "./HomeNav.module.css";
import { Ellipsis } from "lucide-react";
import { Bookmark, Download } from "lucide-react";




export default function Navbar() {
  return (
    <div className="fixed w-full m-0 p-0 bg-blue-600 ">
      <nav className=" ">
        <div className="w-full  bg-blue-900 px-6 py-4 flex items-center justify-between h-16">
          <img className="w-36" src="https://jtpleconnect.s3.ap-south-1.amazonaws.com/Worksheet/ResellerPanel/ProdPic/34f58814-aabe-4e06-82ca-bd9b67c2ce63.png?X-Amz-Expires=18000&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA446H7QDAXHFX764B%2F20251215%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Date=20251215T161253Z&X-Amz-SignedHeaders=host&X-Amz-Signature=ad8f8b3d3b08429f9f8880e71f48f5600755c462a212e35097453103e14c8e10" alt="" />
          <div className=" flex items-center gap-4 text-white text-[17px] font-normal " >
            <a className="inline-block px-4 py-2.5 rounded-md transition-all duration-200 hover:bg-white hover:text-black " href="http://" target="_blank" rel="noopener noreferrer">Visitors</a>
            <a className="inline-block px-4 py-2.5 rounded-md transition-all duration-200 hover:bg-white hover:text-black" href="http://" target="_blank" rel="noopener noreferrer">Lead</a>
            <a className="inline-block px-4 py-2.5 rounded-md transition-all duration-200 hover:bg-white hover:text-black" href="http://" target="_blank" rel="noopener noreferrer">Reception</a>
            <a className="inline-block px-4 py-2.5 rounded-md transition-all duration-200 hover:bg-white hover:text-black" href="http://" target="_blank" rel="noopener noreferrer">Registration</a>
            <a className="inline-block px-4 py-2.5 rounded-md transition-all duration-200 hover:bg-white hover:text-black" href="http://" target="_blank" rel="noopener noreferrer">Student Mgmt</a>
            <a className="inline-block px-4 py-2.5 rounded-md transition-all duration-200 hover:bg-white hover:text-black" href="http://" target="_blank" rel="noopener noreferrer">Attendance</a>
            <a className="inline-block px-4 py-2.5 rounded-md transition-all duration-200 hover:bg-white hover:text-black" href="http://" target="_blank" rel="noopener noreferrer">Fee Mgmt</a>
            <a className="inline-block px-4 py-2.5 rounded-md transition-all duration-200 hover:bg-white hover:text-black" href="http://" target="_blank" rel="noopener noreferrer">Transport</a>
            <a className="inline-block px-4 py-2.5 rounded-md transition-all duration-200 hover:bg-white hover:text-black" href="http://" target="_blank" rel="noopener noreferrer">Activity Mgmt</a>
            <div
              className="
    inline-flex
    items-center
    justify-center
    w-16 h-10 p-2
    rounded-lg
    cursor-pointer
    transition-all duration-200
    hover:bg-white
  "
            >
              <Ellipsis
                strokeWidth={2.5}
                className="w-16 h-16 text-white hover:text-black"
              />
            </div>
            <div
              className="
    w-10 h-10
    flex items-center justify-center
    rounded-lg
    cursor-pointer
    transition-all duration-200
    hover:bg-white
    group
  "
            >
              <Bookmark
                className="
      w-5 h-5
      text-white
      fill-current
      fill-transparent
      transition-all duration-200
      group-hover:text-black
      group-hover:fill-black
    "
              />
            </div>




          </div>
        </div>
        {/* <Link href="/">Home</Link>
        <Link href="/visitor">Visitor</Link>
        <Link href="/registration">Registration</Link> */}
      </nav>
    </div>
  );
}
