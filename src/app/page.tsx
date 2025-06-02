"use client";

import ContactForm from "@/components/contact/ContactForm";
import Education from "@/components/Education";
import Experience from "@/components/experience/Experience";
import Footer from "@/components/Footer";
import LanguageButton from "@/components/LanguageButton";
import Navbar from "@/components/navbar/Navbar";
import Presentation from "@/components/Presentation";
import Skills from "@/components/skills/Skills";
import { useLanguage } from "@/context/LanguageContext";
import Image from "next/image";
import { useEffect, useState } from "react";
import { es_translations } from "@/translations/translations_es";
import LangModal from "@/components/LangModal";
import { en_translations } from "@/translations/translations_en";

export default function Home() {
  const { language, setlanguage, setnoLocalStrLang, noLocalStrLang } =
    useLanguage();

  useEffect(() => {
    const localStorageLanguage = localStorage.getItem("lang");

    if (!localStorageLanguage) {
      setnoLocalStrLang(true);
      return;
    }

    switch (localStorageLanguage) {
      case "es":
        setlanguage(es_translations);
        break;
      case "en":
        setlanguage(en_translations);
        break;
      default:
        setnoLocalStrLang(true); // en caso de que haya un valor no esperado
        break;
    }
  }, []);

  return (
    <div>
      {noLocalStrLang && <LangModal />}
      <LanguageButton />
      <Navbar></Navbar>
      <Presentation></Presentation>
      <Education />
      <Skills />
      <Experience />
      <ContactForm />
      <Footer />
    </div>
  );
}
