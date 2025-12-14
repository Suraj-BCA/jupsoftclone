"use client";
import Link from "next/link";
import Navbar from "./HomeNav";
import HomeHeader from "./HomeHeader";
import HomeMain from "./HomeFooter";
import HomeSideMenu from "./HomeSideMenu";
import HomeFooter from "./HomeFooter";
import HomeHeadMenu from "./HomeHeadMenu";
import HomeQuickStatistic from "./components/HomeQuickStatistic";
import HomeStudentStrength from "./components/HomeStudentStrength";



export default function HomePage() {
  const modules = [
    { name: "Visitor", path: "/visitor" },
    { name: "Registration", path: "/registration" },
  ];

  return (
    <div className="h-screen flex flex-col bg-gray-200">
      <div className="">
        <Navbar />
      </div>
      <div>
      <HomeHeader />
      </div>
      <HomeHeadMenu />
      <HomeQuickStatistic/>
      <HomeStudentStrength/>
      <HomeFooter/>

    </div>
  );
}
