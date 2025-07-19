"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import projects from "@/data/projects.json";

import Spinner from "./spinner/spinner";

const ProjectSlide = dynamic(() => import("./ui/project-slide"), {
  ssr: false,
  loading: () => null,
});

const ProjectsPage = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const preloadImages = async () => {
      await Promise.all(
        projects.map((project) => {
          return new Promise((resolve) => {
            const img = new Image();
            img.src = project.image;
            img.onload = img.onerror = resolve;
          });
        })
      );
      setIsLoaded(true);
    };

    preloadImages();
  }, []);

  return (
    <section
      id="projects"
      className="py-20 bg-[var(--background)]/30 border-b-2 border-[var(--border)]"
    >
      {!isLoaded ? (
        <div className="flex justify-center items-center h-[500px]">
          <Spinner />
        </div>
      ) : (
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          navigation
          pagination={{ clickable: true }}
          className="projects-swiper max-w-4xl mx-auto rounded-2xl overflow-hidden"
        >
          {projects.map((project, index) => (
            <SwiperSlide key={project.id}>
              <ProjectSlide project={project} index={index} />
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </section>
  );
};

export default ProjectsPage;
