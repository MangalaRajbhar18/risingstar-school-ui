import { useEffect, useState } from "react";
import "./AdminDashboard.css";

function AdminDashboard() {

  const [stats, setStats] = useState({

    admissions: 0,
    events: 0,
    messages: 0,
    gallery: 0
  });




  useEffect(() => {

    fetchDashboardStats();

  }, []);




  const fetchDashboardStats = async () => {

    try {

      // FETCH ALL DATA

      const admissionsRes = await fetch(
        "https://rising-star-public-school.onrender.com/api/admission"
      );

      const eventsRes = await fetch(
        "https://rising-star-public-school.onrender.com/api/events"
      );

      const messagesRes = await fetch(
        "https://rising-star-public-school.onrender.com/api/contact"
      );

       const galleryRes = await fetch(
      "https://rising-star-public-school.onrender.com/api/gallery"
    );




      const admissionsData = await admissionsRes.json();

      const eventsData = await eventsRes.json();

      const messagesData = await messagesRes.json();

      const galleryData = await galleryRes.json();




      setStats({

        admissions: admissionsData.length,
        events: eventsData.length,
        messages: messagesData.length,
        gallery: galleryData.length
      });

    } catch(error){

      console.log(error);
    }
  };




  return (

    <div className="dashboard-page">

      <div className="dashboard-top">

        <h1>
          Admin Dashboard
        </h1>

        <p>
          Welcome to RSPS Admin Panel
        </p>

      </div>





      <div className="dashboard-grid">

        {/* ADMISSIONS */}

        <div className="dashboard-card">

          <div className="dashboard-icon">
            🎓
          </div>

          <h2>
            {stats.admissions}
          </h2>

          <p>
            Total Admissions
          </p>

        </div>





        {/* EVENTS */}

        <div className="dashboard-card">

          <div className="dashboard-icon">
            🎉
          </div>

          <h2>
            {stats.events}
          </h2>

          <p>
            Total Events
          </p>

        </div>





        {/* MESSAGES */}

        <div className="dashboard-card">

          <div className="dashboard-icon">
            📩
          </div>

          <h2>
            {stats.messages}
          </h2>

          <p>
            Contact Messages
          </p>

        </div>





        {/* GALLERY */}

        <div className="dashboard-card">

          <div className="dashboard-icon">
            🖼
          </div>

          <h2>
            {stats.gallery}
          </h2>

          <p>
            Gallery Photos
          </p>

        </div>

      </div>

    </div>
  );
}

export default AdminDashboard;