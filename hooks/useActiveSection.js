import { useEffect, useState } from "react";

const useActiveSection = (sectionIds = []) => {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    if (typeof window === "undefined") return; // ⛔️ تأمين من SSR

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        }
      },
      { rootMargin: "0px 0px -30% 0px", threshold: 0.2 }
    );

    sectionIds.forEach((id) => {
      const tryObserve = () => {
        const element = document.getElementById(id);
        if (element) {
          observer.observe(element);
        } else {
          setTimeout(tryObserve, 100);
        }
      };

      tryObserve();
    });

    return () => {
      sectionIds.forEach((id) => {
        const element = document.getElementById(id);
        if (element) observer.unobserve(element);
      });
    };
  }, [sectionIds]);

  return activeSection;
};

export default useActiveSection;
