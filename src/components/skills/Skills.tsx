import { useLanguage } from "@/context/LanguageContext";
import React, { useEffect, useRef, useState } from "react";
import BarSkills from "./BarSkills";
import SkillModule from "./SkillModule";

const Skills = () => {
  const { language } = useLanguage();
  const { list } = language.skills.languages;
  return (
    <div id="skills" className="scroll-mt-32 bg-black text-white  ">
      <h1 className="text-center text-2xl py-3 ">{language.skills.title}</h1>
      <h2 className="text-center text-sm text-gray-400">
        {language.skills.description}
      </h2>
      <div className="flex-col justify-center items-center w-full ">
        {list.map((skill, index) => (
          <SkillModule key={index} skill={skill} />
        ))}
      </div>
    </div>
  );
};

export default Skills;
