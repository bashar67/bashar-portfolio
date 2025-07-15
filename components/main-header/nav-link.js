"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import classes from "./nav-link.module.css";

const NavLink = ({ href, children }) => {
  const path = usePathname();

  // Only mark "/" active when exactly at root, otherwise use startsWith()
  const isActive = href === "/" ? path === "/" : path.startsWith(href);

  return (
    <Link
      href={href}
      className={`${classes.link} ${isActive ? classes.active : ""}`}
    >
      {children}
    </Link>
  );
};

export default NavLink;
