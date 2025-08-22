import "./Home.css";
import profileImg from "../../assets/profileimg.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { SiCodeforces } from "react-icons/si";
import { SiLeetcode } from "react-icons/si";
import { SiCodechef } from "react-icons/si";

const Home = () => {
  return (
    <div className="home" id="home">
      {/* Left Section */}
      <div className="home_left">
        <h1>
          Hello, I'm <span>Sitaram Sahu</span>
        </h1>
        <h2>Aspiring Software Developer 💻</h2>
        <p>
          Passionate about problem-solving and building
          full-stack applications with React, Node.js, and MongoDB.
        </p>
        <button className="btn">Resume</button>

        {/* Social Media Links */}
        <div className="socials">
          <a
            href="https://github.com/Sitaram8472"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a
            href="https://www.linkedin.com/in/sitaram-sahu/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href="sitaramsahu8472@gmail.com">
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
        </div>
      </div>

      {/* Right Section */}
      <div className="home_right">
        <img src={profileImg} alt="profile img" />
        <div className="cp-main">
          <h2>CP Profile</h2>
          <div className="cp">
            <a
              href="https://codeforces.com/profile/sitaramSahu"
              target="_blank"
              rel="noreferrer"
            >
              {<SiCodeforces />}
            </a>
            <a
              href="https://leetcode.com/u/sitaramkr831/"
              target="_blank"
              rel="noreferrer"
            >
              {<SiLeetcode />}
            </a>
            <a
              href="https://www.codechef.com/users/sitaramsahu"
              target="_blank"
              rel="noreferrer"
            >
              {<SiCodechef />}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
