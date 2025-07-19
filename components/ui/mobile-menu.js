"use client";

import NavLink from "@/components/main-header/nav-link";
import classes from "@/components/main-header/main-header.module.css";

export default function MobileMenu({
  items,
  activeSection,
  hydrated,
  onClose,
  visible,
}) {
  if (!hydrated || !visible) return null;
  return (
    <div className={classes.modalOverlay}>
      <div className={classes.modalBody} onClick={(e) => e.stopPropagation()}>
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 text-[var(--foreground)] rounded ..."
        >
          <svg
            width="48"
            height="48"
            fill="none"
            viewBox="0 0 24 24"
            stroke="hsl(260, 100%, 70%)"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <nav>
          <ul className="flex flex-col space-y-6 …">
            {items.map(({ href, label }) => (
              <li key={href}>
                <NavLink
                  href={href}
                  isActive={hydrated && activeSection === href.slice(1)}
                  onClick={onClose}
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}
