const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-[#321580] to-[#1a0a3d] text-white border-t border-slate-800 py-10 text-center">
      <div className="max-w-4xl mx-auto">
        <p className="text-sm opacity-80">
          © {new Date().getFullYear()} Sitaram Sahu | Made with ❤️ using React
        </p>
      </div>
    </footer>
  );
};

export default Footer;
