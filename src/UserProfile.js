import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import MainLinks from "./MainLinks";
import React from "react";
import CurrentUserName from "./UserInstance";

export default function UserProfile() {
  // Clear any existing content in the TimerHere and PlayerHere elements
  ReactDOM.render(<div></div>, document.getElementById("TimerHere"));
  ReactDOM.render(<div></div>, document.getElementById("PlayerHere"));

  // Retrieve user data from the UserInstance
  let UserData = CurrentUserName.getUserName();

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
      {/* User profile information displayed in a table */}
      <table className="text-start">
        <tbody>
          {/* Row for displaying username */}
          <tr>
            <th>
              <a
                className="btn btn-dark m-2 fw-bold"
                style={{ width: "150px", cursor: "auto" }}
              >
                Username
              </a>
            </th>
            <td>
              <a
                className="btn btn-dark m-2 fw-bold"
                style={{ width: "150px", cursor: "auto" }}
              >
                {/* Display the username */}
                {UserData.Name}
              </a>
            </td>
          </tr>

          {/* Row for displaying user rank */}
          <tr>
            <th>
              <a
                className="btn btn-dark m-2 fw-bold"
                style={{ width: "150px", cursor: "auto" }}
              >
                Rank
              </a>
            </th>
            <td>
              <a
                className="btn btn-dark m-2 fw-bold"
                style={{ width: "150px", cursor: "auto" }}
              >
                {/* Display the user's rank */}
                {UserData.Rank}
              </a>
            </td>
          </tr>

          {/* Row for displaying super time */}
          <tr>
            <th>
              <a
                className="btn btn-dark m-2 fw-bold"
                style={{ width: "150px", cursor: "auto" }}
              >
                Super Time
              </a>
            </th>
            <td>
              <a
                className="btn btn-dark m-2 fw-bold"
                style={{ width: "150px", cursor: "auto" }}
              >
                {/* Display the user's super time */}
                {UserData.SuperTime}
              </a>
            </td>
          </tr>
          {/* Row for displaying number of games played */}
          <tr>
            <th>
              <a
                className="btn btn-dark m-2 fw-bold"
                style={{ width: "150px", cursor: "auto" }}
              >
                Games Played
              </a>
            </th>
            <td>
              <a
                className="btn btn-dark m-2 fw-bold"
                style={{ width: "150px", cursor: "auto" }}
              >
                {/* Display the number of games played by the user */}
                {UserData.GamesPlayed}
              </a>
            </td>
          </tr>

          {/* Row for displaying number of games won */}
          <tr>
            <th>
              <a
                className="btn btn-dark m-2 fw-bold"
                style={{ width: "150px", cursor: "auto" }}
              >
                Games Won
              </a>
            </th>
            <td>
              <a
                className="btn btn-dark m-2 fw-bold"
                style={{ width: "150px", cursor: "auto" }}
              >
                {/* Display the number of games won by the user */}
                {UserData.Won}
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
