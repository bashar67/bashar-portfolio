import classes from "./about.module.css";

const AboutPage = () => {
  return (
    <section id="about" className="py-24 bg-[var(--background)]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">About Me</h2>
          <p className="text-[var(--muted-foreground)] text-lg">
            My introduction
          </p>
        </div>

        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-6">
            <p className="text-[var(--muted-foreground)] leading-relaxed text-lg">
              I&apos;m a front-end developer with a passion for crafting
              visually appealing and highly functional user experiences. I enjoy
              transforming complex problems into simple, elegant, and responsive
              web interfaces. With a solid foundation in modern web technologies
              and a sharp eye for design, I build digital experiences that are
              both beautiful and performance-driven.
            </p>

            <div className="flex justify-center">
              <a
                href="https://drive.google.com/file/d/1QmIpsezwpOPHmzBgYRYvZG0j5K8PkgGO/view?usp=drivesdk"
                className={classes.aboutBtn}
                download
              >
                Download CV <span className={classes.aboutBtnArrow}>↓</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
