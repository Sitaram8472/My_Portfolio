const Contact = () => {
  return (
    <section
      id="contact"
      className="py-20 px-5 bg-gradient-to-br from-[#321580] to-[#1a0a3d] text-white text-center border-b border-white/30"
    >
      {/* Heading */}
      <h2 className="text-4xl font-bold mb-10">Contact Me</h2>

      <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between gap-10">
        {/* Left Info */}
        <div className="flex-1 text-left space-y-4">
          <p className="text-lg">
            I’d love to connect with you! Whether it’s about open source, DSA,
            MERN stack, or exciting projects, feel free to reach out.
          </p>

          <p>
            <strong>📧 Email:</strong> sitaramsahu8472@gmail.com
          </p>
          <p>
            <strong>🌍 Location:</strong> Darbhanga, Bihar, India
          </p>

          <div className="mt-4 flex flex-wrap gap-4">
            <a
              href="https://github.com/Sitaram8472"
              target="_blank"
              rel="noreferrer"
              className="text-sky-400 font-bold hover:text-sky-300 transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/sitaram-sahu/"
              target="_blank"
              rel="noreferrer"
              className="text-sky-400 font-bold hover:text-sky-300 transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://leetcode.com/u/sitaramkr831/"
              target="_blank"
              rel="noreferrer"
              className="text-sky-400 font-bold hover:text-sky-300 transition-colors"
            >
              LeetCode
            </a>
          </div>
        </div>

        {/* Right Form */}
        <form
          action="https://formspree.io/f/mzzbgkzn" // replace with your Formspree ID
          method="POST"
          className="flex-1 bg-slate-800 p-6 rounded-xl shadow-lg"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full p-3 mb-4 rounded-md bg-slate-900 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-sky-400"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="w-full p-3 mb-4 rounded-md bg-slate-900 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-sky-400"
          />
          <textarea
            name="message"
            rows="4"
            placeholder="Your Message"
            required
            className="w-full p-3 mb-4 rounded-md bg-slate-900 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-sky-400"
          ></textarea>
          <button
            type="submit"
            className="w-full p-3 bg-blue-600 hover:bg-blue-700 rounded-md text-white text-lg font-medium transition-colors"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
