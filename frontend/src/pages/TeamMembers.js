import React from "react";
import "./About.css";
import Navbar from "../components/Navbar";
import {
  Mail,
  Globe,
  Code2,
} from "lucide-react";

import {
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

const About = () => {
  return (
    <>
      <Navbar />

      <main className="about-page">

        {/* =========================
            HERO SECTION
        ========================== */}
        <section className="about-hero">
          <div className="about-hero-content">
            <span className="about-tag">ABOUT VIRTUAL ROOM</span>

            <h1>
              A Space Designed
              <span> For Better Learning.</span>
            </h1>

            <p>
              Virtual Room is a student-focused digital study space that brings
              learning resources, personal notes, and doubt assistance together
              in one place.
            </p>
          </div>
        </section>


        {/* =========================
            ABOUT PROJECT
        ========================== */}
        <section className="about-section">
          <div className="section-heading">
            <span>01</span>
            <h2>About The Project</h2>
          </div>

          <div className="about-project-grid">

            <div className="about-project-text">
              <p>
                Virtual Room was created with a simple idea — to provide
                students with a dedicated space where they can focus on
                learning without having to look for different resources
                across multiple platforms.
              </p>

              <p>
                The platform allows students to access free study resources,
                create their own notes, manage their learning space, and get
                assistance with their doubts through an integrated chatbot.
              </p>
            </div>

            <div className="about-highlight">
              <div className="highlight-icon">✦</div>

              <h3>Learn. Create. Explore.</h3>

              <p>
                One digital space built around the everyday learning needs
                of students.
              </p>
            </div>

          </div>
        </section>


        {/* =========================
            FEATURES
        ========================== */}
        <section className="about-section features-section">

          <div className="section-heading">
            <span>02</span>
            <h2>What You Can Do</h2>
          </div>

          <div className="feature-grid">

            <div className="feature-card">
              <div className="feature-number">01</div>

              <div className="feature-icon">📚</div>

              <h3>Study Resources</h3>

              <p>
                Access useful study notes and learning resources in one
                convenient place.
              </p>
            </div>


            <div className="feature-card">
              <div className="feature-number">02</div>

              <div className="feature-icon">✍️</div>

              <h3>Create Notes</h3>

              <p>
                Create and organize your own notes while studying within
                the platform.
              </p>
            </div>


            <div className="feature-card">
              <div className="feature-number">03</div>

              <div className="feature-icon">🤖</div>

              <h3>Doubt Assistance</h3>

              <p>
                Get assistance with study-related doubts through the
                integrated chatbot.
              </p>
            </div>

          </div>
        </section>


        {/* =========================
            MY CONTRIBUTION
        ========================== */}
        <section className="about-section contribution-section">

          <div className="section-heading">
            <span>03</span>
            <h2>My Contribution</h2>
          </div>

          <div className="contribution-card">

            <div className="contribution-icon">
              <Globe size={32} />
            </div>

            <div>
              <h3>Frontend Development</h3>

              <p>
                I contributed to the frontend development of Virtual Room,
                focusing on creating a clean, responsive, and user-friendly
                interface.
              </p>

              <p>
                My work involved designing and implementing user-facing
                components, improving the visual presentation, and making
                the overall experience easier and more engaging for students.
              </p>
            </div>

          </div>
        </section>


        {/* =========================
            TECHNOLOGY
        ========================== */}
        <section className="about-section technology-section">

          <div className="section-heading">
            <span>04</span>
            <h2>Built With</h2>
          </div>

          <div className="tech-grid">

            <div className="tech-card">
              <strong>React.js</strong>
              <span>Frontend</span>
            </div>

            <div className="tech-card">
              <strong>Node.js</strong>
              <span>Backend</span>
            </div>

            <div className="tech-card">
              <strong>Express.js</strong>
              <span>Server</span>
            </div>

            <div className="tech-card">
              <strong>MongoDB</strong>
              <span>Database</span>
            </div>

          </div>
        </section>


        {/* =========================
            FUTURE SCOPE
        ========================== */}
        <section className="about-section future-section">

          <div className="future-content">

            <span className="about-tag">FUTURE SCOPE</span>

            <h2>
              Making Learning
              <span> More Collaborative.</span>
            </h2>

            <p>
              Virtual Room can be extended beyond individual study by
              introducing real-time collaboration and virtual meeting
              features, allowing students to connect, discuss, and learn
              together.
            </p>

           

          </div>

        </section>


        {/* =========================
            CONTACT
        ========================== */}
        <section className="about-section contact-section">

          <div className="contact-content">

            <span className="about-tag">GET IN TOUCH</span>

            <h2>
              Let's <span>Connect.</span>
            </h2>

            <p>
              Have a question, want to know more about Virtual Room, or simply
              want to connect? Feel free to reach out.
            </p>

            <div className="contact-links">

             {/* EMAIL */}
<a
  href="mailto:anshikaprajapati110405@gmail.com"
  className="contact-link"
  aria-label="Email"
  title="Email"
>
  <Mail size={24} />
</a>

{/* GITHUB */}
<a
  href="https://github.com/Anshikaprajapati11"
  target="_blank"
  rel="noopener noreferrer"
  className="contact-link"
  aria-label="GitHub"
  title="GitHub"
>
  <FaGithub size={24} />
</a>

{/* PORTFOLIO — LINK LATER */}
<span
  className="contact-link contact-link-disabled"
  aria-label="Portfolio"
  title="Portfolio coming soon"
>
  <Globe size={24} />
</span>

{/* LINKEDIN */}
<a
  href="https://www.linkedin.com/in/anshika-prajapati-995690306/"
  target="_blank"
  rel="noopener noreferrer"
  className="contact-link"
  aria-label="LinkedIn"
  title="LinkedIn"
>
  <FaLinkedin size={24} />
</a>

            </div>

          </div>

        </section>


        {/* =========================
            FOOTER
        ========================== */}
        <footer className="about-footer">
          <p>Virtual Room</p>

          <span>
            A digital space for learning and growth.
          </span>
        </footer>

      </main>
    </>
  );
};

export default About;