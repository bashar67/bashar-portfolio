"use client";
import Image from "next/image";
import dynamic from "next/dynamic";
import skills from "@/data/skills.json";
const EducationPage = dynamic(() => import("@/components/education"));

const SkillsPage = () => {
  return (
    <>
      <section
        id="skills"
        className="py-10 bg-[var(--background)]/30 border-b-2 border-[var(--border)] "
      >
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">My Skills</h2>
            <p className="text-[var(--muted-foreground)] text-lg">
              My technical skills
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 max-w-6xl mx-auto">
            {skills.map((skill, index) => (
              <div
                key={skill.id}
                className="group relative flex flex-col items-center space-y-4 p-6 bg-[var(--skill-bg)] rounded-2xl hover:bg-[var(--primary)] transition-all duration-500 hover:scale-105 animate-fade-in overflow-hidden"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* <div className="absolute inset-0 bg-[var(--primary)] translate-x-[-100%] transition-transform duration-500 group-hover:translate-x-0 opacity-20"></div> */}
                <div className="relative z-10 w-12 h-12 group-hover:scale-110 transition-transform duration-300">
                  <Image
                    src={skill.icon}
                    alt={skill.name}
                    fill
                    className="w-full h-full object-contain"
                    priority={index === 0} // Load first image with priority
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                    loading={index === 0 ? "eager" : "lazy"}
                  />
                </div>
                <div className="relative z-10 text-sm font-medium text-center text-[var(--foreground)]">
                  {skill.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <EducationPage />
    </>
  );
};

export default SkillsPage;
