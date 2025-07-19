"use client";
import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function ProjectSlider({ projects, title, theme }) {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((index + 1) % projects.length);
  const prev = () => setIndex((index - 1 + projects.length) % projects.length);

  const current = projects[index];
  const cardBG =
    theme === "react" ? "bg-[var(--card-hover)]" : "bg-[var(--card)]";

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`w-full max-w-4xl ${cardBG} p-6 rounded-lg shadow-md mx-auto`}
    >
      <h2 className="text-xl font-bold mb-6 text-center">{title}</h2>

      <div className="relative min-h-[400px] overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={current.id}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.4 }}
            className=" w-full "
          >
            <Image
              src={current.image}
              alt={current.title}
              width={0}
              height={0}
              sizes="100vw"
              className="w-full rounded"
              blurDataURL={current.blur}
              placeholder="blur"
              priority={index === 0}
            />
            <h3 className="mt-4 text-lg font-semibold">{current.title}</h3>
            <p className="text-sm text-[hsl(215,20.2%,65.1%)] mb-4">
              {current.description}
            </p>
            <div className="flex justify-between items-center flex-wrap gap-2 mt-2">
              <button
                onClick={prev}
                className="bg-[hsl(260,100%,70%)] text-[hsl(230,24%,7%)]
                  px-3 py-2 rounded transition hover:scale-105 hover:ring-2 hover:ring-[hsl(260,100%,70%)]"
              >
                ◀ Prev
              </button>
              <a
                href={current.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-[hsl(230,24%,7%)]
                  px-4 py-2 rounded font-semibold hover:bg-[hsl(260,100%,85%)] transition"
              >
                🎯 View Demo
              </a>
              <button
                onClick={next}
                className="bg-[hsl(260,100%,70%)] text-[hsl(230,24%,7%)]
                  px-3 py-2 rounded transition hover:scale-105 hover:ring-2 hover:ring-[hsl(260,100%,70%)]"
              >
                Next ▶
              </button>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* 🧩 Timeline Indicators */}
      <div className="mt-8 flex justify-center gap-2 flex-wrap">
        {projects.map((_, i) => (
          <motion.div
            key={i}
            className={`h-2 w-6 rounded-full transition-all duration-300 ${
              i === index
                ? "bg-[hsl(260,100%,70%)] scale-105"
                : "bg-[hsl(230,15%,30%)] opacity-40"
            }`}
          />
        ))}
      </div>
    </motion.section>
  );
}
