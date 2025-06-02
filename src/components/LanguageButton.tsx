import { useLanguage } from "@/context/LanguageContext";
import { en_translations } from "@/translations/translations_en";
import { es_translations } from "@/translations/translations_es";
import React from "react";

const LanguageButton = () => {
  const { language, setlanguage, setnoLocalStrLang } = useLanguage();

  const languageButtons = [
    { data: es_translations, text: "ES" },
    { data: en_translations, text: "EN" },
  ];

  function handleSelectLang(e: any, lang: ITranslations) {
    setlanguage(lang);
    localStorage.setItem("lang", lang.language);
    setnoLocalStrLang(false);
  }

  return (
    <div className="mt-20 flex justify-center gap-4">
      {languageButtons.map((button, index) => {
        const isActive = button.data === language;

        return (
          <button
            key={index}
            className={`px-5 py-2 rounded-xl border transition-all duration-200 font-semibold shadow-sm
              ${
                isActive
                  ? "bg-black text-white border-black"
                  : "bg-white text-black border-gray-300 hover:bg-gray-100 hover:shadow-md"
              }`}
            onClick={(e) => handleSelectLang(e, button.data)}
          >
            {button.text}
          </button>
        );
      })}
    </div>
  );
};

export default LanguageButton;
