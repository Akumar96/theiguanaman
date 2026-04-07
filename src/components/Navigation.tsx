"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

const routeLinks = [
  { label: "Home", href: "/" },
  { label: "Topics", href: "/topics" },
  { label: "Info", href: "/info" },
];

export default function Navigation() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  const isSolid = !isHome || scrolled;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isSolid
          ? "bg-white/90 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          <Link
            href="/"
            className={`text-xl font-bold tracking-tight transition-colors ${
              isSolid ? "text-green-dark" : "text-white"
            }`}
          >
            IguanaMan
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-10">
            {isHome && links.map((link) => (
              <button
                key={link.href}
                onClick={() => handleClick(link.href)}
                className={`text-sm tracking-wide transition-colors hover:opacity-70 ${
                  isSolid
                    ? "text-foreground/80 hover:text-green-dark"
                    : "text-white/90 hover:text-white"
                }`}
              >
                {link.label}
              </button>
            ))}
            {routeLinks
              .filter((link) => !(link.href === "/" && isHome))
              .map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm tracking-wide transition-colors hover:opacity-70 ${
                    isSolid
                      ? "text-foreground/80 hover:text-green-dark"
                      : "text-white/90 hover:text-white"
                  } ${
                    pathname === link.href
                      ? (isSolid ? "text-green-dark font-medium" : "text-white font-medium")
                      : ""
                  }`}
                >
                  {link.label}
                </Link>
              ))}
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <span
              className={`block w-5 h-0.5 transition-all ${
                isSolid ? "bg-foreground" : "bg-white"
              } ${mobileOpen ? "rotate-45 translate-y-2" : ""}`}
            />
            <span
              className={`block w-5 h-0.5 transition-all ${
                isSolid ? "bg-foreground" : "bg-white"
              } ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`}
            />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md border-t">
          <div className="px-6 py-6 flex flex-col gap-4">
            {isHome && links.map((link) => (
              <button
                key={link.href}
                onClick={() => handleClick(link.href)}
                className="text-left text-lg text-foreground/80 py-2 hover:text-green-dark transition-colors"
              >
                {link.label}
              </button>
            ))}
            {routeLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-left text-lg text-foreground/80 py-2 hover:text-green-dark transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <a
              href="tel:+15551234567"
              className="flex items-center gap-3 text-lg text-green-dark font-semibold py-2 pt-4 border-t border-gray-200 mt-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call Now: (555) 123-4567
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
