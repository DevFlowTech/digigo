"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navigation = [
  { name: "Home", href: "/" },
  {
    name: "Technology",
    href: "/technology",
  },
  {
    name: "Applications",
    href: "/applications",
    submenu: [
      { name: "Agriculture", href: "/applications/agriculture" },
      { name: "Residential", href: "/applications/residential" },
      { name: "Commercial", href: "/applications/commercial" },
      { name: "Industrial", href: "/applications/industrial" },
      { name: "Hospitals", href: "/applications/hospitals" },
    ],
  },
  { name: "Projects", href: "/projects" },
  { name: "Government Projects", href: "/government-projects" },
  { name: "Clients", href: "/clients" },
  { name: "Impact & Savings", href: "/impact" },
  { name: "FAQ", href: "/faq" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <React.Fragment>
      {/* Top Contact Bar - Professional & Clean */}
      <div className="bg-brand-dark text-white/90 py-1.5 fixed top-0 left-0 right-0 z-50 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between gap-2 sm:gap-4 text-[11px] sm:text-xs tracking-wider uppercase font-bold">
            <div className="flex items-center gap-4 sm:gap-8">
              <a
                href="tel:6356311101"
                className="flex items-center gap-2 hover:text-primary-400 transition-colors group"
              >
                <svg
                  className="w-3.5 h-3.5 text-primary-500 group-hover:scale-110 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <span>6356311101</span>
              </a>
              <a
                href="mailto:info.digigo@gmail.com"
                className="hidden md:flex items-center gap-2 hover:text-primary-400 transition-colors group"
              >
                <svg
                  className="w-4 h-4 text-primary-500 group-hover:scale-110 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <span className="lowercase">info.digigo@gmail.com</span>
              </a>
            </div>
            <a
              href="https://www.digigostore.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-primary-400 transition-colors group"
            >
              <svg
                className="w-3.5 h-3.5 text-primary-500 group-hover:scale-110 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                />
              </svg>
              <span className="hidden sm:inline">Store</span>
              <span className="sm:hidden text-[10px]">Store</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Header with Glassmorphism */}
      <header
        className={`fixed left-0 right-0 z-40 transition-all duration-500 ${
          isScrolled
            ? "top-8 bg-white/90 backdrop-blur-xl shadow-strong border-b border-gray-100 py-0"
            : "top-8 bg-white/60 backdrop-blur-md border-b border-transparent py-2"
        }`}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between transition-all duration-300 h-[65px] sm:h-[75px]">
            {/* Logo */}
            <Link href="/" className="flex items-center group flex-shrink-0">
              <div className="relative w-[140px] h-[48px] sm:w-[160px] sm:h-[55px]">
                <Image
                  src="/logo.svg"
                  alt="DIGIGO Logo"
                  fill
                  sizes="(max-width: 640px) 140px, 160px"
                  className="object-contain transition-all duration-500 group-hover:brightness-110"
                  priority
                  unoptimized
                />
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-x-1 xl:gap-x-2">
              {navigation.map((item) => (
                <div
                  key={item.name}
                  className="relative flex items-center"
                  onMouseEnter={() =>
                    item.submenu && setActiveSubmenu(item.name)
                  }
                  onMouseLeave={() => setActiveSubmenu(null)}
                >
                  <Link
                    href={item.href}
                    className="px-3 xl:px-4 py-2 text-[13px] font-bold text-gray-700 hover:text-primary-600 transition-all duration-300 rounded-full hover:bg-primary-50/50 whitespace-nowrap relative group/link"
                  >
                    {item.name}
                    <span className="absolute bottom-1 left-4 right-4 h-0.5 bg-primary-500 scale-x-0 group-hover/link:scale-x-100 transition-transform duration-300 rounded-full"></span>
                  </Link>

                  {/* Submenu with enhanced styling */}
                  {item.submenu && (
                    <AnimatePresence>
                      {activeSubmenu === item.name && (
                        <motion.div
                          initial={{ opacity: 0, y: 15, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 15, scale: 0.95 }}
                          transition={{ duration: 0.2, ease: "easeOut" }}
                          className="absolute top-full left-0 mt-3 w-64 bg-white rounded-2xl shadow-strong border border-gray-100 py-3 z-50 overflow-hidden"
                        >
                          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-brand"></div>
                          {item.submenu.map((subitem) => (
                            <Link
                              key={subitem.name}
                              href={subitem.href}
                              className="block px-6 py-2.5 text-sm font-semibold text-gray-600 hover:bg-primary-50 hover:text-primary-600 transition-all duration-200"
                            >
                              {subitem.name}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:flex items-center flex-shrink-0 ml-4">
              <Link
                href="/contact"
                className="btn-primary px-8 py-2.5 rounded-full shadow-brand hover:shadow-strong transition-all duration-300 whitespace-nowrap text-sm font-bold"
              >
                Get Quote
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl bg-gray-50/50 border border-gray-200 text-gray-700 hover:bg-white hover:shadow-soft transition-all"
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {mobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="lg:hidden overflow-hidden bg-white/95 backdrop-blur-xl rounded-2xl mt-2 border border-gray-100 shadow-strong"
              >
                <div className="p-4 space-y-1">
                  {navigation.map((item) => (
                    <div key={item.name}>
                      <Link
                        href={item.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="block px-4 py-2.5 text-sm font-bold text-gray-700 hover:bg-primary-50 hover:text-primary-600 rounded-xl transition-all"
                      >
                        {item.name}
                      </Link>
                      {item.submenu && (
                        <div className="pl-4 space-y-0.5 mt-0.5 border-l-2 border-primary-100 ml-4">
                          {item.submenu.map((subitem) => (
                            <Link
                              key={subitem.name}
                              href={subitem.href}
                              onClick={() => setMobileMenuOpen(false)}
                              className="block px-4 py-2 text-[13px] font-medium text-gray-500 hover:text-primary-600 rounded-lg transition-colors"
                            >
                              {subitem.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                  <div className="pt-4 px-4">
                    <Link
                      href="/contact"
                      onClick={() => setMobileMenuOpen(false)}
                      className="btn-primary w-full text-center rounded-full whitespace-nowrap py-3"
                    >
                      Get Quote
                    </Link>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      </header>
    </React.Fragment>
  );
}
