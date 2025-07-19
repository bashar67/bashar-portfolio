"use client";
import Link from "next/link";
import classes from "./nav-link.module.css";

const NavLink = ({ href, children, isActive, onClick }) => {
  const className = [classes.link, isActive && classes.active]
    .filter(Boolean)
    .join(" ");

  return (
    <Link
      href={href}
      onClick={onClick}
      className={className}
      suppressHydrationWarning
    >
      {children}
    </Link>
  );
};

export default NavLink;
