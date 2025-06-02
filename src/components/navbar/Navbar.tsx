"use client";

import { useLanguage } from "@/context/LanguageContext";
import { useEffect, useState } from "react";

export default function Navbar() {
  const { language } = useLanguage();
  /* const sections = ["presentation", "education", "skills", "contact"]; */
  const sections = language.navbar.sections;
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      }
    };

    const observer = new IntersectionObserver(handleIntersection, {
      root: null,
      rootMargin: "0px",
      threshold: 0.3,
    });

    // Si sections es array de strings:
    sections.forEach((sectionId) => {
      const el = document.getElementById(sectionId.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [sections]);

  return (
    <nav className="fixed top-0 left-0 w-full bg-[rgba(255,255,255,.5)] backdrop-blur-2xl z-50 shadow-lg shadow-[rgba(255,255,255,.3)]">
      <ul className="flex justify-center gap-8 ">
        {sections.map((section) => (
          <li key={section.id}>
            <a
              href={`#${section.id}`}
              className={`${
                activeSection === section.id
                  ? "text-white bg-black h-full font-bold shadow-lg shadow-[rgba(255,255,255,.3)]"
                  : "text-gray-900 "
              } hover:text-gray-400 transition py-6 rounded-b-2xl px-2`}
            >
              {section.title.toUpperCase()}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
