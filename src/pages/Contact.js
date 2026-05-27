import { useState } from "react";
import "../styles/Contact.css";
import { FaInstagram } from "react-icons/fa";

export default function Contact() {

  // STATE
  const [formData, setFormData] = useState({
    fullname: "",
    contactnumber: "",
    email: "",
    message: ""
  });

  // HANDLE INPUT CHANGE
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // HANDLE SUBMIT
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {

      const response = await fetch("http://localhost:8080/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {

        alert("Message Sent Successfully!");

        // CLEAR FORM
        setFormData({
          fullname: "",
          contactnumber: "",
          email: "",
          message: ""
        });

      } else {
        alert("Failed to send message");
      }

    } catch (error) {
      console.log(error);
      alert("Server Error");
    }
  };

  return (
    <div className="contact-page">

      {/* TITLE */}
      <h2 className="contact-title">
        Contact Us
      </h2>

      <div className="contact-container">

        {/* SCHOOL INFO */}
        <div className="contact-info-card">

          <h4>Rising Star Public School</h4>

          <p>Jay Matadi Kalher Thane(W), Maharashtra</p>
          <p>+91 9619955507</p> 
          <p>rsps1408@gmail.com</p>

          <a
            href="https://www.instagram.com/officialrspsschool?igsh=d3dtaHEwenBhdjky"
            target="_blank"
            rel="noreferrer"
            className="insta-link"
          >
            <FaInstagram /> Follow us on Instagram
          </a>

        </div>

        {/* CONTACT FORM */}
        <div className="contact-form-card">

          <h4>Send Message</h4>

          <form onSubmit={handleSubmit}>

            <input
              type="text"
              name="fullname"
              placeholder="Your Full Name"
              value={formData.fullname}
              onChange={handleChange}
              required
            />

            <input
              type="number"
              name="contactnumber"
              placeholder="Contact Number"
              value={formData.contactnumber}
              onChange={handleChange}
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <textarea
              rows="4"
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>

            <button type="submit">
              Send Message
            </button>

          </form>

        </div>

      </div>
    </div>
  );
}