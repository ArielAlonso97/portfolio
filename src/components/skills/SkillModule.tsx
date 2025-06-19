import React, { useEffect, useRef, useState } from "react";
import BarSkills from "./BarSkills";
import { useLanguage } from "@/context/LanguageContext";

const inferYears = (ages: number, language: string): string => {
  if (language === "en") {
    return `~${ages} years of practical experience`;
  } else {
    return `~${ages} años de experiencia práctica`;
  }
};

const SkillModule = ({ skill }: { skill: ISkill }) => {
  const divRef = useRef<HTMLDivElement | null>(null);
  const { language } = useLanguage();
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const updateWidth = () => {
      if (divRef.current) {
        setWidth(divRef.current.clientWidth);
      }
    };

    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  return (
    <div className="w-[90%] max-w-[1100px] px-4 py-6 m-auto">
      <div className="flex flex-col md:flex-row items-start md:items-center gap-6 bg-[rgba(255,255,255,0.05)] rounded-xl p-4 shadow-md">
        {/* Icono o espacio para imagen */}
        <div className="min-w-[60px] min-h-[60px] bg-[rgba(255,255,255)] rounded-xl shadow-sm" />

        {/* Contenido */}
        <div ref={divRef} className="flex-1 space-y-3 text-white">
          <div>
            <h3 className="text-xl font-bold">{skill.key}</h3>
            <p className="text-sm text-gray-300">
              {inferYears(skill.years || 1, language.language)}
            </p>
          </div>

          <BarSkills percentage={skill.porcentage} divWidth={width} />

          <p className="text-sm text-gray-400">{skill.description}</p>
        </div>
      </div>
    </div>
  );
};

export default SkillModule;
