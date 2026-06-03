import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AdminLogin.css";

function AdminLogin() {

  const navigate = useNavigate();

  const [admin, setAdmin] = useState({
    email: "",
    password: ""
  });

  // HANDLE INPUT
  const handleChange = (e) => {

    setAdmin({
      ...admin,
      [e.target.name]: e.target.value
    });
  };
  
  // LOGIN
  const handleLogin = async (e) => {

    e.preventDefault();

    try {

      const response = await fetch(
        "http://localhost:8080/api/admin/login",
        {
          method: "POST",

          headers: {
            "Content-Type":"application/json"
          },

          body: JSON.stringify(admin)
        }
      );

      const data = await response.text();

      if(data === "Login Success") {

        localStorage.setItem("adminLogin", true);

        navigate("/admin/messages");

      } else {

        alert("Invalid Email or Password");
      }

    } catch(error) {

      console.log(error);
    }
  };




  return (

    <div className="admin-login-page">

      {/* LOGIN CARD */}

      <div className="admin-login-card">

        <h2>Admin Login</h2>

        <p>
          Welcome back to Rising Star Public School
        </p>



        <form onSubmit={handleLogin}>

          {/* EMAIL */}

          <div className="input-group-custom">

            <label>Email</label>

            <input type="email" name="email" placeholder="Enter your email" onChange={handleChange} required />

          </div>



          {/* PASSWORD */}

          <div className="input-group-custom">

            <label>Password</label>

            <input type="password"  name="password" placeholder="Enter your password"  onChange={handleChange} required/>

          </div>



          {/* BUTTON */}

          <button className="login-btn">
            Login
          </button>

        </form>

      </div>

    </div>
  );
}

export default AdminLogin;