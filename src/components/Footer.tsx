const Footer = () => {
  return (
    <footer className="bg-black text-white py-6  shadow-inner shadow-white/20">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center px-4">
        <p className="text-sm select-none drop-shadow-[0_0_5px_white]">
          © {new Date().getFullYear()} Ariel Alvarado. All rights reserved.
        </p>
        <div className="flex gap-6 mt-4 md:mt-0">
          <a
            href="mailto:ariel32_124@hotmail.com"
            className="text-white hover:text-gray-300 transition drop-shadow-[0_0_5px_white]"
            aria-label="Email"
          >
            Email
          </a>
          <a
            href="https://github.com/ArielAlonso97"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-300 transition drop-shadow-[0_0_5px_white]"
            aria-label="GitHub"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/ariel-alvarado-arana"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-300 transition drop-shadow-[0_0_5px_white]"
            aria-label="LinkedIn"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
