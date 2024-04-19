import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import MainLinks from "./MainLinks";
import NewGame from "./NewGame";
import LevelInstance from "./LevelInstance";

import React from "react";

export default function UserLevel() {
  return (
    <div>
      {/* Button to navigate back to the main links */}
      <a
        className="btn btn-outline-danger m-4 fs-1 fw-bold"
        style={{ width: "225px", cursor: "auto", color: "black" }}
        onClick={() =>
          ReactDOM.render(<MainLinks />, document.getElementById("Box"))
        }
      >
        <i className="bi bi-house-fill fs-1 fw-bold"></i>
      </a>
      <br />
      <br />
      <br />
      {/* Button for selecting Easy level */}
      <button
        className="btn btn-outline-dark btn-lg m-4 fw-bold"
        onClick={() => {
          // Set the game level to Easy (level 1) using LevelInstance
          LevelInstance.setLevel(1);
          // Render the NewGame component to start a new game
          ReactDOM.render(<NewGame />, document.getElementById("Box"));
        }}
        style={{ width: "200px" }}
      >
        Easy
      </button>
      <br />

      {/* Button for selecting Medium level */}
      <button
        className="btn btn-outline-dark btn-lg m-4 fw-bold"
        onClick={() => {
          // Set the game level to Medium (level 2) using LevelInstance
          LevelInstance.setLevel(2);
          // Render the NewGame component to start a new game
          ReactDOM.render(<NewGame />, document.getElementById("Box"));
        }}
        style={{ width: "200px" }}
      >
        Medium
      </button>
      <br />
      {/* Button for selecting Hard level */}
      <button
        className="btn btn-outline-dark btn-lg m-4 fw-bold"
        onClick={() => {
          // Set the game level to Hard (level 3) using LevelInstance
          LevelInstance.setLevel(3);
          // Render the NewGame component to start a new game
          ReactDOM.render(<NewGame />, document.getElementById("Box"));
        }}
        style={{ width: "200px" }}
      >
        Hard
      </button>
      <br />
      <br />
      <br />
    </div>
  );
}
