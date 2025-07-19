import { memo } from "react";
import skills from "@/data/skills-data.json";
import SkillCard from "@/components/ui/skill-card";

const SkillsPage = () => {
  return (
    <section
      id="skills"
      className="py-10 bg-[var(--background)]/30 border-b-2 border-[var(--border)]"
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
            <SkillCard key={skill.id} skill={skill} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default memo(SkillsPage);
