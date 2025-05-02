import Link from "next/link";
import { SITE } from "@/config/site";
import { Menu } from "lucide-react";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-secondary border-b-2 border-brand">
      <div className="container mx-auto px-4 py-1">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <img
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
            <div className="relative">
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

            <Menu className="text-brand" size={32} />
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-gray-700">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
