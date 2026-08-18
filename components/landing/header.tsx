"use client";

import Link from "next/link";
import { useState } from "react";

const nav = [
  { href: "#features", label: "Features" },
  { href: "/courses", label: "Tutorials" },
  { href: "/projects", label: "Projects" },
  { href: "/interview", label: "Interview" },
];

export function LandingHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-[#FCF8F1] bg-opacity-30">
      <div className="px-4 mx-auto sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <div className="flex-shrink-0">
            <Link href="/" title="Interview Help" className="flex">
              <span className="text-xl font-bold text-black">
                Interview <span className="text-blue-600">Help</span>
              </span>
            </Link>
          </div>

          <button
            type="button"
            className="inline-flex p-2 text-black transition-all duration-200 rounded-md lg:hidden focus:bg-gray-100 hover:bg-gray-100"
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((value) => !value)}
          >
            <svg className={`${open ? "hidden" : "block"} w-6 h-6`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 8h16M4 16h16" />
            </svg>
            <svg className={`${open ? "block" : "hidden"} w-6 h-6`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <div className="hidden lg:flex lg:items-center lg:justify-center lg:space-x-10">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                title={item.label}
                className="text-base text-black transition-all duration-200 hover:text-opacity-80"
              >
                {item.label}
              </Link>
            ))}
          </div>

          <Link
            href="/courses/object-oriented-programming"
            title="Start learning"
            className="hidden lg:inline-flex items-center justify-center px-5 py-2.5 text-base transition-all duration-200 hover:bg-yellow-300 hover:text-black focus:text-black focus:bg-yellow-300 font-semibold text-white bg-black rounded-full"
            role="button"
          >
            Start learning
          </Link>
        </div>

        {open ? (
          <nav className="pt-4 pb-6 bg-white border border-gray-200 rounded-md shadow-md lg:hidden">
            <div className="flow-root">
              <div className="flex flex-col px-6 -my-2 space-y-1">
                {nav.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    title={item.label}
                    onClick={() => setOpen(false)}
                    className="inline-flex py-2 text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
            <div className="px-6 mt-6">
              <Link
                href="/courses/object-oriented-programming"
                title="Start learning"
                onClick={() => setOpen(false)}
                className="inline-flex items-center justify-center px-4 py-3 text-base font-semibold text-white transition-all duration-200 bg-black rounded-full hover:bg-yellow-300 hover:text-black"
                role="button"
              >
                Start learning
              </Link>
            </div>
          </nav>
        ) : null}
      </div>
    </header>
  );
}
