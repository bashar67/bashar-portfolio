"use client";
import Image from "next/image";
import dynamic from "next/dynamic";
import styles from "./page.module.css";
import ProjectsPage from "@/components/projects";
import Spinner from "@/components/spinner/spinner";
import ProjectsSplitView from "./more-projects/page";

const AboutPage = dynamic(() => import("@/components/about/about"), {
  ssr: false,
  loading: () => <Spinner />,
});
const SocialLinks = dynamic(() => import("@/components/ui/social-links"), {
  ssr: false,
  loading: () => <Spinner />,
});
const SkillsPage = dynamic(() => import("@/components/skills/skills"), {
  ssr: false,
  loading: () => null,
});
const ServicesPage = dynamic(() => import("@/components/services"), {
  ssr: false,
  loading: () => null,
});
const EducationPage = dynamic(() => import("@/components/education"), {
  ssr: false,
  loading: () => null,
});
const ContactPage = dynamic(() => import("@/components/contact"), {
  ssr: false,
  loading: () => null,
});
const FooterPage = dynamic(() => import("@/components/footer"), {
  ssr: false,
  loading: () => null,
});

const Home = () => {
  return (
    <>
      <section
        id="home"
        className={`${styles.homePage} py-20 min-h-screen flex items-center bg-hero-gradient relative overflow-hidden`}
      >
        <div className="container mx-auto px-6 py-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[600px]">
            <div className="space-y-6 animate-fade-in">
              <h1 className="text-7xl lg:text-6xl font-bold leading-tight">
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
                    loading="eager"
                    placeholder="blur"
                    blurDataURL="/assets/images/blur/profile-photo-blure.webp"
                  />
                </div>
                <div className={styles.circlePrimary}></div>
                <div className={styles.circleAccent}></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <AboutPage />
      <SkillsPage />
      <EducationPage />
      <ServicesPage />
      <ProjectsPage />
      <ContactPage />
      <FooterPage /> */}

      <ProjectsSplitView />
    </>
  );
};
export default Home;
