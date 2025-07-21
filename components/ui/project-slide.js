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
      <div className="relative aspect-[4/3] w-full">
        {project.image ? (
          <Image
            src={project.image}
            alt={`Screenshot of ${project.title}`}
            fill
            className="object-cover rounded-t-2xl"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 80vw, 700px"
            placeholder="blur"
            blurDataURL={project.blurImage}
            decoding="async"
            priority={index === 0}
          />
        ) : (
          <div className="bg-gray-200 w-full h-full flex items-center justify-center">
            <span className="text-gray-500">No Image</span>
          </div>
        )}
      </div>

      <article className="p-4 flex flex-col h-[210px] justify-between sm:h-[180px]">
        <div className="space-y-1.5">
          <div className="text-[10px] text-[var(--primary)] font-medium uppercase tracking-wide">
            Technologies: {project.technologies.slice(0, 5).join(", ")}
          </div>
          <h3 className="text-[15px] sm:text-base font-bold text-[var(--foreground)] leading-tight">
            {project.title}
          </h3>
          <p className="text-xs text-[var(--muted-foreground)] line-clamp-3 break-words">
            {project.description}
          </p>
        </div>

        <div className="pt-3">
          <button
            onClick={handleClick}
            aria-label={`Open demo for ${project.title}`}
            className="group relative overflow-hidden cursor-pointer
    border-[var(--primary)] text-[var(--muted-foreground)] bg-transparent
    border px-3 py-[6px] rounded-full font-medium text-[10px] sm:text-[13px]
    w-auto sm:w-full
    transition-all duration-300
    hover:text-[var(--primary-foreground)]
    before:absolute before:inset-0 before:bg-[var(--primary)]
    before:-translate-x-full before:transition-transform before:duration-300
    hover:before:translate-x-0
    shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary)]"
          >
            <span className="relative  z-10 flex items-center justify-center gap-1">
              Demo
              <span
                aria-hidden="true"
                className="transition-transform duration-300 group-hover:translate-x-1"
              >
                →
              </span>
            </span>
          </button>
        </div>
      </article>
    </div>
  );
};

export default memo(ProjectSlide);
