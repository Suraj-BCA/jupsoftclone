"use client";
import Link from "next/link";

export default function VisitorHome() {
  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <h1 className="text-3xl font-bold mb-8">Visitor Management</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

        <Link
          href="/visitor/add"
          className="p-6 bg-white shadow rounded-xl border hover:shadow-md hover:bg-gray-50 transition"
        >
          <h2 className="text-xl font-semibold mb-2">Add Visitor</h2>
          <p className="text-sm text-gray-600">
            Register a new visitor and capture their details.
          </p>
        </Link>

        <Link
          href="/visitor/list"
          className="p-6 bg-white shadow rounded-xl border hover:shadow-md hover:bg-gray-50 transition"
        >
          <h2 className="text-xl font-semibold mb-2">Visitor List</h2>
          <p className="text-sm text-gray-600">
            View all visitor entries and manage records.
          </p>
        </Link>

        <Link
          href="/visitor/reports"
          className="p-6 bg-white shadow rounded-xl border hover:shadow-md hover:bg-gray-50 transition"
        >
          <h2 className="text-xl font-semibold mb-2">Reports</h2>
          <p className="text-sm text-gray-600">
            Generate and view visitor logs and analytics.
          </p>
        </Link>

      </div>
    </div>
  );
}
