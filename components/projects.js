"use client";

import { useCallback, useEffect, useState } from "react";
import { motion, LayoutGroup } from "motion/react";
import projects from "@/data/projects.json";
import ProjectSlide from "./ui/project-slide";
import Link from "next/link";

export default function ProjectsPage() {
  const [groupIndex, setGroupIndex] = useState(0);

  const groupedProjects = [];
  for (let i = 0; i < projects.length; i += 4) {
    groupedProjects.push(projects.slice(i, i + 4));
  }

  const totalGroups = groupedProjects.length;

  const next = useCallback(() => {
    setGroupIndex((prev) => (prev + 1) % totalGroups);
  }, [totalGroups]);

  const prev = useCallback(() => {
    setGroupIndex((prev - 1 + totalGroups) % totalGroups);
  }, [totalGroups]);

  useEffect(() => {
    const timer = setTimeout(next, 7000);
    return () => clearTimeout(timer);
  }, [groupIndex, next]);

  return (
    <section
      id="projects"
      className="scroll-mt-[120px] py-20 bg-[var(--background)]/30 border-b border-[var(--border)] flex flex-col items-center gap-10"
    >
      {/* ✅ عنوان بأسلوب Education */}
      <div className="text-center mb-8">
        <h2 className="text-4xl lg:text-5xl font-bold mb-4">Projects</h2>
        <p className="text-[var(--muted-foreground)] text-lg">
          Here are the projects—each crafted with purpose and precision.
        </p>
      </div>

      <LayoutGroup>
        <motion.div
          layout
          className="grid grid-cols-2 grid-rows-2 gap-6 px-4 max-w-[900px] w-full mx-auto place-items-center"
          transition={{ layout: { duration: 0.5, ease: "easeInOut" } }}
        >
          {groupedProjects[groupIndex].map((project, i) => (
            <motion.div
              layout
              key={project.id}
              initial={{ opacity: 0, y: 30, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                duration: 0.4,
                delay: i * 0.08,
                ease: "easeOut",
              }}
              className="w-full flex flex-col justify-between"
            >
              <ProjectSlide project={project} index={i + groupIndex * 4} />
            </motion.div>
          ))}
        </motion.div>
      </LayoutGroup>

      <div className="flex gap-6">
        <button
          onClick={prev}
          className="bg-[hsl(260,100%,70%)] text-[hsl(230,24%,7%)] px-4 py-2 rounded hover:scale-105 transition ring-2 ring-transparent hover:ring-[hsl(260,100%,70%)]"
        >
          ◀ Prev
        </button>
        <button
          onClick={next}
          className="bg-[hsl(260,100%,70%)] text-[hsl(230,24%,7%)] px-4 py-2 rounded hover:scale-105 transition ring-2 ring-transparent hover:ring-[hsl(260,100%,70%)]"
        >
          Next ▶
        </button>
      </div>

      <div className="flex gap-2 mt-4 justify-center">
        {Array.from({ length: totalGroups }).map((_, i) => (
          <motion.div
            layout
            key={i}
            className={`h-2 w-6 rounded-full ${
              i === groupIndex
                ? "bg-[hsl(260,100%,70%)] scale-105"
                : "bg-[hsl(230,15%,30%)] opacity-40"
            }`}
            transition={{ duration: 0.3 }}
          />
        ))}
      </div>
      <Link
        href="/more-projects"
        className="relative group inline-flex items-center justify-center px-6 py-2 rounded-full font-semibold text-[var(--primary)] border-2 border-[var(--primary)] bg-transparent overflow-hidden transition-all duration-300 
    hover:text-[var(--primary-foreground)] hover:shadow-xl 
    before:absolute before:inset-0 before:bg-[var(--primary)] before:-translate-x-full before:transition-transform before:duration-300 hover:before:translate-x-0"
      >
        <span className="relative z-10 flex items-center gap-2 text-sm sm:text-base">
          View More Projects
          <span className="transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </span>
      </Link>
    </section>
  );
}
