"use client";
import Link from "next/link";
import ProjectSlider from "@/components/ui/more-project-card";
import vanillaProjects from "@/data/vanilla-projects.json";
import reactProjects from "@/data/react-projects.json";

//   {
//     id: 1,
//     title: "react-dashboard",
//     url: "https://react-dashboard-bashar.netlify.app/",
//     image: "/assets/react-dashboard.png",
//     description: "Interactive dashboard built with React and Chart.js.",
//   },
//   {
//     id: 2,
//     title: "react-portfolio",
//     url: "https://react-portfolio-bashar.netlify.app/",
//     image: "/assets/react-portfolio.png",
//     description: "Personal portfolio site made with Next.js and Framer Motion.",
//   },
// ];

export default function MoreProjectsPage() {
  return (
    <div className="relative min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <div className="sticky top-0 z-50 bg-[var(--background)]/80 backdrop-blur-sm p-4 border-b border-[var(--border)] flex justify-center">
        <Link
          href="/"
          className="px-6 py-2 rounded-full font-semibold transition duration-300
            bg-[hsl(260,100%,70%)] text-[hsl(230,24%,7%)]
            hover:scale-105 hover:ring-2 hover:ring-[hsl(260,100%,70%)] shadow-md"
        >
          🔙 Back to Home
        </Link>
      </div>

      <div className="flex flex-col items-center justify-center py-24 space-y-16">
        <ProjectSlider
          projects={vanillaProjects}
          title="💻 Vanilla JavaScript Projects"
          theme="vanilla"
        />
        <ProjectSlider
          projects={reactProjects}
          title="⚛️ React Projects"
          theme="react"
        />
      </div>
    </div>
  );
}
