// Import necessary dependencies
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import React from "react";
import iconImage from "./icon.jpg"; //import icon image

// Define and export the Header component as a functional component
export default function Header() {
  return (
    // Render the Header component
    <div className="container-fluids">
      <nav
        className="navbar navbar-expand-md navbar-dark fixed-top"
        style={{ cursor: "default", background: "rgba(10, 0, 0, 0)" }}
      >
        <a
          className="navbar-brand fs-2 fw-bold font-arial "
          id="PageNameA"
          style={{ color: "rgba(117, 0, 0, 0.9)" }}
        >
          &nbsp;&nbsp;&nbsp;
          <img src={iconImage} id="YurenIMG" height="50px" width="50px" />{" "}
          Tomato Game {/* Render the brand text */}
        </a>
      </nav>
    </div>
  );
}
