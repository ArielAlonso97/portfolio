"use client";

import { useLanguage } from "@/context/LanguageContext";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react"; // Asegúrate de tener lucide-react o cambia por íconos propios

export default function Navbar() {
  const { language } = useLanguage();
  const sections = language.navbar.sections;
  const [activeSection, setActiveSection] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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

    sections.forEach((sectionId) => {
      const el = document.getElementById(sectionId.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [sections]);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-[rgba(255,255,255,.5)] backdrop-blur-2xl z-50 shadow-lg shadow-[rgba(255,255,255,.3)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        <div className="flex items-center justify-between w-full">
          {/* Desktop Menu */}
          <ul className="hidden md:flex justify-center gap-8 w-full">
            {sections.map((section) => (
              <li key={section.id}>
                <a
                  href={`#${section.id}`}
                  className={`${
                    activeSection === section.id
                      ? "text-white bg-black font-bold shadow-lg shadow-[rgba(255,255,255,.3)]"
                      : "text-gray-900"
                  } hover:text-gray-400 transition py-2 px-4 rounded-full`}
                >
                  {section.title.toUpperCase()}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex justify-end w-full">
            <button onClick={toggleMenu} className="text-gray-800">
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isMenuOpen && (
        <ul className="md:hidden flex flex-col items-center bg-white bg-opacity-80 backdrop-blur-lg shadow-md rounded-b-xl transition-all">
          {sections.map((section) => (
            <li key={section.id} className="w-full text-center border-t">
              <a
                href={`#${section.id}`}
                onClick={closeMenu}
                className={`block w-full py-4 px-4 ${
                  activeSection === section.id
                    ? "text-white bg-black font-bold"
                    : "text-gray-900"
                } hover:bg-gray-200 transition`}
              >
                {section.title.toUpperCase()}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
