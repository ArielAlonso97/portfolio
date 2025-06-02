import { useLanguage } from "@/context/LanguageContext";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const Education = () => {
  const { language } = useLanguage();
  const { education } = language;

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);

    const scriptId = "credly-embed-script";
    if (!document.getElementById(scriptId)) {
      const script = document.createElement("script");
      script.src = "//cdn.credly.com/assets/utilities/embed.js";
      script.async = true;
      script.id = scriptId;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <section
      id="education"
      className="scroll-mt-32 min-h-screen py-20 px-4 bg-[url('/trianglebg.png')] bg-cover bg-center bg-no-repeat text-white"
    >
      <div className="max-w-5xl mx-auto">
        {/* Título de sección */}
        <div className="flex flex-col items-center mb-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-black">
            {education.title}
          </h1>
          <div className="w-24 h-1 mt-4 bg-black rounded-full" />
        </div>

        {/* Universidades (sin cambiar el diseño original) */}
        <div className="flex flex-col gap-8 mb-20">
          {education.universities.map((uni, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row items-center justify-between gap-4 border-b-2 border-black pb-4"
            >
              <div className="bg-white/80 p-4 rounded-xl w-full text-center md:text-left">
                <h2 className="text-xl font-semibold">{uni.name}</h2>
                <p className="text-gray-700">{uni.degree}</p>
              </div>
              <div className="w-16 h-16 bg-black rounded-lg shadow-md shadow-white" />
            </div>
          ))}
        </div>

        {/* Título certificados */}
        <h2 className="text-3xl md:text-4xl text-center text-gray-700 mb-10 font-semibold">
          {education.certificates.title}
        </h2>

        {/* Carrusel de certificados */}
        {isClient && (
          <Swiper
            modules={[Autoplay, Pagination]}
            slidesPerView={1.2}
            spaceBetween={20}
            pagination={{ clickable: true }}
            autoplay={{ delay: 3500, disableOnInteraction: false }}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
          >
            {education.certificates.list.map((certificate) => (
              <SwiperSlide key={certificate.iFrame || certificate.title}>
                <div
                  className="flex flex-col items-center bg-white/80 p-4 rounded-2xl shadow-md w-[180px] mx-auto"
                  role="group"
                  aria-label={`Certificado: ${certificate.title} emitido por ${certificate.issuedBy}`}
                >
                  <h3 className="text-base font-bold text-center mb-1">
                    {certificate.title}
                  </h3>
                  <p className="text-xs text-center text-gray-600 mb-3">
                    {certificate.issuedBy}
                  </p>
                  <div
                    className="overflow-hidden rounded-xl"
                    dangerouslySetInnerHTML={{
                      __html: certificate.iFrame.split("<script")[0],
                    }}
                    style={{ minWidth: "150px", minHeight: "270px" }}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>
    </section>
  );
};

export default Education;
