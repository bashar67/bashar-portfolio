import classes from "./about.module.css";

const AboutPage = () => {
  return (
    <section
      id="about"
      className="py-10 bg-[var(--background)] border-b-2 border-[var(--border)]"
    >
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
              I’m a front-end developer passionate about building accessible,
              responsive, and fast websites. With a background in modern
              JavaScript and a keen eye for design, I focus on delivering
              user-first digital experiences using tools like React, Next.js,
              and Tailwind CSS. I’m always exploring new technologies to solve
              real-world problems and enhance user engagement.
            </p>

            <div className="flex justify-center">
              <a
                href="https://drive.google.com/file/d/1-1MD7gPAzUF8KMroWngZL2g7HghAGl7B/view?usp=sharing"
                className={`${classes.aboutBtn} px-6 py-3 text-base sm:text-lg`}
               target="_blank"
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
