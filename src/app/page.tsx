"use client";

import ContactForm from "@/components/contact/ContactForm";
import Education from "@/components/Education";
import Experience from "@/components/experience/Experience";
import Footer from "@/components/Footer";
import LanguageButton from "@/components/LanguageButton";
import Navbar from "@/components/navbar/Navbar";
import Presentation from "@/components/Presentation";
import Skills from "@/components/skills/Skills";
import Image from "next/image";

export default function Home() {
  return (
    <div>
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
