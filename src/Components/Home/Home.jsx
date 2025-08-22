import "./Home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

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
          Passionate about problem-solving, coding in Java, and building
          full-stack applications with React, Node.js, and MongoDB.
        </p>
        <button className="btn">Download CV</button>

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
        <img src="/src/assets/profileimg.jpg" alt="My Profile" />
      </div>
    </div>
  );
};

export default Home;
