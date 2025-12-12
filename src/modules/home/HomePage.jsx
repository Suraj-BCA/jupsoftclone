"use client";
import Link from "next/link";
import Navbar from "./HomeNav";


export default function HomePage() {
  const modules = [
    { name: "Visitor", path: "/visitor" },
    { name: "Registration", path: "/registration" },
  ];

  return (
    <div className="p-10 min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">ERP Dashboard</h1>
        <Navbar/>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
        {modules.map((m) => (
          <Link
            key={m.name}
            href={m.path}
            className="bg-white p-6 shadow rounded-xl border hover:shadow-md"
          >
            
            <h2 className="text-xl font-semibold">{m.name}</h2>
          </Link>
        ))}
      </div>
    </div>
  );
}
