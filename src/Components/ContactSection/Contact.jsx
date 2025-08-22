import "./Contact.css";

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="container">
        {/* Heading */}
        <h2 className="section-title">Contact Me</h2>

        <div className="contact-content">
          {/* Left Info */}
          <div className="contact-info">
            <p>
              I’d love to connect with you! Whether it’s about open source, DSA,
              MERN stack, or exciting projects, feel free to reach out.
            </p>

            <p><strong>📧 Email:</strong> sitaramsahu@example.com</p>
            <p><strong>🌍 Location:</strong> Darbhanga, Bihar, India</p>

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
          </div>

          {/* Right Form */}
          <form
            action="https://formspree.io/f/mzzbgkzn"  // replace with your ID
            method="POST"
            className="contact-form"
          >
            <input type="text" name="name" placeholder="Your Name" required />
            <input type="email" name="email" placeholder="Your Email" required />
            <textarea name="message" rows="4" placeholder="Your Message" required></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
