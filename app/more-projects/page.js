"use client";
import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const vanillaProjects = [
  {
    title: "JS Calculator",
    description: "Simple calculator using vanilla JS.",
    image: "/assets/images/appie.webp",
    details: "Built with HTML, CSS, and pure JS. Supports basic operations.",
  },
  {
    title: "Todo App",
    description: "Task manager with local storage.",
    image: "/assets/images/jobfiy.webp",
    details: "Simple, persistent todo list. Lightweight and fast.",
  },
];

const reactProjects = [
  {
    title: "React Portfolio",
    description: "Personal site built with Next.js.",
    image: "/assets/react-portfolio.png",
    details: "Responsive portfolio with dark mode and transitions.",
  },
  {
    title: "Dashboard",
    description: "Admin dashboard with dynamic charts.",
    image: "/assets/react-dashboard.png",
    details: "Built with Tailwind and Chart.js. Includes authentication.",
  },
];

export default function ProjectsSplitView() {
  const [jsIndex, setJsIndex] = useState(0);
  const [reactIndex, setReactIndex] = useState(0);
  const [modalData, setModalData] = useState(null);

  const handleNext = (setIndex, projects, currentIndex) => {
    setIndex((currentIndex + 1) % projects.length);
  };

  const handlePrev = (setIndex, projects, currentIndex) => {
    setIndex((currentIndex - 1 + projects.length) % projects.length);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 bg-[hsl(230,24%,7%)] text-[hsl(210,40%,98%)]">
      {/* Vanilla JS Section */}
      <motion.section
        className="bg-[hsl(230,20%,9%)] p-4 rounded-lg"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-xl font-bold mb-4">💻 Vanilla JS</h2>
        <AnimatePresence mode="wait">
          <motion.div
            key={jsIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.4 }}
            className="bg-[hsl(230,15%,15%)] p-4 rounded-lg shadow-md"
          >
            <Image
              src={vanillaProjects[jsIndex].image}
              alt={vanillaProjects[jsIndex].title}
              width={0}
              height={0}
              sizes="100vw"
              className="w-full h-auto rounded"
            />
            <h3 className="mt-4 text-lg font-semibold">
              {vanillaProjects[jsIndex].title}
            </h3>
            <p className="text-sm text-[hsl(215,20.2%,65.1%)]">
              {vanillaProjects[jsIndex].description}
            </p>
            <div className="flex justify-between mt-4">
              <button
                onClick={() => handlePrev(setJsIndex, vanillaProjects, jsIndex)}
                className="bg-[hsl(260,100%,70%)] text-[hsl(230,24%,7%)] px-3 py-2 rounded transition hover:scale-105 hover:ring-2 hover:ring-[hsl(260,100%,70%)]"
              >
                Prev
              </button>
              <button
                onClick={() => handleNext(setJsIndex, vanillaProjects, jsIndex)}
                className="bg-[hsl(260,100%,70%)] text-[hsl(230,24%,7%)] px-3 py-2 rounded transition hover:scale-105 hover:ring-2 hover:ring-[hsl(260,100%,70%)]"
              >
                Next
              </button>
              <button
                onClick={() => setModalData(vanillaProjects[jsIndex])}
                className="text-[hsl(260,100%,70%)] underline hover:text-white transition"
              >
                Details
              </button>
            </div>
          </motion.div>
        </AnimatePresence>
      </motion.section>

      {/* React Section */}
      <motion.section
        className="bg-[hsl(230,15%,12%)] p-4 rounded-lg"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-xl font-bold mb-4">⚛️ React</h2>
        <AnimatePresence mode="wait">
          <motion.div
            key={reactIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.4 }}
            className="bg-[hsl(230,15%,15%)] p-4 rounded-lg shadow-md"
          >
            <Image
              src={reactProjects[reactIndex].image}
              alt={reactProjects[reactIndex].title}
              width={0}
              height={0}
              sizes="100vw"
              className="w-full h-auto rounded"
            />
            <h3 className="mt-4 text-lg font-semibold">
              {reactProjects[reactIndex].title}
            </h3>
            <p className="text-sm text-[hsl(215,20.2%,65.1%)]">
              {reactProjects[reactIndex].description}
            </p>
            <div className="flex justify-between mt-4">
              <button
                onClick={() =>
                  handlePrev(setReactIndex, reactProjects, reactIndex)
                }
                className="bg-[hsl(260,100%,70%)] text-[hsl(230,24%,7%)] px-3 py-2 rounded transition hover:scale-105 hover:ring-2 hover:ring-[hsl(260,100%,70%)]"
              >
                Prev
              </button>
              <button
                onClick={() =>
                  handleNext(setReactIndex, reactProjects, reactIndex)
                }
                className="bg-[hsl(260,100%,70%)] text-[hsl(230,24%,7%)] px-3 py-2 rounded transition hover:scale-105 hover:ring-2 hover:ring-[hsl(260,100%,70%)]"
              >
                Next
              </button>
              <button
                onClick={() => setModalData(reactProjects[reactIndex])}
                className="text-[hsl(260,100%,70%)] underline hover:text-white transition"
              >
                Details
              </button>
            </div>
          </motion.div>
        </AnimatePresence>
      </motion.section>

      {/* Modal Section */}
      {modalData && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="bg-[hsl(230,15%,12%)] p-6 rounded-lg max-w-lg shadow-lg"
          >
            <h2 className="text-xl font-bold">{modalData.title}</h2>
            <Image
              src={modalData.image}
              alt=""
              width={0}
              height={0}
              sizes="100vw"
              className="w-full h-auto rounded my-4"
            />
            <p className="text-sm mb-4 text-[hsl(215,20.2%,65.1%)]">
              {modalData.details}
            </p>
            <button
              onClick={() => setModalData(null)}
              className="bg-[hsl(260,100%,70%)] text-[hsl(230,24%,7%)] px-4 py-2 rounded hover:scale-105 transition"
            >
              Close
            </button>
          </motion.div>
        </div>
      )}
    </div>
  );
}
