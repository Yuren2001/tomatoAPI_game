// Import necessary dependencies
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import RegisterUser from "./RegisterUser"; // Import RegisterUser component
import MainLinks from "./MainLinks"; // Import MainLinks component
import CurrentUserNameInstance from "./UserInstance"; // Import CurrentUserNameInstance
import React, { useRef } from "react";

// Define the LoginUser component
export default function LoginUser() {
  const usernameRef = useRef(); // Create a ref for username input
  const passwordRef = useRef(); // Create a ref for password input

  // Function to handle login
  function LoginHandle(CurrentUserName, CurrentPassword) {
    if (CurrentUserName && CurrentPassword) {
      fetch(`http://localhost:5000/Server/UserProfile/${CurrentUserName}`)
        .then((response) => response.json())
        .then((Data) => {
          if (Data && CurrentPassword === Data.Password) {
            CurrentUserNameInstance.setUserName(Data);
            ReactDOM.render(<MainLinks />, document.getElementById("Box"));
          } else {
            alert("Invalid Username & Password");
          }
        })
        .catch((error) => {
          console.error("Error:", error);
          alert("Can Not Connect At The Moment: Server Update On Progress.");
        });
    } else {
      alert("Please fill Username & Password");
    }
  }

  return (
    // Render login form
    <div>
      <a
        className="btn btn-outline-danger m-6 fs-1 fw-bold"
        style={{ width: "225px", cursor: "auto", color: "black" }}
        onClick={() =>
          ReactDOM.render(<LoginUser />, document.getElementById("Box"))
        }
      >
        <i className="bi bi-house-fill fs-1 fw-bold"></i>
      </a>
      <br />
      <br />
      <br />
      <br />
      <div className="input-group mb-3">
        <span className="input-group-text btn btn-secondary" id="basic-addon1">
          <i className="bi bi"></i>Username
        </span>
        <input
          type="text"
          className="form-control"
          placeholder="Username"
          aria-label="Username"
          aria-describedby="basic-addon1"
          ref={usernameRef}
        />
      </div>
      <div className="input-group mb-3">
        <span className="input-group-text btn btn-secondary" id="basic-addon1">
          <i className="bi bi"></i> Password
        </span>
        <input
          type="password"
          className="form-control"
          placeholder="Password"
          aria-label="Password"
          aria-describedby="basic-addon1"
          ref={passwordRef}
        />
      </div>
      <button
        type="button"
        className="btn btn-dark btn-lg m-2 fw-bold"
        onClick={() =>
          LoginHandle(usernameRef.current.value, passwordRef.current.value)
        }
      >
        <i className="bi bi-door-open fs-1 fw-bold"></i> Login
      </button>
      &nbsp;
      <button
        type="button"
        className="btn btn-dark btn-lg m-2 fw-bold"
        onClick={() =>
          ReactDOM.render(<RegisterUser />, document.getElementById("Box"))
        }
      >
        <i className="bi bi-box-arrow-in-left  fs-1 fw-bold"></i> Register
      </button>
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}
