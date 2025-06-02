import { useLanguage } from "@/context/LanguageContext";
import React from "react";
import ExperienceModule from "./ExperienceModule";

const Experience = () => {
  const { language } = useLanguage();
  const { experience } = language;
  return (
    <div id="experience" className="bg-black text-white py-4">
      <h1 className="text-2xl text-center py-2">{experience.title}</h1>
      <div className="flex-col justify-center items-center  w-full">
        {experience.jobs.map((job, index) => (
          <ExperienceModule job={job} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Experience;
