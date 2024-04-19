// Import necessary dependencies
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import UserProfile from "./UserProfile";
import CurrentUserName from "./UserInstance";
import React from "react";

// PlayerLife component to display player information and life hearts
export default function PlayerLife(props) {
  // Object representing the state of life hearts
  const Hearts = {
    Life1: true,
    Life2: true,
    Life3: true,
  };
  // Convert HowManyHearts to an integer
  let HowManyHearts = parseInt(props.HowManyHearts);
  // Set the state of life hearts based on the number of remaining hearts
  if (HowManyHearts === 3) {
    Hearts.Life1 = true;
    Hearts.Life2 = true;
    Hearts.Life3 = true;
  } else if (HowManyHearts === 2) {
    Hearts.Life1 = true;
    Hearts.Life2 = true;
    Hearts.Life3 = false;
  } else if (HowManyHearts === 1) {
    Hearts.Life1 = true;
    Hearts.Life2 = false;
    Hearts.Life3 = false;
  } else if (HowManyHearts === 0) {
    Hearts.Life1 = false;
    Hearts.Life2 = false;
    Hearts.Life3 = false;
  } else {
    Hearts.Life1 = true;
    Hearts.Life2 = true;
    Hearts.Life3 = true;
  }

  // Get user data from CurrentUserName
  let UserData = CurrentUserName.getUserName();

  return (
    <div className="container-fluid">
      <a
        href="#"
        className="btn btn-default btn-lg m-2"
        onClick={() =>
          ReactDOM.render(<UserProfile />, document.getElementById("Box"))
        }
      >
        {/* Display user's name and life hearts */}
        &nbsp;&nbsp;&nbsp;
        <p className="fs-1 fw-bold">
          <i
            className="bi bi"
            style={{ cursor: "auto", fontFamily: "Times New Roman" }}
          >
            {" "}
            &nbsp;{UserData.Name} {/* Display user's name */}
          </i>
        </p>
        <p className="fs-3ss fw-bold">
          {/* Display life hearts */}
          {/* If life is remaining, display filled heart icon, otherwise empty heart icon */}

          {Hearts.Life1 ? (
            <i className="bi bi-heart-fill text-danger "> </i>
          ) : (
            <i className="bi bi-heart"> </i>
          )}
          {Hearts.Life2 ? (
            <i className="bi bi-heart-fill text-danger"> </i>
          ) : (
            <i className="bi bi-heart"> </i>
          )}
          {Hearts.Life3 ? (
            <i className="bi bi-heart-fill text-danger"> </i>
          ) : (
            <i className="bi bi-heart"> </i>
          )}
        </p>
      </a>
    </div>
  );
}
