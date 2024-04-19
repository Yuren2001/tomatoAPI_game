// Import necessary dependencies
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import LoginUser from "./LoginUser"; // Import the LoginUser component
import React from "react";

// Define the MainMenu component
export default function MainMenu() {
  return (
    // Render the main content of the MainMenu component
    <div>
      <div className="container text-center">
        <div className="row gx-3 text-center justify-content-center">
          <div id="PlayerHere" className="col-lg-2"></div>
          <div className=" col-lg-6 rounded-4 border border-success border-10">
            <div
              className="card my-4 text-white"
              style={{
                background: "rgba(0, 0, 0, 0)",
                border: "none",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              id="Box"
            >
              {/* Render the LoginUser component */}
              <LoginUser />
            </div>
          </div>
          <div id="TimerHere" className="col-lg-2"></div>
        </div>
      </div>
      <br />
      <br />
    </div>
  );
}
