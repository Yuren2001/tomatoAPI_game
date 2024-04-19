// Import necessary dependencies
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App"; // Import the main App component
import reportWebVitals from "./reportWebVitals"; // Import the function for reporting web vitals

// Create a root using ReactDOM.createRoot method and target the element with id "root"
const root = ReactDOM.createRoot(document.getElementById("root"));

// Render the main App component inside React.StrictMode for additional checks in development mode
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
