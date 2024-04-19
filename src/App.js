// Import React library
import React from "react";
// Import Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Import Bootstrap Icons CSS
import "bootstrap-icons/font/bootstrap-icons.css";
// Import background image
import backgroundImage from "./Bg.jpg";

// Import components
import MainMenu from "./MainMenu";
import Header from "./Header";
import Footer from "./Footer";

// Define the main App component
function App() {
  return (
    // Render the main div with a background image
    <div style={{ backgroundImage: `url(${backgroundImage})` }}>
      <br />
      <br />
      <br />
      {/* Render the Header component */}
      <Header />
      {/* Render the MainMenu component */}
      <MainMenu />
      {/* Render the Footer component */}
      <Footer />
    </div>
  );
}
// Export the App component as the default export
export default App;
