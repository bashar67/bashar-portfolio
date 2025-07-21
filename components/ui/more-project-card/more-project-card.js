"use client";

import React, { useState, useMemo, useCallback } from "react";
import Image from "next/image";
import { motion, LayoutGroup } from "motion/react";
import styles from "./more.module.css";

// chunk helper: pages of `size` projects
const chunk = (arr, size) =>
  Array.from(
    { length: Math.ceil(arr.length / size) },
    (_, i) => arr.slice(i * size, i * size + size)
  );

// Memoized card
const ProjectCard = React.memo(function ProjectCard({
  project,
  shouldPreload,
  theme,
}) {
  return (
    <div
      className={[
        styles.card,
        theme === "react" && styles.reactCard
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <div className={styles.imageContainer}>
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(max-width: 640px) 100vw, 33vw"
          className="object-cover"
          placeholder="blur"
          blurDataURL={project.blur}
          priority={shouldPreload}
        />
      </div>

      <h3 className={styles.title + " mt-3 font-semibold"}>
        {project.title}
      </h3>
      <p className={styles.description + " mt-1 text-[hsl(215,20.2%,65.1%)]"}>
        {project.description}
      </p>

      <div className="mt-auto">
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className={
            styles.demoButton +
            " inline-block w-full text-center px-3 py-2 bg-white text-[hsl(230,24%,7%)] rounded hover:bg-[hsl(260,100%,85%)] transition"
          }
        >
          🎯 View Demo
        </a>
      </div>
    </div>
  );
});

export default function ProjectSlider({ projects, title, theme }) {
  // 6 items per page
  const pages = useMemo(() => chunk(projects, 6), [projects]);
  const [pageIndex, setPageIndex] = useState(0);

  const next = useCallback(
    () => setPageIndex((i) => (i + 1) % pages.length),
    [pages.length]
  );
  const prev = useCallback(
    () => setPageIndex((i) => (i - 1 + pages.length) % pages.length),
    [pages.length]
  );

  const currentPage = pages[pageIndex];
  const isFirstPage = pageIndex === 0;
  const sectionBG =
    theme === "react" ? "bg-[var(--card-hover)]" : "bg-[var(--card)]";

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`max-w-4xl ${sectionBG} p-6 rounded-lg shadow-md mx-auto`}
    >
      <h2 className="text-xl font-bold mb-6 text-center">{title}</h2>

      <div className="relative overflow-hidden">
        <LayoutGroup>
          <motion.div
            key={pageIndex}
            layout
            transition={{ duration: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-3 gap-6"
          >
            {currentPage.map((proj) => (
              <ProjectCard
                key={proj.id}
                project={proj}
                shouldPreload={isFirstPage}
                theme={theme}
              />
            ))}
          </motion.div>
        </LayoutGroup>
      </div>

      <div className="flex justify-between items-center mt-6">
        <button
          type="button"
          onClick={prev}
          aria-label="Previous"
          className="px-3 py-2 bg-[hsl(260,100%,70%)] text-[hsl(230,24%,7%)] rounded hover:scale-105 transition"
        >
          ◀ Prev
        </button>

        <div className="flex space-x-2">
          {pages.map((_, i) => (
            <span
              key={i}
              className={`h-2 w-6 rounded-full transition ${
                i === pageIndex
                  ? "bg-[hsl(260,100%,70%)]"
                  : "bg-[hsl(230,15%,30%)] opacity-40"
              }`}
            />
          ))}
        </div>

        <button
          type="button"
          onClick={next}
          aria-label="Next"
          className="px-3 py-2 bg-[hsl(260,100%,70%)] text-[hsl(230,24%,7%)] rounded hover:scale-105 transition"
        >
          Next ▶
        </button>
      </div>
    </motion.section>
  );
}
