import { useLanguage } from "@/context/LanguageContext";
import React, { useState } from "react";

const ContactForm = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );

  const { language } = useLanguage();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    const formData = new FormData();
    formData.append("name", formState.name);
    formData.append("email", formState.email);
    formData.append("message", formState.message);

    try {
      const response = await fetch("https://formspree.io/f/mwpbkkzb", {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: formData,
      });

      if (response.ok) {
        setStatus("sent");
        setFormState({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section
      id="contact"
      className="scroll-mt-32 bg-black text-white py-20 px-4"
    >
      <div className="max-w-lg mx-auto">
        <h2 className="text-4xl font-bold mb-6 text-center text-white drop-shadow-[0_0_5px_white]">
          {language.contact.title}
        </h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <input
            type="text"
            name="name"
            placeholder={language.contactForm.namePlaceholder}
            required
            value={formState.name}
            onChange={handleChange}
            className="bg-black text-white p-3 rounded-lg border border-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-70 shadow-[0_0_8px_white]"
          />
          <input
            type="email"
            name="email"
            placeholder={language.contactForm.emailPlaceholder}
            required
            value={formState.email}
            onChange={handleChange}
            className="bg-black text-white p-3 rounded-lg border border-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-70 shadow-[0_0_8px_white]"
          />
          <textarea
            name="message"
            placeholder={language.contactForm.messagePlaceholder}
            required
            rows={5}
            value={formState.message}
            onChange={handleChange}
            className="bg-black text-white p-3 rounded-lg border border-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-70 shadow-[0_0_8px_white] resize-none"
          />
          <button
            type="submit"
            disabled={status === "sending"}
            className="bg-white text-black font-semibold py-3 rounded-lg hover:bg-gray-200 transition shadow-[0_0_10px_white]"
          >
            {status === "sending"
              ? language.contactForm.sendingButton
              : language.contactForm.sendButton}
          </button>

          {status === "sent" && (
            <p className="text-white text-center mt-4 drop-shadow-[0_0_5px_white]">
              {language.contactForm.successMessage}
            </p>
          )}
          {status === "error" && (
            <p className="text-white text-center mt-4 drop-shadow-[0_0_5px_white]">
              {language.contactForm.errorMessage}
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
