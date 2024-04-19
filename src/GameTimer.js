// Import necessary dependencies
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import React from "react";

// Define and export the GameTimer component as a functional component
export default function GameTimer(props) {
  return (
    // Render the GameTimer component
    <div className="container-fluids">
      <a className="btn btn-default btn-lg m-3" style={{ cursor: "auto" }}>
        &nbsp;&nbsp;&nbsp; {/* Add some spaces */}
        <p className="fs-1 fw-bold">{props.TimeLeft}</p>
        <p className="fs-1 fw-bold">
          <i className="bi bi-stopwatch"></i> {/* Bootstrap stopwatch icon */}
        </p>
      </a>
    </div>
  );
}
