// Import necessary dependencies
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import CurrentUserNameInstance from "./UserInstance";

export default function SuperTime(TimeElapsed) {
  // Retrieve user data from the CurrentUserNameInstance
  let UserData = CurrentUserNameInstance.getUserName();

  // Check if the elapsed time is less than the user's current SuperTime or if SuperTime is null
  if (TimeElapsed < UserData.SuperTime || UserData.SuperTime === null) {
    // Update the user's SuperTime on the server
    fetch(`http://localhost:5000/Server/SuperTime/${UserData.Name}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        SuperTime: TimeElapsed,
      }),
    }).catch((error) => {
      // Log any errors that occur during the fetch request
      console.error("Error:", error);
    });

    // Update the top score on the server
    fetch("http://localhost:5000/Server/UpdateTopScore", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
    }).catch((error) => console.error("Error:", error));

    // Fetch updated user profile data after SuperTime update
    fetch(`http://localhost:5000/Server/UserProfile/${UserData.Name}`)
      .then((response) => response.json())
      .then((Data) => {
        // Set the updated user profile data in CurrentUserNameInstance
        CurrentUserNameInstance.setUserName(Data);

        // Log the new best time after updating
        console.log(
          "NNNNNNNEEEEEEEEWWWWWWWW BBBBEEEESSSSTTTTTT     " +
            CurrentUserNameInstance.getUserName().SuperTime
        );
      })
      .catch((error) => console.error("Error:", error));
  }
}
