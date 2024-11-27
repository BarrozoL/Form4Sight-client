import { NavLink, useNavigate, Link } from "react-router-dom";
import logo from "../assets/images/Form4Sight-mock-logo.jpeg";
import { useState } from "react";
import "../css/Navbar.css";

export default function Navbar() {
  const [user, setUser] = useState(null);

  return (
    <>
      <div className="navbar">
        <NavLink to="/">
          <img className="nav-logo" src={logo} />
        </NavLink>
        <div className="nav-links">
          <NavLink to="/" className="nav-link" style={{ color: "white" }}>
            Home
          </NavLink>
          <NavLink to="/about" className="nav-link" style={{ color: "white" }}>
            About
          </NavLink>
          {/*  If user is logged in it only shows Dashboard, if no user is found, Login and Sign Up */}
          {user ? (
            <NavLink
              to="/dashboard"
              className="nav-link"
              style={{ color: "white" }}
            >
              Dashboard
            </NavLink>
          ) : (
            <>
              <NavLink
                to="/login"
                className="nav-link"
                style={{ color: "white" }}
              >
                Login
              </NavLink>
              <NavLink
                to="/signup"
                className="nav-link"
                style={{ color: "white" }}
              >
                Sign Up
              </NavLink>
            </>
          )}
        </div>
      </div>
    </>
  );
}
