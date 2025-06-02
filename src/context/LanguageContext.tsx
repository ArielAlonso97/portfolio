"use client";
import {
  Children,
  createContext,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from "react";
import { es_translations } from "@/translations/translations_es";

const LanguageContext = createContext<ILanguageContext | null>(null);

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("Error accediendo al contexto");
  }

  return context;
}

const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setlanguage] = useState<ITranslations>(es_translations);
  return (
    <LanguageContext.Provider value={{ language, setlanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageProvider;
