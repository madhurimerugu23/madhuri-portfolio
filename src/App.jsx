import { motion } from "framer-motion";

function About() {
  return (
    <section className="about" id="about">

      <h2 className="section-title">About Me</h2>

      <div className="about-content">

        <div className="about-text">
          <h3>I'm Madhuri Merugu</h3>

          <p>
           A Computer Science graduate from GNITS, Hyderabad, with an interest in software development and problem-solving.
<br/>
Previously worked as an Associate Software Development Engineer at Swiggy, gaining professional experience with Java and real-world backend systems.
<br/>
Enjoy exploring new technologies, understanding how systems work, and building practical applications.
          </p>

        
        </div>

        <div className="about-details">

          <div className="detail-card">
            <h3>2023–2026</h3>
            <p>B.Tech in Computer Science</p>
          </div>

          <div className="detail-card">
            <h3>Java</h3>
            <p>Programming Language</p>
          </div>

          <div className="detail-card">
            <h3>3+</h3>
            <p>Academic Projects</p>
          </div>

        </div>

      </div>

    </section>
  );
}

function SkillCard({ title, skills }) {
  return (
      <motion.div
  className="skill-card"
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.5 }}
>
      <h3>{title}</h3>

      <div className="skill-list">
        {skills.map((skill, index) => (
          <span className="skill-item" key={index}>
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

function Skills() {
  return (
    <section className="skills" id="skills">

      <h2 className="section-title">My Skills</h2>

      <div className="skills-container">

        <SkillCard
          title="Programming Languages"
          skills={["Java", "SQL", "Python (Basics)"]}
        />

        <SkillCard
          title="Backend Development"
          skills={["Spring Boot", "REST APIs", "API Integration", "MVC Architecture"]}
        />

        <SkillCard
          title="Computer Science Fundamentals"
          skills={["OOP", "Data Structures & Algorithms", "DBMS", "Operating Systems", "Computer Networks"]}
        />

        <SkillCard
          title="Tools & Additional Knowledge"
          skills={["Git", "GitHub", "HTML", "CSS", "Machine Learning Fundamentals"]}
        />

      </div>

    </section>
  );
}


function ExperienceCard({ role, company, duration, description, points }) {
  return (
    <div className="experience-card">

      <div className="experience-heading">
        <div>
          <h3>{role}</h3>
          <h4>{company}</h4>
        </div>

        <span className="experience-date">{duration}</span>
      </div>

      <p className="experience-description">{description}</p>

      <ul>
        {points.map((point, index) => (
          <li key={index}>{point}</li>
        ))}
      </ul>

    </div>
  );
}

function Experience() {
  return (
    <section className="experience" id="experience">

      <h2 className="section-title">Professional Experience</h2>

      <div className="experience-container">

        <ExperienceCard
          role="Associate Software Development Engineer"
          company="Swiggy"
          duration="July 2026 – October 2026"
          description="Worked as a full-time member of the engineering team, contributing to backend development for Instamart."
          points={[
            "Implemented error handling and user-friendly error messages across Category Listing, Campaign Listing, MxN, and Collections flows.",

  "Worked on out-of-stock handling for Collections by filtering unavailable items and excluding widgets that did not meet the minimum item threshold."
          ]}
        />

        <ExperienceCard
          role="Software Development Engineer Intern"
          company="Swiggy – Instamart"
          duration="January 2026 – June 2026"
          description="Worked with the Instamart Discovery engineering team."
          points={[
            "Contributed to product collection widget migration in the Swiggy Instamart application.",

"Worked on Taxonomy Flow migration, helping reduce latency and minimize dependencies on multiple internal services.",
            "Collaborated with team members through code reviews and development workflows."
          ]}
        />

      </div>

    </section>
  );
}


function ProjectCard({ title, description, technologies }) {
  return (
    <motion.div
  className="project-card"
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.5 }}
>
      <h3>{title}</h3>

      <p>{description}</p>

      <div className="project-technologies">
        {technologies.map((technology, index) => (
          <span key={index}>
            {technology}
          </span>
        ))}
      </div>

    </motion.div>
  );
}


function Projects() {
  return (
    <section className="projects" id="projects">

      <h2 className="section-title">My Projects</h2>

      <div className="projects-container">

        <ProjectCard
          title="Smart Helmet for Coal Miners"
          description="An IoT-based safety system designed to monitor environmental and health conditions of coal miners using sensors, GPS and wireless communication."
          technologies={[
            "Arduino Uno",
            "Embedded C",
            "MQ-2",
            "DHT11",
            "MAX30100",
            "GPS",
            "RF Communication"
          ]}
        />

        <ProjectCard
          title="Groundwater Level Prediction"
          description="A machine learning application that predicts groundwater levels and classifies them into Low, Normal and High categories."
          technologies={[
            "Python",
            "Machine Learning",
            "Random Forest",
            "Flask"
          ]}
        />

        <ProjectCard
          title="Smart Audio-Based Industrial Accident Prediction and Warning System"
          description="A deep learning-based system that analyzes industrial audio signals to detect potential hazards and classify them into Safe, Alert and Dangerous categories, with real-time monitoring and voice alerts."
          technologies={[
            "Python",
            "Deep Learning",
            "CNN",
            "Raspberry Pi",
            "Audio Processing"
          ]}
        />

      </div>

    </section>
  );
}


function EducationCard({ degree, institution, duration, score }) {
  return (
    <div className="education-card">
      <h3>{degree}</h3>
      <h4>{institution}</h4>
      <p>{duration}</p>
      <span>{score}</span>
    </div>
  );
}

function Education() {
  return (
    <section className="education" id="education">

      <h2 className="section-title">Education</h2>

      <div className="education-container">

        <EducationCard
          degree="B.Tech – Computer Science and Engineering"
          institution="GNITS, Hyderabad"
          duration="2023 – 2026"
          score="CGPA: 9.47"
        />

        <EducationCard
          degree="Diploma – Computer Engineering"
          institution="Government Polytechnic for Women"
          duration="2020 – 2023"
          score="CGPA: 9.8"
        />

        <EducationCard
          degree="Secondary School Education"
          institution="Telangana State Model School"
          duration="2019 – 2020"
          score="CGPA: 9.8"
        />

      </div>

    </section>
  );
}


function Achievements() {
  const achievements = [
    "Telangana State ECET Rank – 936 (2023)",
    "Poster Presentation – 1st Prize, NEXORA (2025)",
    "World Youth Skills Day Essay – 1st Prize (2018)"
  ];

  return (
    <section className="achievements" id="achievements">

      <h2 className="section-title">Achievements</h2>

      <div className="achievement-list">

        {achievements.map((achievement, index) => (
          <div className="achievement-card" key={index}>
            <span>🏆</span>
            <p>{achievement}</p>
          </div>
        ))}

      </div>

    </section>
  );
}


function Contact() {
  return (
    <section className="contact" id="contact">

      <h2 className="section-title">Get In Touch</h2>

      <p>
        I'm interested in software development
        opportunities. Feel free to connect with me.
      </p>

      <div className="contact-links">

       <a  href="https://mail.google.com/mail/?view=cm&to=madhurimerugu23@gmail.com">
          Email Me
        </a>

        <a
          href="https://www.linkedin.com/in/madhuri-merugu-9a68b0303"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>

        <a
          href="https://github.com/madhurimerugu23"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>

      </div>

    </section>
  );
}
<footer className="footer">
  <p>© 2026 Madhuri Merugu. All rights reserved.</p>
</footer>

function App() {
  return (
    <div className="container">

      <nav className="navbar">
        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>


      <section className="hero" id="home">

        <p className="intro">HELLO, I'M</p>

        <h1>Madhuri Merugu</h1>

        <h2>
        Computer Science Graduate | Software Developer
        </h2>

        <p className="description">
          Computer Science graduate with experience in
  software development at Swiggy. Familiar with
  Java, SQL and backend development, with an
  interest in building practical applications
  and solving problems.
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="primary-btn">
            View My Projects
          </a>

          <a href="/resume.pdf" className="secondary-btn">
            Download Resume
          </a>
        </div>

      </section>
    <About />
    <Skills/>
    <Experience/>
    <Projects/>
    <Education />
<Achievements />
<Contact />
    </div>
  );
}

export default App;
<div className="nav-links">
  <a href="#home">Home</a>
  <a href="#about">About</a>
  <a href="#skills">Skills</a>
  <a href="#experience">Experience</a>
  <a href="#projects">Projects</a>
  <a href="#education">Education</a>
  <a href="#achievements">Achievements</a>
  <a href="#contact">Contact</a>
</div>