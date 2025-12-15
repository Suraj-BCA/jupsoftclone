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
import HomeCircular from "./components/HomeCircular";
import HomeEmployeeStrength from "./components/HomeEmployeeStrength";
import HomeTodayBirthday from "./components/HomeTodayBirthday";
import HomeLead from "./components/HomeLead";
import HomeVisitor from "./components/HomeVisitor";
import HomeEventCalender from "./components/HomeEventCalender";
import HomeFooterSection from "./components/HomeFooterSection";



export default function HomePage() {
  const modules = [
    { name: "Visitor", path: "/visitor" },
    { name: "Registration", path: "/registration" },
  ];

  return (
    <div className="h-screen flex flex-col bg-slate-100 pt-[]">
      <div className="">
        <Navbar />
      </div>
      <HomeHeader />
      <HomeHeadMenu />
      <div className="pt-[11rem]"> <HomeQuickStatistic /></div>
     
      <div className="flex gap-8">
        <HomeStudentStrength />
        <HomeCircular />
      </div>
      <div className="flex gap-8 ml-8 mt-8">
        <HomeEmployeeStrength />
        <HomeTodayBirthday />
      </div>
      <div className="flex gap-8 ml-8 mt-8">
        <HomeVisitor/>
        <HomeLead/>
      </div>
      <HomeEventCalender/>
      <HomeFooterSection/>
      <HomeFooter />

    </div>
  );
}
