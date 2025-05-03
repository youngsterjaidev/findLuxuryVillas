"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu } from "lucide-react";
import Sidebar from "./ui/Sidebar";

export function Navbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <header className="sticky top-0 z-10 bg-secondary border-b-2 border-brand">
        <div className="container mx-auto px-4 py-1">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <Image
                width={100}
                height={8}
                src="/assets/default-monochrome.svg"
                alt="Logo"
                className="h-8 w-full mr-2"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {/*SITE.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-gray-700 hover:text-amber-600 transition-colors font-medium"
              >
                {item.name}
              </Link>
            ))*/}
              <div className="relative hidden">
                <div className="flex gap-1">
                  <input
                    type="text"
                    placeholder="Search..."
                    className="px-4 py-2 w-90 h-8 border bg-surface border-brand focus:outline-none "
                  />
                  <button className="flex items-center cursor-pointer px-4 py-2 h-8 bg-brand text-secondary hover:bg-amber-600 transition-colors">
                    Search
                  </button>
                </div>
                <div className="absolute w-full mt-1 bg-surface border border-gray-200 shadow-lg hidden">
                  {/* Dropdown content will show here when input has text */}
                  <div className="pb-2">
                    <div className="p-4 cursor-pointer border-b-3 border-brand">
                      <div className="text-xl">Estate Villa</div>
                      <div className="text-secondary">
                        Where is true luxury meet
                      </div>
                    </div>
                    <div className="p-4 cursor-pointer">
                      <div className="text-xl">Luxe Heaven</div>
                      <div className="text-secondary">
                        Where is true luxury meet
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <Menu
                className="text-brand cursor-pointer"
                size={32}
                onClick={toggleSidebar}
              />
            </nav>

            {/* Mobile Menu Button */}
            <Menu
              className="md:hidden text-brand cursor-pointer"
              size={32}
              onClick={toggleSidebar}
            />
          </div>
        </div>
      </header>
    </>
  );
}
