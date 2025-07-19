"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import classes from "./main-header.module.css";
import NavLink from "./nav-link";
import useActiveSection from "@/hooks/useActiveSection";
const MobileMenu = dynamic(() => import("@/components/ui/mobile-menu"), {
  ssr: false,
});

const navItems = [
  { href: "#home", label: "Home" },
  { href: "#skills", label: "Skills" },
  { href: "#services", label: "Services" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

const sectionIds = ["home", "skills", "services", "projects", "contact"];

const MainHeader = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const activeSection = useActiveSection(sectionIds);

  const [hydrated, setHydrated] = useState(false);
  useEffect(() => setHydrated(true), []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const handleClose = () => setMenuOpen(false);

  return (
    <>
      <header className={classes.header}>
        <Link className={classes.logo} href="#home">
          Bashar
        </Link>

        {/* Desktop Nav */}
        <nav className={`${classes.nav} hidden md:block`}>
          <ul className="flex flex-wrap gap-2 sm:gap-4 lg:gap-8 text-sm sm:text-base lg:text-xl px-1 py-1">
            {navItems.map(({ href, label }) => (
              <li key={href}>
                <NavLink
                  href={href}
                  scroll={false}
                  isActive={hydrated && activeSection === href.replace("#", "")}
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile menu icon */}
        {!menuOpen && (
          <button
            className="md:hidden p-2  text-[var(--foreground)] rounded focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
            aria-label="Open menu"
            onClick={() => setMenuOpen(true)}
          >
            <svg
              width="32"
              height="32"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        )}
      </header>

      {/* Modal Nav */}
      <MobileMenu
        items={navItems}
        activeSection={activeSection}
        hydrated={hydrated}
        onClose={handleClose}
        visible={menuOpen}
      />
    </>
  );
};

export default MainHeader;
