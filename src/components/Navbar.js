import { NavLink, Link } from "react-router-dom";

import { FaUserShield } from "react-icons/fa";

import rsps from "../assets/rsps.jpg";

import "./Navbar.css";





function Navbar() {

  return (

    <nav className="main-navbar">

      <div className="nav-container">
        
        {/* LEFT LOGO */}

        <Link to="/" className="logo-link">

          <div className="logo-section">

            <img
              src={rsps}
              alt="logo"
              className="school-logo"
            />





            <div className="school-text">

              <h5>
                Rising Star Education Sanstha's
              </h5>





              <span>
                Rising Star Public School
              </span>

            </div>

          </div>

        </Link>
        
        {/* RIGHT MENU */}

        <div className="nav-menu">

          <NavLink to="/" className="active-btn"> HOME </NavLink>
          
          <NavLink to="/about"> ABOUT US </NavLink>
          
          <NavLink to="/admission"> ADMISSIONS </NavLink>
          
          <NavLink to="/events"> EVENTS </NavLink>

          <NavLink to="/gallery"> GALLERY </NavLink>
          
          <NavLink to="/contact"> CONTACT </NavLink>
          
          
           {/* ADMIN LOGIN */}

          <NavLink to="/admin-login" className="admin-login-btn">

            <FaUserShield className="admin-icon" />

          </NavLink>

        </div>

      </div>

    </nav>
  );
}

export default Navbar;