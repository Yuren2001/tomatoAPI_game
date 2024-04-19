// Import necessary dependencies
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import "bootstrap-icons/font/bootstrap-icons.css"; // Import Bootstrap Icons CSS
import React from "react";

// Define and export the Footer component as a functional component
export default function Footer() {
  return (
    // Render the footer element
    <footer
      className="footer text-light py-1 bottom" // Apply Bootstrap classes for styling
      style={{
        // Apply inline styles for background gradient
        background: "linear-gradient(to bottom, transparent 0%, #290101 100%)",
      }}
    >
      <div className="container">
        <br /> {/* Add some spacing */}
        <hr />
        {/* Horizontal line as a separator */}
        <div className="text-center">
          <p
            style={{
              cursor: "default",
              color: "rgba(250, 210, 210, 0.9)",
              textDecoration: "none",
            }}
          >
            Yuren Malitha Senanayake | 2335677
          </p>

          {/* Render social media icon (GitHub) */}
          <ul className="list-inline">
            <li className="list-inline-item">
              <a
                href="https://github.com/Yuren2001"
                target="_blank" // Open link in a new tab
                rel="noopener noreferrer"
                style={{
                  cursor: "pointer",
                  fontsize: "20px",
                  color: "rgba(250, 210, 210, 0.9)",
                }}
              >
                <i className="bi bi-github">{/* GitHub icon */}</i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
