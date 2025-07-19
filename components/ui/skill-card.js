"use client";
import useInView from "@/hooks/use-in-view";
import Image from "next/image";

const SkillCard = ({ skill, index }) => {
  const [ref, isVisible] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <div
      ref={ref}
      className={`group relative flex flex-col items-center space-y-4 p-6 bg-[var(--skill-bg)] rounded-2xl hover:scale-105 hover:bg-[var(--primary)] transition-transform duration-500 will-change-transform overflow-hidden ${
        isVisible ? "animate-fade-in" : "opacity-0"
      }`}
      style={{ animationDelay: `${Math.min(index, 10) * 100}ms` }}
    >
      <div className="relative z-10 w-12 h-12 group-hover:scale-110 transition-transform duration-300">
        <Image
          src={skill.icon}
          alt={skill.name}
          width={48}
          height={48}
          priority={index === 0 && isVisible}
          decoding={"async"}
          className="w-full h-full object-contain"
        />
      </div>
      <div className="relative z-10 text-sm font-medium text-center text-[var(--foreground)]">
        {skill.name}
      </div>
    </div>
  );
};

export default SkillCard;
