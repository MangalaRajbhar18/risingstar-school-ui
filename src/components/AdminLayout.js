import React, { useState } from "react";
import { Outlet, NavLink, useNavigate } from "react-router-dom";
import "./AdminLayout.css";

function AdminLayout() {

  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  // LOGOUT
  const handleLogout = () => {

    localStorage.removeItem("adminLogin");

    navigate("/");
  };

  return (

    <div>

      {/* ===== NAVBAR ===== */}

      <div className="admin-navbar">

        <div className="admin-logo">

  <button
    className="menu-btn"
    onClick={() => setMenuOpen(!menuOpen)}
         >
            ☰
         </button>

          Rising Star Public School

        </div>

        <button
          className="logout-btn"
          onClick={handleLogout}
        >
          Logout
        </button>

      </div>



      {/* ===== MAIN SECTION ===== */}

      <div className={`admin-sidebar ${menuOpen ? "show" : ""}`}>

        {/* ===== SIDEBAR ===== */}

        <div className="admin-sidebar">

          <NavLink to="/admin/messages"> Messages</NavLink>

          <NavLink to="/admin/admissions"> Admissions </NavLink>

          <NavLink to="/admin/events">  Events </NavLink>

          <NavLink to="/admin/gallery">  Gallery </NavLink>
          
          <NavLink to="/admin/notices"> Notices </NavLink>
          
          <NavLink to="/admin/pamphlets"> Pamphlets </NavLink>
          
          <NavLink to="/admin/dashboard"> Dashboard </NavLink>


          <button
            className="sidebar-logout"
            onClick={handleLogout}
          >
            Logout
          </button>

        </div>



        {/* ===== CONTENT ===== */}

        <div className="admin-content">
          <Outlet />
        </div>

      </div>

    </div>
  );
}

export default AdminLayout;