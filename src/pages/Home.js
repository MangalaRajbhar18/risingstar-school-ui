// Home.js

import { useEffect, useState } from "react";

import "../styles/Home.css";

import { FaInstagram } from "react-icons/fa";

import Swal from "sweetalert2";

import NoticeBoard from "../components/NoticeBoard";

// HERO IMAGES

import hero1 from "../assets/main.jpg";
import hero2 from "../assets/sc2.jpg";
import hero3 from "../assets/sc3.jpg";
import hero4 from "../assets/sc4.jpg";

export default function Home() {

  // HERO SLIDER

  const heroImages = [
    hero1,
    hero2,
    hero3,
    hero4
  ];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {

    const interval = setInterval(() => {

      setCurrentImage((prev) =>

        prev === heroImages.length - 1
          ? 0
          : prev + 1
      );

    }, 4000);

    return () => clearInterval(interval);

  }, [heroImages.length]);

  // CONTACT FORM

  const [contactData, setContactData] = useState({

    fullname: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {

    setContactData({

      ...contactData,

      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      const response = await fetch(

        "http://localhost:8080/api/contact",

        {
          method: "POST",

          headers: {
            "Content-Type": "application/json"
          },

          body: JSON.stringify(contactData)
        }
      );

      const data = await response.json();

      console.log(data);

      if (response.ok) {

        Swal.fire({

          icon: "success",

          title: "Message Sent Successfully",

          text: "We will contact you soon.",

          showConfirmButton: false,

          timer: 2000
        });

        setContactData({

          fullname: "",
          email: "",
          message: ""
        });

      } else {

        Swal.fire({

          icon: "error",

          title: "Failed",

          text: "Message not sent"
        });
      }

    } catch (error) {

      console.log(error);

      Swal.fire({

        icon: "error",

        title: "Server Error",

        text: "Backend is not running"
      });
    }
  };

  return (

    
    
  <div>

    {/* ADMISSION OPEN BANNER */}

    <div className="admission-marquee">

      <p>
        🎓 ADMISSIONS OPEN FOR 2026-27 | Nursery to Grade 10 | Limited Seats Available | Contact: +91 9619955507
      </p>

    </div>


      {/* HERO SECTION */}

      <section className="hero-container">

        <img
          src={heroImages[currentImage]}
          alt="school"
          className="hero-image"
        />

        <div className="hero-overlay"></div>

        <div className="hero-text-box">

          <h1>
            Welcome to
          </h1>

          <h2>
            Rising Star Public School
          </h2>
          
          <div className="legacy-badge">
             🎓 50+ Years of Teaching Legacy
          </div>

          <p className="tagline">

            Shaping Bright Futures Through
            Knowledge & Values

          </p>

        </div>

      </section>

      {/* NOTICE BOARD */}

      <NoticeBoard />

      {/* ABOUT SECTION */}

      <section className="about-section container">

        <h1 className="section-title">

          About Our School

        </h1>

        <p className="about-text">

          Rising Star Public School is a nurturing and progressive institution dedicated to shaping young minds from Nursery to Grade 10.

          <br /><br />

          We focus on academic excellence, creativity, discipline, and overall personality development of every student.

          <br /><br />

          Our dedicated teachers and modern learning methods help students become confident learners and responsible citizens.

        </p>

        {/* STATS */}

        <div className="stats-container">

          <div className="stat-card">

            <h1>300+</h1>

            <p>Students</p>

          </div>

          <div className="stat-card">

            <h1>20+</h1>

            <p>Teachers</p>

          </div>

          <div className="stat-card">

            <h1>10+</h1>

            <p>Years</p>

          </div>

        </div>

      </section>

      {/* WHY SECTION */}

      <section className="why-section container">

        <h2 className="section-title">

          Why Parents Trust Us

        </h2>

        <div className="why-container">

          <div className="why-card blue">

            <h1>
              All-in-One Education
            </h1>

            <p>
              Complete learning from Nursery to 10th in one place.
            </p>

          </div>

          <div className="why-card green">

            <h1>
              Smart Learning
            </h1>

            <p>
              Modern teaching methods for better understanding.
            </p>

          </div>

          <div className="why-card orange">

            <h1>
              Transparent System
            </h1>

            <p>
              Clear communication between school and parents.
            </p>

          </div>

        </div>

      </section>

      {/* CONTACT */}

      <section className="contact-section container">

        <h1 className="section-title">

          Contact Us

        </h1>

        <div className="contact-wrapper">

          {/* LEFT */}

          <div className="contact-info">

            <h1>
              Rising Star Public School
            </h1>

            <p>
              📍 Jay Matadi Kalher Thane(W), Maharashtra
            </p>

            <p>
              📞 +91 9619955507
            </p>

            <p>
              📧 rsps1408@gmail.com
            </p>

            <a
              href="https://www.instagram.com/officialrspsschool?igsh=d3dtaHEwenBhdjky"
              target="_blank"
              rel="noreferrer"
              className="insta-link"
            >

              <FaInstagram />

              Follow us

            </a>

          </div>

          {/* RIGHT */}

          <div className="contact-form">

            <form onSubmit={handleSubmit}>

              <input
                type="text"
                placeholder="Your Name"
                name="fullname"
                value={contactData.fullname}
                onChange={handleChange}
                required
              />

              <input
                type="email"
                placeholder="Your Email"
                name="email"
                value={contactData.email}
                onChange={handleChange}
                required
              />

              <textarea
                rows="4"
                placeholder="Your Message"
                name="message"
                value={contactData.message}
                onChange={handleChange}
                required
              ></textarea>

              <button type="submit">

                Send Message

              </button>

            </form>

          </div>

        </div>

      </section>

    </div>
  );
}