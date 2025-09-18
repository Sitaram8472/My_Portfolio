const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-[#321580] to-[#1a0a3d] text-white border-t border-slate-800 py-10 text-center">
      <div className="max-w-4xl mx-auto">
        {/* Top: Links */}
        <div className="mb-5">
          <a
            href="#about"
            className="mx-3 text-sky-400 font-medium hover:text-sky-300 transition-colors"
          >
            About
          </a>
          <a
            href="#projects"
            className="mx-3 text-sky-400 font-medium hover:text-sky-300 transition-colors"
          >
            Projects
          </a>
          <a
            href="#achievements"
            className="mx-3 text-sky-400 font-medium hover:text-sky-300 transition-colors"
          >
            Achievements
          </a>
          <a
            href="#contact"
            className="mx-3 text-sky-400 font-medium hover:text-sky-300 transition-colors"
          >
            Contact
          </a>
        </div>

        {/* Social Links */}
        <div className="mb-5">
          <a
            href="https://github.com/Sitaram8472"
            target="_blank"
            rel="noreferrer"
            className="mx-3 text-sky-400 font-medium hover:text-sky-300 transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/sitaram-sahu/"
            target="_blank"
            rel="noreferrer"
            className="mx-3 text-sky-400 font-medium hover:text-sky-300 transition-colors"
          >
            LinkedIn
          </a>
        </div>

        {/* Bottom Text */}
        <p className="text-sm opacity-80">
          © {new Date().getFullYear()} Sitaram Sahu | Made with ❤️ using React
        </p>
      </div>
    </footer>
  );
};

export default Footer;
