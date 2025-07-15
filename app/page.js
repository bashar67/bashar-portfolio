"use client";

import Image from "next/image";
import dynamic from "next/dynamic";
import styles from "./page.module.css";

const AboutPage = dynamic(() => import("@/components/about/about"), {
  ssr: false,
});

const SocialLinks = dynamic(() => import("@/components/socialLinks"), {
  ssr: false,
});

export default function Home() {
  return (
    <>
      <section
        id="home"
        className={`${styles.homePage} min-h-screen flex items-center bg-hero-gradient relative overflow-hidden`}
      >
        <div className="container mx-auto px-6 py-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[600px]">
            <div className="space-y-6 animate-fade-in">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                Hi, I&apos;m{" "}
                <span className="text-[var(--primary)]">Bashar</span>
              </h1>
              <h2 className="text-2xl lg:text-3xl text-[var(--muted-foreground)]">
                Front-end Developer based in Egypt.
              </h2>
              <p className="text-lg text-[var(--muted-foreground)] leading-relaxed max-w-md">
                Specializing in stunning interfaces and dynamic user
                interactions with a focus on performance and accessibility.
              </p>
              <div className="h-16">
                <SocialLinks />
              </div>
            </div>

            <div className="flex justify-center lg:justify-end">
              <div className={`relative ${styles.floatContainer}`}>
                <div
                  className={`w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-primary/20 ${styles.imageGlow} shadow-[0_10px_40px_rgba(138,43,226,0.4)]`}
                >
                  <Image
                    src="/assets/images/profile-photo.webp"
                    alt="Bashar-Front-end Developer"
                    className="w-full h-full object-cover"
                    width="384"
                    height="384"
                    priority
                    quality={80}
                    placeholder="blur"
                    blurDataURL="iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNk+A8AAQUBAScY42YAAAAASUVORK5CYII="
                  />
                </div>
                <div className={styles.circlePrimary}></div>
                <div className={styles.circleAccent}></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <AboutPage />
    </>
  );
}
