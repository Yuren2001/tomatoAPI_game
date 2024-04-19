// Import necessary dependencies

import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

// Import components
import UserLevel from "./UserLevel";
import TopScore from "./TopScore";
import UserProfile from "./UserProfile";
import LoginUser from "./LoginUser";
import React from "react";
import PlayerLife from "./PlayerLife";

// Define the MainLinks component
export default function MainLinks() {
  // Render PlayerLife component into the container with id "PlayerHere"
  ReactDOM.render(<PlayerLife />, document.getElementById("PlayerHere"));
  // Render an empty div into the container with id "TimerHere"
  ReactDOM.render(<div></div>, document.getElementById("TimerHere"));

  return (
    // Render MainLinks component
    <div>
      {/* Home button */}
      <a
        className="btn btn-outline-danger m-4 fs-1 fw-bold"
        style={{ width: "225px", cursor: "auto", color: "black" }}
        onClick={
          () => ReactDOM.render(<MainLinks />, document.getElementById("Box")) // Render MainLinks component when clicked
        }
      >
        <i className="bi bi-house-fill fs-1 fw-bold"></i>
      </a>
      <br />
      {/* Start Game button */}
      <button
        className="btn btn-outline-dark btn-lg m-2 fw-bold"
        onClick={() => {
          ReactDOM.render(<UserLevel />, document.getElementById("Box")); // Render UserLevel component when clicked
        }}
        style={{ width: "200px" }}
      >
        Start Game
      </button>
      <br />

      {/* Top Score button */}
      <button
        className="btn btn-outline-dark btn-lg m-2 fw-bold"
        onClick={
          () => ReactDOM.render(<TopScore />, document.getElementById("Box")) // Render TopScore component when clicked
        }
        style={{ width: "200px" }}
      >
        Leaderboard
      </button>
      <br />

      {/* Profile button */}
      <button
        className="btn btn-outline-dark btn-lg m-2 fw-bold"
        onClick={
          () => ReactDOM.render(<UserProfile />, document.getElementById("Box")) // Render UserProfile component when clicked
        }
        style={{ width: "200px" }}
      >
        Profile
      </button>
      <br />

      {/* Logout button */}
      <button
        className="btn btn-outline-dark btn-lg m-2 fw-bold"
        onClick={() => {
          ReactDOM.render(<LoginUser />, document.getElementById("Box")); // Render LoginUser component when clicked
          ReactDOM.render(<p></p>, document.getElementById("PlayerHere")); // Render an empty paragraph into the PlayerHere container
        }}
        style={{ width: "200px" }}
      >
        Logout
      </button>
      <br />
    </div>
  );
}
