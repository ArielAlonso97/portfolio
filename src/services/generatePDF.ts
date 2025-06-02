import jsPDF from "jspdf";

export const generatePDF = (translations: ITranslations) => {
  const doc = new jsPDF();
  let y = 20;
  const bottomMargin = 270;

  const checkPageSpace = (extraHeight = 10) => {
    if (y + extraHeight >= bottomMargin) {
      doc.addPage();
      y = 20;
    }
  };

  // CONTACTO / HEADER
  doc.setFontSize(18);
  doc.text(translations.contact.name, 20, y);
  y += 10;

  doc.setFontSize(14);
  doc.text(translations.presentation.role, 20, y);
  y += 10;

  doc.setFontSize(12);
  doc.text(`${translations.contact.location}`, 20, y);
  y += 10;
  doc.text(`Email: ${translations.contact.email}`, 20, y);
  y += 10;
  doc.text(`Teléfono: ${translations.contact.phone}`, 20, y);
  y += 10;
  doc.text(`Sitio web: ${translations.contact.web}`, 20, y);
  y += 15;

  // PRESENTACIÓN
  checkPageSpace();
  doc.setFontSize(14);
  doc.text(translations.presentation.title, 20, y);
  y += 8;

  doc.setFontSize(12);
  const presLines = doc.splitTextToSize(
    translations.presentation.description,
    170
  );
  doc.text(presLines, 20, y);
  y += presLines.length * 6;

  // EDUCACIÓN
  checkPageSpace();
  doc.setFontSize(14);
  doc.text(translations.education.title, 20, y);
  y += 8;

  translations.education.universities.forEach((uni) => {
    checkPageSpace();
    doc.setFontSize(12);
    doc.text(`• ${uni.name}`, 20, y);
    y += 6;
    doc.text(`  ${uni.degree}`, 25, y);
    y += 8;
  });

  // CERTIFICADOS
  checkPageSpace();
  doc.setFontSize(13);
  doc.text(translations.education.certificates.title, 20, y);
  y += 6;
  translations.education.certificates.list.forEach((cert) => {
    checkPageSpace();
    doc.setFontSize(11);
    doc.text(`• ${cert.title} - ${cert.issuedBy}`, 20, y);
    y += 6;
  });

  y += 10;

  // HABILIDADES
  checkPageSpace();
  doc.setFontSize(14);
  doc.text(translations.skills.title, 20, y);
  y += 8;

  doc.setFontSize(12);
  const skillsDesc = doc.splitTextToSize(translations.skills.description, 170);
  doc.text(skillsDesc, 20, y);
  y += skillsDesc.length * 6;

  translations.skills.languages.list.forEach((skill) => {
    checkPageSpace();
    doc.setFontSize(11);

    let line = `• ${skill.key} `;
    if (skill.years) {
      line += ` - ${skill.years} año${
        skill.years > 1 ? "s" : ""
      } de experiencia`;
    }

    doc.text(line, 20, y);
    y += 6;

    const descLines = doc.splitTextToSize(`  ${skill.description}`, 170);
    doc.text(descLines, 25, y);
    y += descLines.length * 6 + 4;
  });

  // Idiomas hablados
  y += 4;
  checkPageSpace();
  doc.setFontSize(12);
  doc.text(`${translations.skills.spokenLanguages.title}:`, 20, y);
  y += 6;
  translations.skills.spokenLanguages.list.forEach((lang) => {
    checkPageSpace();
    doc.text(`• ${lang}`, 25, y);
    y += 6;
  });

  // EXPERIENCIA
  y += 8;
  checkPageSpace();
  doc.setFontSize(14);
  doc.text(translations.experience.title, 20, y);
  y += 10;

  translations.experience.jobs.forEach((job) => {
    checkPageSpace();
    doc.setFontSize(12);
    doc.text(`• ${job.position} - ${job.company}`, 20, y);
    y += 6;

    doc.setFontSize(11);
    doc.text(`  ${job.date}`, 25, y);
    y += 6;

    job.tasks.forEach((task) => {
      checkPageSpace();
      const lines = doc.splitTextToSize(`- ${task}`, 170);
      doc.text(lines, 25, y);
      y += lines.length * 6 + 2;
    });

    y += 4;
  });

  doc.save("ArielAlvarado_CV.pdf");
};
