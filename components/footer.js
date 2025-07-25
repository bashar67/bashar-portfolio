"use client";
import dynamic from "next/dynamic";
import Link from "next/link";

const SocialLinks = dynamic(() => import("@/components/ui/social-links"));

const FooterPage = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[var(--secondary)]/50 py-12 border-t border-[var(--border)]/50">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 justify-center md:justify-between gap-8 text-center md:text-left">
          <div>
            <Link
              href="#home"
              aria-label="Go to homepage"
              className="text-2xl font-bold  text-[var(--primary)] mb-4 hover:text-[var(--primary)]/80 transition-colors duration-300"
            >
              <b>BASHAR</b>
            </Link>

            <p className="text-[var(--muted-foreground)]">
              Front-end Developer
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Follow Me</h4>
            <SocialLinks />
          </div>
        </div>

        <div className="border-t border-[var(--border)]/50 mt-8 pt-8 text-center">
          <p className="text-[var(--muted-foreground)] text-sm">
            © {currentYear} Bashar Yousre. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterPage;
