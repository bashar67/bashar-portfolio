"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import classes from "./main-header.module.css";
import NavLink from "./nav-link";

const MainHeader = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const handleClose = () => setMenuOpen(false);

  return (
    <>
      <header className={classes.header}>
        <Link className={classes.logo} href="/">
          Bashar
        </Link>
        {/* Desktop Nav */}
        <nav className={`${classes.nav} hidden md:block`}>
          <ul className="flex flex-wrap gap-2 sm:gap-4 lg:gap-8 text-sm sm:text-base lg:text-5xl px-1 py-1">
            <li>
              <NavLink
                href="/"
                className={pathname === "/" ? classes.active : ""}
              >
                Home
              </NavLink>
            </li>

            <li>
              <NavLink
                href="/skills"
                className={pathname === "/skills" ? classes.active : ""}
              >
                Skills
              </NavLink>
            </li>
            <li>
              <NavLink
                href="/services-page"
                className={pathname === "/services-page" ? classes.active : ""}
              >
                Services
              </NavLink>
            </li>

            <li>
              <NavLink
                href="/projects"
                className={pathname === "/projects" ? classes.active : ""}
              >
                Projects
              </NavLink>
            </li>
            <li>
              <NavLink
                href="/contact"
                className={pathname === "/contact" ? classes.active : ""}
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>
        {/* Mobile Menu Icon - hidden when modal is open */}
        {!menuOpen && (
          <button
            className="md:hidden p-2 rounded focus:outline-none focus:ring-2 focus:ring-primary"
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
      {/* Modal for Mobile Nav */}
      {menuOpen && (
        <div className={classes.modalOverlay} onClick={handleClose}>
          <div
            className={classes.modalBody}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-6 right-6 text-2xl text-white z[101]"
              aria-label="Close menu"
              onClick={handleClose}
            >
              &times;
            </button>
            <nav className="w-full">
              <ul className="flex flex-col space-y-6 text-lg text-white items-center">
                <li onClick={handleClose}>
                  <NavLink
                    href="/"
                    className={pathname === "/" ? classes.active : ""}
                  >
                    Home
                  </NavLink>
                </li>

                <li onClick={handleClose}>
                  <NavLink
                    href="/skills"
                    className={pathname === "/skills" ? classes.active : ""}
                  >
                    Skills
                  </NavLink>
                </li>
                <li onClick={handleClose}>
                  <NavLink
                    href="/services-page"
                    className={
                      pathname === "/services-page" ? classes.active : ""
                    }
                  >
                    Services
                  </NavLink>
                </li>

                <li onClick={handleClose}>
                  <NavLink
                    href="/projects"
                    className={pathname === "/projects" ? classes.active : ""}
                  >
                    Projects
                  </NavLink>
                </li>
                <li onClick={handleClose}>
                  <NavLink
                    href="/contact"
                    className={pathname === "/contact" ? classes.active : ""}
                  >
                    Contact
                  </NavLink>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      )}
    </>
  );
};

export default MainHeader;
