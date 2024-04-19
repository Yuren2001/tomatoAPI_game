import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import MainLinks from "./MainLinks";
import React from "react";

export default function TopScore() {
  // Update top score on the server
  fetch("http://localhost:5000/Server/UpdateTopScore", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
  }).catch((error) => console.error("Error:", error));
  return (
    <div>
      {/* Button to navigate back to MainLinks component */}
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

      {/* Table to display top scores */}
      <table className="text-start">
        <tbody>
          <tr>
            <tr>
              <th>
                <a
                  className="btn btn-outline-danger m-2 fw-bold"
                  style={{ width: "150px", cursor: "auto" }}
                >
                  <i className="bi bi">Player Name</i>
                </a>
              </th>
              <th>
                <a
                  className="btn btn-outline-danger m-2 fw-bold"
                  style={{ width: "130px", cursor: "auto" }}
                >
                  <i className="bi bi">Super Time</i>
                </a>
              </th>
              <th>
                <a
                  className="btn btn-outline-danger m-2 fw-bold"
                  style={{ width: "140px", cursor: "auto" }}
                >
                  <i className="bi bi">Winner</i>
                </a>
              </th>
            </tr>
          </tr>
          {/* Render rows for top 10 users */}
          <tr id="tr1">
            <UsersOfTopScore Rank={1} />
          </tr>
          <tr id="tr2">
            <UsersOfTopScore Rank={2} />
          </tr>
          <tr id="tr3">
            <UsersOfTopScore Rank={3} />
          </tr>
          <tr id="tr4">
            <UsersOfTopScore Rank={4} />
          </tr>
          <tr id="tr5">
            <UsersOfTopScore Rank={5} />
          </tr>
          <tr id="tr6">
            <UsersOfTopScore Rank={6} />
          </tr>
          <tr id="tr7">
            <UsersOfTopScore Rank={7} />
          </tr>
          <tr id="tr8">
            <UsersOfTopScore Rank={8} />
          </tr>
          <tr id="tr9">
            <UsersOfTopScore Rank={9} />
          </tr>
        </tbody>
      </table>
    </div>
  );
}
// Component to fetch and render top score users
function UsersOfTopScore(porps) {
  let Rank = porps.Rank;
  // Fetch user data for a specific rank
  fetch(`http://localhost:5000/Server/TopScore/${Rank}`)
    .then((response) => response.json())
    .then((Data) => {
      console.table(Data);
      // Render the UserTopScoreGUI component with fetched data
      ReactDOM.render(
        <UserTopScoreGUI Data={Data} />,
        document.getElementById("tr" + porps.Rank)
      );
    })
    .catch((error) => console.error("Error:", error));

  // This component doesn't render anything immediately
  return null;
}

function UserTopScoreGUI(porps) {
  return (
    <tr>
      <td>
        <a
          className="btn btn-outline-dark m-2 fw-bold"
          style={{ width: "150px", cursor: "auto" }}
        >
          <i>{porps.Data.Name}</i>
        </a>
      </td>
      <td>
        <a
          className="btn btn-outline-dark m-2 fw-bold"
          style={{ width: "130px", cursor: "auto" }}
        >
          <i>{porps.Data.SuperTime}</i>
        </a>
      </td>
      <td>
        <a
          className="btn btn-outline-dark m-2 fw-bold"
          style={{ width: "140px", cursor: "auto" }}
        >
          <i className={`bi bi-${porps.Data.Rank}-square-fill`}></i>
        </a>
      </td>
    </tr>
  );
}
