import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        {/* Top: Links */}
        <div className="footer-links">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#achievements">Achievements</a>
          <a href="#contact">Contact</a>
        </div>

        {/* Social Links */}
        <div className="social-links">
          <a href="https://github.com/yourgithub" target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href="https://linkedin.com/in/yourlinkedin" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href="https://leetcode.com/yourleetcode" target="_blank" rel="noreferrer">
            LeetCode
          </a>
        </div>

        {/* Bottom Text */}
        <p className="footer-text">
          © {new Date().getFullYear()} Sitaram Sahu | Made with ❤️ using React
        </p>
      </div>
    </footer>
  );
};

export default Footer;
