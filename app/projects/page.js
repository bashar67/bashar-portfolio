"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import projects from "@/data/projects.json"; // Adjust the import path as necessary

const ProjectsPage = () => {
  return (
    <section id="portfolio" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">Projects</h2>
          <p className="text-muted-foreground text-lg">My recent work</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            preLoadImages={false}
            lazyPreloadPrevNext={true}
            pagination={{
              clickable: true,
              bulletClass: "swiper-pagination-bullet !bg-muted-foreground",
              bulletActiveClass: "swiper-pagination-bullet-active !bg-primary",
            }}
            className="projects-swiper !pb-12"
          >
            {projects.map((project, index) => (
              <SwiperSlide key={project.id}>
                <div className="bg-[var(--card)] rounded-2xl overflow-hidden border border-[var(--border)]/50  shadow-lg">
                  <div className="relative overflow-hidden w-full h-64 sm:h-72 lg:h-80 ">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      priority={index === 0} // Load first image with priority
                      sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                      loading={index === 0 ? "eager" : "lazy"}
                      className="w-full h-64 object-cover"
                    />
                  </div>

                  <div className="p-8">
                    <div className="text-sm text-[var(--primary)] font-medium mb-3 uppercase tracking-wide">
                      Technologies: {project.technologies.join(", ")}
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-[var(--foreground)]">
                      {project.title}
                    </h3>
                    <p className="text-[var(--muted-foreground)] leading-relaxed mb-6">
                      {project.description}
                    </p>
                    <button
                      onClick={() => window.open(project.demoUrl, "_blank")}
                      className="group relative overflow-hidden cursor-pointer border-[var(--primary)] text-[var(--primary)] bg-transparent border-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:text-[var(--primary-foreground)] before:absolute before:inset-0 before:bg-[var(--primary)] before:translate-x-[-100%] before:transition-transform before:duration-300 hover:before:translate-x-0"
                    >
                      <span className="relative z-10 flex items-center gap-2">
                        View Demo
                        <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                          →
                        </span>
                      </span>
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default ProjectsPage;
