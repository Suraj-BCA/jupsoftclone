"use client";
import Link from "next/link";
import Navbar from "./HomeNav";
import HomeHeader from "./HomeHeader";
import HomeMain from "./HomeMain";
import HomeSideMenu from "./HomeSideMenu";


export default function HomePage() {
  const modules = [
    { name: "Visitor", path: "/visitor" },
    { name: "Registration", path: "/registration" },
  ];

  return (
    <div className="h-screen flex flex-col ">
      <div className="">
        <Navbar />
      </div>
      <div>
      <HomeHeader />
      </div>
      <HomeSideMenu />

    </div>
  );
}
