"use client";
import { memo } from "react";
import Image from "next/image";
import useInView from "@/hooks/use-in-view";

const ProjectSlide = ({ project, index }) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const visible = inView || index === 0;

  const handleClick = () => {
    requestIdleCallback(() => window.open(project.demoUrl, "_blank"));
  };

  return (
    <div
      ref={ref}
      className={`bg-[var(--card)] rounded-2xl overflow-hidden border border-[var(--border)]/50 shadow-lg transition-transform duration-300 ${
        visible ? "animate-fade-in" : "opacity-0"
      }`}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="relative w-full rounded-lg overflow-hidden">
        {project.image ? (
          <Image
            src={project.image}
            alt={`Screenshot of ${project.title}`}
            width={700}
            height={500}
            priority={index === 0}
            className="rounded-t-2xl w-full h-auto object-contain"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 80vw, 700px"
            placeholder="blur"
            blurDataURL={project.blurImage}
            decoding={"async"}
          />
        ) : (
          <div className="bg-gray-200 w-full h-[300px] flex items-center justify-center">
            <span className="text-gray-500">No Image</span>
          </div>
        )}
      </div>

      <article className="p-8 flex flex-col justify-between">
        <div className="text-sm text-[var(--primary)] font-medium mb-3 uppercase tracking-wide">
          Technologies: {project.technologies.slice(0, 5).join(", ")}
        </div>
        <h3 className="text-2xl font-bold mb-4 text-[var(--foreground)]">
          {project.title}
        </h3>
        <p className="text-[var(--muted-foreground)] leading-relaxed mb-6 break-words">
          {project.description}
        </p>
        <button
          onClick={handleClick}
          aria-label={`Open demo for ${project.title}`}
          className="group relative overflow-hidden cursor-pointer border-[var(--primary)] text-[var(--primary)] bg-transparent border-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:text-[var(--primary-foreground)] before:absolute before:inset-0 before:bg-[var(--primary)] before:translate-x-[-100%] before:transition-transform before:duration-300 hover:before:translate-x-0 shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary)]"
        >
          <span className="relative z-10 flex items-center gap-2">
            View Demo
            <span
              aria-hidden="true"
              className="inline-block transition-transform duration-300 group-hover:translate-x-1"
            >
              →
            </span>
          </span>
        </button>
      </article>
    </div>
  );
};

export default memo(ProjectSlide);
