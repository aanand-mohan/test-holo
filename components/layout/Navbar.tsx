'use client';

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileSubMenuOpen, setIsMobileSubMenuOpen] = useState(false);
  const [isScrolledDown, setIsScrolledDown] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check initial screen size and listen for resizing
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const onScroll = () => {
      // On mobile, we never want to trigger the "scrolled down" state animations/hiding
      if (window.innerWidth < 768) {
        setIsScrolledDown(false);
        return;
      }

      const currentScrollY = window.scrollY;

      // If at the very top, always show the centered (default) state
      if (currentScrollY <= 20) {
        setIsScrolledDown(false);
      } else {
        // If we are scrolled down...
        if (currentScrollY > lastScrollY) {
          // AND scrolling down -> Show wide/hidden state
          setIsScrolledDown(true);
        } else {
          // AND scrolling up -> Show centered state
          setIsScrolledDown(false);
        }
      }
      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);



  const menuItems = [
    {
      name: "Use cases",
      hasDropdown: true,
      children: [
        { name: "Facebook Reels Maker", color: "bg-blue-100 text-blue-600" },
        { name: "AI Script Writer", color: "bg-purple-100 text-purple-600" },
        { name: "Instagram Reels Maker", color: "bg-rose-100 text-rose-600" },
        { name: "AI UGC Generator", color: "bg-indigo-100 text-indigo-600" },
        { name: "TikTok Video Generator", color: "bg-zinc-100 text-black" },
        { name: "Video Ad Generator", color: "bg-orange-100 text-orange-600" },
        { name: "AI Stock Avatars", color: "bg-pink-100 text-pink-600" },
      ]
    },
    { name: "Affiliate", href: "#" },
    { name: "Blog", href: "#" },
    { name: "About us", href: "#" },
    { name: "Login", href: "#" },
  ];

  return (
    <nav className="fixed top-4 left-0 right-0 z-50 pointer-events-none">
      <div
        className={`
          relative mx-auto flex items-center
          transition-all duration-500 ease-in-out
          px-4 md:px-6
          
          /* Mobile: Always full width/spread */
          w-full justify-between
          
          /* Desktop: Adaptive */
          md:w-auto
          ${isScrolledDown
            ? "md:max-w-[1400px] md:justify-between"
            : "md:max-w-fit md:justify-center md:gap-3"
          }
        `}
      >
        {/* LOGO */}
        <motion.div
          className="pointer-events-auto bg-white/90 backdrop-blur-md shadow-sm rounded-full p-1.5"
          animate={{ x: (isScrolledDown && !isMobile) ? -20 : 0 }}
          transition={{ type: "spring", stiffness: 220, damping: 26 }}
        >
          <Link
            href="/"
            className="block relative w-9 h-9 md:w-10 md:h-10 rounded-full overflow-hidden"
            onClick={(e) => {
              // On mobile (less than 768px), toggle the menu instead of navigating
              if (window.innerWidth < 768) {
                e.preventDefault();
                setIsMobileMenuOpen(!isMobileMenuOpen);
              }
            }}
          >
            <Image
              src="/logo.png"
              alt="Logo"
              fill
              className="object-cover"
            />
          </Link>
        </motion.div>

        {/* DESKTOP NAV MENU */}
        <motion.div
          className="hidden md:flex pointer-events-auto bg-white/90 backdrop-blur-md shadow-sm rounded-full px-6 py-3 items-center gap-6"
          animate={{
            opacity: isScrolledDown ? 0 : 1,
            scale: isScrolledDown ? 0.94 : 1,
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          style={{ pointerEvents: isScrolledDown ? "none" : "auto" }}
        >
          {menuItems.map((item) => (
            <Link
              key={item.name}
              href={item.href || "#"}
              className="text-[15px] font-medium text-gray-800 hover:text-black transition flex items-center gap-1 whitespace-nowrap"
            >
              {item.name}
              {item.hasDropdown && (
                <svg
                  width="10"
                  height="6"
                  viewBox="0 0 10 6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="opacity-50"
                >
                  <path d="M1 1L5 5L9 1" />
                </svg>
              )}
            </Link>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          className="
            pointer-events-auto
            group
            relative
            rounded-full
            p-[2px]
            bg-[linear-gradient(107deg,#3e86c6_0%,#a666aa_25%,#ec4492_49%,#ee4454_73%,#f05427_100%)]
            shadow-sm
          "
          animate={{ x: (isScrolledDown && !isMobile) ? 20 : 0 }}
          transition={{ type: "spring", stiffness: 220, damping: 26 }}
        >
          <div className="bg-white rounded-full px-4 py-2 md:px-6 md:py-2.5">
            <Link
              href="#"
              className="flex items-center gap-2 text-sm font-semibold text-black whitespace-nowrap"
            >
              Start Generating
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="opacity-60 group-hover:opacity-100 transition-opacity"
              >
                <path d="M1 11L11 1M11 1H1M11 1V11" />
              </svg>
            </Link>
          </div>
        </motion.div>
      </div>

      {/* MOBILE MENU DROPDOWN */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, height: 0 }}
            animate={{ opacity: 1, y: 0, height: "auto" }}
            exit={{ opacity: 0, y: -20, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden pointer-events-auto absolute top-full left-4 right-4 mt-2 bg-white/95 backdrop-blur-xl shadow-lg rounded-3xl overflow-hidden border border-gray-100"
          >
            <div className="flex flex-col p-6 gap-4">
              {menuItems.map((item) => (
                <div key={item.name} className="flex flex-col">
                  {item.hasDropdown ? (
                    <>
                      <button
                        onClick={() => setIsMobileSubMenuOpen(!isMobileSubMenuOpen)}
                        className="text-xl font-bold text-gray-900 flex items-center justify-between w-full text-left"
                      >
                        {item.name}
                        <motion.svg
                          animate={{ rotate: isMobileSubMenuOpen ? 180 : 0 }}
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-gray-500"
                        >
                          <path d="M6 9l6 6 6-6" />
                        </motion.svg>
                      </button>
                      <AnimatePresence>
                        {isMobileSubMenuOpen && item.children && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="overflow-hidden"
                          >
                            <div className="flex flex-col pl-2 pt-4 gap-4">
                              {item.children.map((child: { name: string; color?: string; href?: string }) => (
                                <Link
                                  key={child.name}
                                  href={child.href || "#"}
                                  className="flex items-center gap-3 text-gray-600 hover:text-black transition group"
                                >
                                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${child.color || "bg-blue-100 text-blue-600"}`}>
                                    {/* Simple Icon Placeholders */}
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                                    </svg>
                                  </div>
                                  <span className="text-[15px] font-medium">{child.name}</span>
                                </Link>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <Link
                      href={item.href || "#"}
                      className="text-xl font-bold text-gray-900 block"
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}