"use client"; // Required for interactivity

import { useEffect } from "react";
import Link from "next/link";

export default function Sidebar({ isOpen, toggleSidebar }) {
  // Close sidebar when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (isOpen && !e.target.closest(".sidebar")) {
        toggleSidebar();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen, toggleSidebar]);

  // Handle navigation clicks
  const handleNavClick = () => {
    if (isOpen) {
      toggleSidebar();
    }
  };

  return (
    <aside
      className={`sidebar fixed top-0 right-0 h-full w-64 bg-surface text-secondary shadow-xl transform transition-transform duration-300 ease-in-out z-20 ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="p-4">
        {/* <button
          onClick={toggleSidebar}
          className="absolute top-4 left-4 text-gray-600 hover:text-gray-900"
        >
          ✕
        </button> */}
        <div>
          <nav>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="font-normal text-xl block p-2"
                  onClick={handleNavClick}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="font-normal text-xl block p-2"
                  onClick={handleNavClick}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="font-normal text-xl block p-2"
                  onClick={handleNavClick}
                >
                  Contact
                </Link>
              </li>
              {/* <li>
                <Link
                  href="/signin"
                  className="font-normal text-xl block p-2"
                  onClick={handleNavClick}
                >
                  SignIn/SignUp
                </Link>
              </li>
              <li>
                <Link
                  href="/villas"
                  className="font-normal text-xl block p-2"
                  onClick={handleNavClick}
                >
                  My Bookings
                </Link>
              </li> */}
              <li>
                <Link
                  href="/villas"
                  className="font-normal text-xl block p-2"
                  onClick={handleNavClick}
                >
                  Villas
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </aside>
  );
}
