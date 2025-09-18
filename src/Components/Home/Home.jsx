import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { SiCodeforces, SiLeetcode, SiCodechef } from "react-icons/si";
import img1 from "../../assets/img1.png";

const Home = () => {
  return (
    <div
      id="home"
      className="flex flex-col md:flex-row items-center justify-between min-h-screen px-5 md:px-20 py-10 bg-gradient-to-br from-[#321580] to-[#1a0a3d] text-white border-b border-white/30"
    >
      {/* Left Section */}
      <div className="md:max-w-lg text-center md:text-left mb-10 md:mb-0">
        <h1 className="text-4xl md:text-5xl font-bold mb-2">
          Hello, I'm <span className="text-yellow-400">Sitaram Sahu</span>
        </h1>
        <h2 className="text-2xl md:text-3xl font-medium mb-4">
          Aspiring Software Developer 💻
        </h2>
        <p className="text-base md:text-lg mb-6">
          Passionate about problem-solving and building full-stack applications
          with React, Node.js, and MongoDB.
        </p>
        <button className="bg-yellow-400 text-black font-bold px-6 py-2 rounded-md transition hover:bg-yellow-500">
          Resume
        </button>

        {/* Social Media Links */}
        <div className="flex gap-6 justify-center md:justify-start mt-6 text-2xl">
          <a
            href="https://github.com/Sitaram8472"
            target="_blank"
            rel="noreferrer"
            className="transition transform hover:scale-125 hover:text-yellow-400"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a
            href="https://www.linkedin.com/in/sitaram-sahu/"
            target="_blank"
            rel="noreferrer"
            className="transition transform hover:scale-125 hover:text-yellow-400"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a
            href="mailto:sitaramsahu8472@gmail.com"
            className="transition transform hover:scale-125 hover:text-yellow-400"
          >
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex flex-col items-center md:items-middle">
        <img
          src={img1}
          alt="profile img"
          className="w-48 h-48 md:w-72 md:h-72 rounded-full border-4 border-yellow-400 shadow-lg shadow-purple-700/50 mb-6 md:mb-10"
        />

        <div className="text-center md:text-right">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">CP Profile</h2>
          <div className="flex gap-5 justify-center md:justify-end text-2xl md:text-3xl text-yellow-400">
            <a
              href="https://codeforces.com/profile/sitaramSahu"
              target="_blank"
              rel="noreferrer"
              className="transition transform hover:scale-125"
            >
              <SiCodeforces />
            </a>
            <a
              href="https://leetcode.com/u/sitaramkr831/"
              target="_blank"
              rel="noreferrer"
              className="transition transform hover:scale-125"
            >
              <SiLeetcode />
            </a>
            <a
              href="https://www.codechef.com/users/sitaramsahu"
              target="_blank"
              rel="noreferrer"
              className="transition transform hover:scale-125"
            >
              <SiCodechef />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
