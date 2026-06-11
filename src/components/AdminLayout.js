import React, { useState } from "react";
import { Outlet, NavLink, useNavigate } from "react-router-dom";
import "./AdminLayout.css";

function AdminLayout() {

  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = () => {

    localStorage.removeItem("adminLogin");

    navigate("/");
  };

  return (
    <div>

      {/* NAVBAR */}

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


      {/* MAIN SECTION */}

      <div className="admin-main">

        {/* SIDEBAR */}

        <div className={`admin-sidebar ${menuOpen ? "show" : ""}`}>

          <NavLink
            to="/admin/messages"
            onClick={() => setMenuOpen(false)}
          >
            Messages
          </NavLink>

          <NavLink
            to="/admin/admissions"
            onClick={() => setMenuOpen(false)}
          >
            Admissions
          </NavLink>

          <NavLink
            to="/admin/events"
            onClick={() => setMenuOpen(false)}
          >
            Events
          </NavLink>

          <NavLink
            to="/admin/gallery"
            onClick={() => setMenuOpen(false)}
          >
            Gallery
          </NavLink>

          <NavLink
            to="/admin/notices"
            onClick={() => setMenuOpen(false)}
          >
            Notices
          </NavLink>

          <NavLink
            to="/admin/pamphlets"
            onClick={() => setMenuOpen(false)}
          >
            Pamphlets
          </NavLink>

          <NavLink
            to="/admin/dashboard"
            onClick={() => setMenuOpen(false)}
          >
            Dashboard
          </NavLink>

          <button
            className="sidebar-logout"
            onClick={handleLogout}
          >
            Logout
          </button>

        </div>


        {/* CONTENT */}

        <div className="admin-content">

          <Outlet />

        </div>

      </div>

    </div>
  );
}

export default AdminLayout;