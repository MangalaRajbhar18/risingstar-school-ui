import React from "react";
import "../styles/About.css";

const About = () => {
  return (
    <div className="about-page">

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-overlay">
          <h1>About Us</h1>
          <p>Empowering Young Minds for a Better Future</p>
        </div>
      </section>

      {/* About Content */}
      <section className="about-container">

        {/* About Card */}
        <div className="about-card">
          <h2>Welcome to Rising Star Public School</h2>

          <p>
            <strong>Rising Star Public School</strong> is a flagship institution
            of <strong>Rising Star Education Sanstha</strong>, committed to
            delivering high-quality, value-driven education that empowers
            students to excel in an ever-evolving world.
          </p>

          <p>
            Established in <strong>2016</strong> as
            <strong> Little Kids</strong> with a humble beginning of just
            <strong> 35 students</strong>, the institution steadily grew and
            was rebranded in <strong>2019</strong> as
            <strong> Rising Star Public School</strong> to reflect its broader
            vision and commitment to excellence.
          </p>

          <p>
            Today, the school proudly serves <strong>200+ students</strong>
            and continues to expand with a clear roadmap for future growth.
          </p>

          <p>
            Our philosophy is rooted in holistic development — blending
            academic excellence with life skills, discipline, creativity,
            leadership, and strong moral values.
          </p>

          <p>
            We create a nurturing and inspiring learning environment where
            students are encouraged to think independently, communicate
            confidently, and become responsible citizens of tomorrow.
          </p>
        </div>

        {/* Vision */}
        <div className="info-box">
          <h2>Our Vision</h2>

          <p>
            To become a leading educational institution that nurtures young
            minds into confident, responsible, and capable individuals who
            contribute meaningfully to society and the nation.
          </p>
        </div>

        {/* Mission */}
        <div className="info-box">
          <h2>Our Mission</h2>

          <ul>
            <li>
              To provide accessible and high-quality education to every child
            </li>

            <li>
              To foster holistic development through academics,
              co-curricular activities, and life skills
            </li>

            <li>
              To create a safe, inclusive, and inspiring learning environment
            </li>

            <li>
              To encourage critical thinking, creativity, and innovation
            </li>

            <li>
              To instill strong ethical values, discipline, and social
              responsibility
            </li>
          </ul>
        </div>

        {/* Core Values */}
        <div className="info-box">
          <h2>Core Values</h2>

          <div className="values-grid">

            <div className="value-card">
              <h3>Excellence</h3>
              <p>
                We strive for the highest standards in education and overall
                development.
              </p>
            </div>

            <div className="value-card">
              <h3>Integrity</h3>
              <p>
                We believe in honesty, transparency, and strong moral
                principles.
              </p>
            </div>

            <div className="value-card">
              <h3>Student-Centric Approach</h3>
              <p>
                Every decision is made with the student’s growth and
                well-being at the center.
              </p>
            </div>

            <div className="value-card">
              <h3>Innovation</h3>
              <p>
                We embrace modern teaching methods and continuous improvement.
              </p>
            </div>

            <div className="value-card">
              <h3>Discipline & Responsibility</h3>
              <p>
                We nurture responsible citizens with strong character and
                accountability.
              </p>
            </div>

            <div className="value-card">
              <h3>Inclusiveness</h3>
              <p>
                We ensure equal opportunities and respect for every student.
              </p>
            </div>

          </div>
        </div>

        {/* Growth Section */}
        <div className="growth-box">
          <h2>Growth Vision & Future Expansion</h2>

          <p>
            Rising Star Public School is not just an educational institution —
            it is a scalable and future-ready education model designed for
            sustainable growth and long-term impact.
          </p>

          <p>
            With a current strength of <strong>200+ students</strong> and a
            structured expansion strategy, the institution is steadily
            progressing toward <strong>500+ students</strong> in the near
            future.
          </p>

          <div className="growth-points">

            <div className="point">
              ✔ Increasing demand for quality education
            </div>

            <div className="point">
              ✔ Strong community trust and reputation
            </div>

            <div className="point">
              ✔ Modern infrastructure expansion plans
            </div>

            <div className="point">
              ✔ Focus on innovation and operational excellence
            </div>

          </div>

          <p className="bottom-text">
            The institution is built on a sustainable foundation that balances
            educational excellence with long-term growth and development.
          </p>
        </div>

      </section>
    </div>
  );
};

export default About;