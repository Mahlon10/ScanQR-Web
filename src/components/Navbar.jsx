'use client';

import React, { useState, Suspense } from "react";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import '../styles/globals.css';

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    {
      label: "Professionals",
      link: "/",
      isActive: pathname === "/",
    },
    {
      label: "Designers",
      link: "/categories",
      isActive: pathname.startsWith("/categories"),
    },
    {
      label: "Bloggers",
      link: "/digital-product",
      isActive: pathname.startsWith("/digital-product"),
    },
    {
      label: "Developers",
      link: "/develop",
      isActive: pathname.startsWith("/free-shelf"),
    },
    {
      label: "Artists",
      link: "/artist",
      isActive: pathname.startsWith("/free-shelf"),
    },
    {
      label: "Fashion",
      link: "/free-shelf",
      isActive: pathname.startsWith("/free-shelf"),
    },
];

  return (
     <nav className="z-50 fixed top-0 left-0 w-full bg-black/40 flex justify-between pr-20 px-9 py-7 pl-8">
       <Link href="/" className="relative flex items-center">
         <img
             src="/logo.png" // Replace with your actual logo URL or path alt="Logo"
             className="h-7 w-auto md:h-8"
         />
       </Link>
       <ul className="hidden md:flex gap-4">
         {links.map((link) => (
             <Link
                 key={link.link}
                 href={link.link}
                 className={clsx(
                     "font-medium px-3 py-1 transition duration-300 rounded-full text-white",
                         link.isActive
                         ? "text-white bg-transparent border border-white border-2 rounded-full"
                        : "text-white hover:text-[#d4e0e2]"
                 )}
             >
               {link.label}
             </Link>
         ))}
       </ul>

      {/* Hamburger for Mobile */}
       <button
           className="md:hidden focus:outline-none z-50"
           onClick={() => setMenuOpen(!menuOpen)}
       >
         {menuOpen ? (
             <svg
                 className="w-12 h-12 text-white"
                 fill="none"
                 stroke="currentColor"
                 viewBox="0 0 24 24"
                 xmlns="http://www.w3.org/2000/svg"
             >
               <path
                   strokeLinecap="round"
                   strokeLinejoin="round"
                   strokeWidth={2}
                   d="M6 18L18 6M6 6l12 12"
               />
             </svg>
         ) : (
             <svg
                 className="w-6 h-6 text-white"
                 fill="none"
                 stroke="currentColor"
                 viewBox="0 0 24 24"
                 xmlns="http://www.w3.org/2000/svg"
             >
               <path
                   strokeLinecap="round"
                   strokeLinejoin="round"
                   strokeWidth={2}
                   d="M4 6h16M4 12h16M4 18h16"
               />
             </svg>
         )}
       </button>


      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="fixed top-0 left-0 h-full w-1/2 bg-black/90 p-4 md:hidden z-40 transform transition-transform duration-300 animate-slide-in">
          <ul className="flex flex-col gap-4 mt-16">
            {links.map((link) => (
                <Link
                key={link.link}
                href={link.link}
                className={clsx(
                  "font-medium px-3 py-1 transition duration-300 rounded-full text-white",
                    link.isActive
                        ? "text-white bg-transparent border border-white border-2 rounded-full"
                        : "text-white"
                )}
                onClick={() => setMenuOpen(false)} // Close menu on click
              >
                {link.label}
              </Link>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}