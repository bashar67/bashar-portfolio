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
import Link from "next/link";

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
      className="py-20 bg-[var(--background)]/30 border-b-2 border-[var(--border)] flex flex-col items-center justify-center space-y-10"
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
          className="projects-swiper  max-w-[380px] md:max-w-[700px] lg:max-w-[860px] mx-auto rounded-2xl overflow-hidden"
        >
          {projects.map((project, index) => (
            <SwiperSlide key={project.id}>
              <ProjectSlide project={project} index={index} />
            </SwiperSlide>
          ))}
        </Swiper>
      )}

      <div>
        <Link
          href="/more-projects"
          className="px-6 py-2 rounded-full font-semibold transition duration-300
        bg-[hsl(260,100%,70%)] text-[hsl(230,24%,7%)]
        hover:scale-105 hover:ring-2 hover:ring-[hsl(260,100%,70%)]
        shadow-md"
        >
          View more project 🚀
        </Link>
      </div>
    </section>
  );
};

export default ProjectsPage;
