const EducationPage = () => {
  return (
    <section id="qualification" className="py-10 bg-[var(--background)]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">Education</h2>
          <p className="text-[var(--muted-foreground)] text-lg">
            My learning journey
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          {/* Vertical timeline line */}
          <div className="absolute left-1/2 transform -translate-x-0.5 w-0.5 h-full bg-[var(--border)]"></div>

          <div className="flex flex-col gap-y-12">
            {/* Top Box - Bachelor's Degree on left side */}
            <div className="relative">
              <div className="bg-[var(--card)] rounded-lg p-6 hover:bg-[var(--card-hover)] transition-colors duration-300 animate-fade-in ml-auto md:ml-0 md:w-[calc(50% - 1px)]">
                <h4 className="font-semibold text-lg mb-2">
                  Bachelor&apos;s of Law
                </h4>
                <p className="text-[var(--muted-foreground)] mb-2">
                  Cairo University
                </p>
                <div className="flex items-center text-sm text-primary">
                  📅 2018 - 2023
                </div>
              </div>
            </div>

            {/* Bottom Box - Competition on right side */}
            <div className="relative">
              <div
                className="bg-[var(--card)] rounded-lg p-6 hover:bg-[var(--card-hover)] transition-colors duration-300 animate-fade-in mr-auto md:mr-0 md:w-[calc(50% - 1px)]"
                style={{ animationDelay: "200ms" }}
              >
                <h4 className="font-semibold text-lg mb-2">
                  Kalbonyan-Elmarsos Competition
                </h4>
                <div className="flex items-center text-sm text-primary mb-4">
                  📅 2023 - 2024
                </div>
                <p className="text-[var(--muted-foreground)] text-sm leading-relaxed">
                  Update this part: This initiative aims to target individuals
                  with no prior programming experience and assist them in
                  learning programming from scratch until they reach a level
                  that enables them to work. The goal is to create high-quality
                  technical professionals within the Arab nation.
                </p>
                <p className="text-[var(--muted-foreground)] text-sm leading-relaxed">
                  you can find more information about the courses that I have
                  completed in this competition on my{" "}
                  <a
                    href="https://github.com/bashar67/Kalbonyan-Elmarsos-Bashar"
                    target="_blank"
                    className="text-[var(--primary)]"
                  >
                    {" "}
                    Repo
                  </a>
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
