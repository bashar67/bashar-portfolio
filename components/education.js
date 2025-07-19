"use client";

import useInView from "@/hooks/use-in-view";

const EducationPage = () => {
  const [ref1, isVisible1] = useInView({ triggerOnce: true });
  const [ref2, isVisible2] = useInView({ triggerOnce: true });
  return (
    <section
      id="education"
      className="py-20 border-b-2 border-[var(--border)] bg-[var(--background)]"
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">Education</h2>
          <p className="text-[var(--muted-foreground)] text-lg">
            My learning journey
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          {/* Vertical timeline line */}
          <div className="absolute left-1/2 transform -translate-x-0.5 w-0.5 h-full bg-[var(--border)] md:block"></div>

          <div className="flex flex-col gap-y-12">
            {/* Top Box - Bachelor's Degree on left side */}
            <div className="relative" ref={ref1}>
              <div
                className={`bg-[var(--card)] rounded-lg p-6 hover:bg-[var(--card-hover)] transition-colors duration-300  ml-auto md:ml-0 md:w-[calc(50% - 1px)] ${
                  isVisible1 ? "animate-fade-in" : "opacity-0"
                }`}
              >
                <h3 className="font-semibold text-lg mb-2">
                  Bachelor&apos;s of Law
                </h3>
                <p className="text-[var(--muted-foreground)] mb-2">
                  Cairo University
                </p>
                <time className="text-sm text-primary" dateTime="2018-2023">
                  📅 2018 - 2023
                </time>
              </div>
            </div>

            {/* Bottom Box - Competition on right side */}
            <div className="relative" ref={ref2}>
              <div
                className={`bg-[var(--card)] rounded-lg p-6 hover:bg-[var(--card-hover)] transition-colors duration-300 mr-auto md:mr-0 md:w-[calc(50% - 1px)] ${
                  isVisible2 ? "animate-fade-in" : "opacity-0"
                }`}
                style={{ animationDelay: "200ms" }}
              >
                <h3 className="font-semibold text-lg mb-2">
                  Kalbonyan-Elmarsos Competition
                </h3>
                <time
                  className="flex items-center text-sm text-primary mb-4"
                  dateTime="2023-2024"
                >
                  📅 2023 - 2024
                </time>
                <p className="text-[var(--muted-foreground)] text-sm leading-relaxed">
                  Kalbonyan Elmarsos is an initiative that empowers individuals
                  with no prior experience in programming by guiding them
                  through structured learning paths to become job-ready
                  developers.
                </p>
                <p className="text-[var(--muted-foreground)] text-sm leading-relaxed">
                  View my progress and completed courses on{" "}
                  <a
                    href="https://github.com/bashar67/Kalbonyan-Elmarsos-Bashar"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--primary)] font-semibold underline px-2 py-1 rounded hover:bg-[var(--primary)] hover:text-[var(--primary-foreground)] transition-colors duration-300"
                  >
                    this repository
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationPage;
