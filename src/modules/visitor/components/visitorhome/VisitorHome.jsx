"use client";

import VisitorSideMenu from "../visitorsidemenu.jsx/VisitorSideMenu";
import VisitorDashboard from "../visitordashboard/VisitorDashboard";
import VisitorAnalysis from "../visitordashboard/VisitorAnalysis";
import VisitorDepartment from "../visitordashboard/VisitorDepartment";
import VisitorTodayPandingCheckOut from "../visitordashboard/VisitorTodayPandingCheckOut";

export default function VisitorHome() {
  return (
    <div className="flex h-screen overflow-hidden">
      <div className=" bg-white border-r-2">
        <VisitorSideMenu />
      </div>

      <div className="flex-1 overflow-y-auto bg-slate-100 ">
        <div className="pt-32 ml-5 ">
          <VisitorDashboard />
          <VisitorAnalysis />
          <VisitorDepartment/>
          <VisitorTodayPandingCheckOut/>
        </div>
      </div>

    </div>
  );
}
