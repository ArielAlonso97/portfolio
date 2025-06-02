import { useAlert } from "@/context/AlertContext";
import { useLanguage } from "@/context/LanguageContext";
import React from "react";
import Alert from "./alert/Alert";
import Image from "next/image";
import { generatePDF } from "@/services/generatePDF";

const Presentation = () => {
  const { language } = useLanguage();
  const { alert, createAlert } = useAlert();

  const { contact, presentation } = language;

  const buttons = [
    { value: "GitHub", url: "https://github.com/ArielAlonso97" },
  ];

  return (
    <section id="presentation" className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Texto de presentación */}
        <div className="flex-1 space-y-4">
          <div>
            <h1 className="text-4xl font-bold">{contact.name}</h1>
            <div className="h-1 w-24 bg-black mt-2 rounded-full" />
          </div>

          <h2 className="text-xl text-gray-700">{presentation.role}</h2>
          <h2 className="text-2xl font-semibold">{contact.title}</h2>

          {/* Datos de contacto */}
          <div className="flex flex-col gap-2 mt-4">
            {Object.entries(contact).map(([clave, valor]) => {
              if (clave === "phone" || clave === "email") {
                return (
                  <a key={clave} className="inline-flex items-center gap-3">
                    <div className="w-4 h-4 bg-black rounded-sm" />
                    <span>{valor}</span>
                  </a>
                );
              }
              return null;
            })}
          </div>

          {/* Botones */}
          <div className="flex gap-4 flex-wrap mt-6">
            {buttons.map((button, index) => (
              <a
                key={index}
                href={button.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition"
              >
                {button.value}
              </a>
            ))}

            <button
              onClick={(e) => generatePDF(language)}
              className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition"
            >
              {contact.resumeButton}
            </button>
          </div>
        </div>

        {/* Imagen */}
        <div className="flex-shrink-0">
          <Image
            src="/cv_image.png"
            alt="Ariel Alvarado"
            width={300}
            height={300}
            className="rounded-xl  object-contain max-h-[400px]"
          />
        </div>
      </div>

      {/* Descripción */}
      <div className="max-w-4xl mx-auto mt-12 text-center">
        <div className="flex items-center justify-center gap-4 mb-6">
          <div className="h-1 w-16 bg-black rounded-full" />
          <p className="text-gray-800 text-lg">{presentation.description}</p>
          <div className="h-1 w-16 bg-black rounded-full" />
        </div>
      </div>

      <Alert />
    </section>
  );
};

export default Presentation;
