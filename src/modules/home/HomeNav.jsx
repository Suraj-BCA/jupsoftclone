"use client";
import Link from "next/link";
import styles from "./HomeNav.module.css";


export default function Navbar() {
  return (
    <div className="bg-black">
    <nav className="w-full bg-black  p-4 flex gap-6">
      <div className="bg-black d-flex"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjsScWYmyfPv3XdkNdEFVJ1wlDKMOgcSWUcg&s" alt="" /></div>
      <div className={styles.nav}>
        <a href="http://" target="_blank" rel="noopener noreferrer">Vistor</a>
        <a href="http://" target="_blank" rel="noopener noreferrer">Lead</a>
        <a href="http://" target="_blank" rel="noopener noreferrer">Reception</a>
        <a href="http://" target="_blank" rel="noopener noreferrer">Registration</a>
        <a href="http://" target="_blank" rel="noopener noreferrer">Student Mgmt</a>
        <a href="http://" target="_blank" rel="noopener noreferrer">Attendance</a>
        <a href="http://" target="_blank" rel="noopener noreferrer">Fee Mgmt</a>
        <a href="http://" target="_blank" rel="noopener noreferrer">Transport</a>
        <a href="http://" target="_blank" rel="noopener noreferrer">Activity</a>
      </div>
      <Link href="/">Home</Link>
      <Link href="/visitor">Visitor</Link>
      <Link href="/registration">Registration</Link>
    </nav>
    </div>
  );
}
