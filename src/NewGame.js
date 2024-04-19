// Import necessary dependencies
import ReactDOM from "react-dom";
import React, { useRef, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import MainLinks from "./MainLinks";
import PlayerLife from "./PlayerLife";
import GameTimer from "./GameTimer";
import CurrentUserNameInstance from "./UserInstance";
import CurrentLevelSingleton from "./LevelInstance";
import SuperTime from "./SuperTime";

// Function to update the number of games won by the user
async function UpdateGamesWon() {
  let UserData = CurrentUserNameInstance.getUserName();
  let Won = UserData.Won;
  if (Won === null) {
    Won = 1;
  } else {
    Won = Won + 1;
  }
  // Update the number of games won in the backend
  await fetch(`http://localhost:5000/Server/Won/${UserData.Name}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      Won: Won,
    }),
  }).catch((error) => {});
  // Update the user data after the change
  await fetch(`http://localhost:5000/Server/UserProfile/${UserData.Name}`)
    .then((response) => response.json())
    .then((Data) => {
      CurrentUserNameInstance.setUserName(Data);
    })
    .catch((error) => console.error("Error:", error));
}
// Function to update the number of games played by the user
async function UpdateGamesPlayed() {
  let UserData = CurrentUserNameInstance.getUserName();
  let GamesPlayed2 = UserData.GamesPlayed || 0;
  if (GamesPlayed2 === null) {
    GamesPlayed2 = 1;
  } else {
    GamesPlayed2 = GamesPlayed2 + 1;
  }
  // Update the number of games played in the backend
  await fetch(`http://localhost:5000/Server/GamesPlayed/${UserData.Name}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      GamesPlayed: GamesPlayed2,
    }),
  })
    .then((response) => response.json())
    .then((Data) => {
      console.table(Data);
    })
    .catch((error) => {});
  // Update the user data after the change
  await fetch(`http://localhost:5000/Server/UserProfile/${UserData.Name}`)
    .then((response) => response.json())
    .then((Data) => {
      CurrentUserNameInstance.setUserName(Data);
    })
    .catch((error) => console.error("Error:", error));
}
// Component for displaying when the game is over
export function GameOver() {
  return (
    <div>
      <a className="btn btn-danger btn-lg fw-bold" style={{ cursor: "auto" }}>
        Incorrect
      </a>
      <br />
      <button
        className="btn btn-outline-warning btn-lg btn-block m-2 fw-bold btn-dark"
        onClick={() => {
          ReactDOM.render(<StartGame />, document.getElementById("Box"));
        }}
      >
        Try Again
      </button>
    </div>
  );
}
// Component for displaying when the game is won
function GameWon() {
  return (
    <div href="#">
      <a className="btn btn-success btn-lg fw-bold" style={{ cursor: "auto" }}>
        Correct
      </a>
      <br />

      <button
        className="btn btn-outline-warning btn-lg btn-block m-2 fw-bold btn-dark"
        onClick={() =>
          ReactDOM.render(<StartGame />, document.getElementById("Box"))
        }
      >
        Next
      </button>
    </div>
  );
}
// Component for displaying when the user's answer is incorrect
function GameIncorrect() {
  return (
    <div>
      <a
        className="btn btn-danger btn-lg m-4 fw-bold"
        style={{ cursor: "auto" }}
      >
        Incorrect
      </a>
    </div>
  );
}
// Component to determine if the user's answer is correct or not
function CorrectOrNot(props) {
  console.log("CorrectorNot - Correct = " + props.Correct);
  console.log("CorrectorNot - User = " + props.Answer);

  if (props.Answer === props.Correct) {
    props.stopTimer();
    UpdateGamesWon(); // Update the number of games won
    ReactDOM.render(<GameWon />, document.getElementById("InputAnswer"));
  } else {
    props.setHowManyHearts(props.HowManyHearts - 1);
    ReactDOM.render(
      <PlayerLife HowManyHearts={props.HowManyHearts - 1} />,
      document.getElementById("PlayerHere")
    );
    if (parseInt(props.HowManyHearts) === 1) {
      props.stopTimer();
      ReactDOM.render(<GameOver />, document.getElementById("InputAnswer"));
    } else {
      ReactDOM.render(
        <GameIncorrect />,
        document.getElementById("HeartDisplay")
      );
    }
  }
}
// Component to render the game
function Game(props) {
  const inputRef = useRef();
  const [HowManyHearts, setHowManyHearts] = useState(props.HowManyHearts);
  return (
    <div
      className="card text-white"
      style={{
        background: "rgba(0, 0, 0, 0)",
        border: "none",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <a
        className="btn btn-outline-danger m-4 fs-1 fw-bold"
        style={{ width: "225px", cursor: "auto", color: "black" }}
        onClick={() =>
          ReactDOM.render(<MainLinks />, document.getElementById("Box"))
        }
      >
        <i className="bi bi-house-fill fs-1 fw-bold"></i>
      </a>
      <img
        src={props.Tomato.question}
        className="card-img-top"
        alt="Tomato API Failed"
        style={{ objectFit: "cover" }}
      />
      <div
        id="InputAnswer"
        className="card-body"
        style={{ background: "rgba(0, 0, 0, 0)", border: "none" }}
      >
        <div className="input-group mb-3">
          <span
            className="btn btn-default"
            id="AnswerText"
            style={{ cursor: "auto" }}
          ></span>
        </div>
        <dev>
          <button
            type="button"
            className="bi bi-0-square-fill btn btn-danger"
            onClick={() =>
              ReactDOM.render(
                <CorrectOrNot
                  Correct={parseInt(props.Tomato.solution)}
                  Answer={parseInt(0)}
                  HowManyHearts={HowManyHearts}
                  setHowManyHearts={setHowManyHearts}
                  stopTimer={props.stopTimer}
                />,
                document.getElementById("HeartDisplay")
              )
            }
            ref={inputRef}
          ></button>
          &nbsp;
          <button
            type="button"
            className="bi bi-1-square-fill btn btn-danger"
            onClick={() =>
              ReactDOM.render(
                <CorrectOrNot
                  Correct={parseInt(props.Tomato.solution)}
                  Answer={parseInt(1)}
                  HowManyHearts={HowManyHearts}
                  setHowManyHearts={setHowManyHearts}
                  stopTimer={props.stopTimer}
                />,
                document.getElementById("HeartDisplay")
              )
            }
            ref={inputRef}
          ></button>
          &nbsp;
          <button
            type="button"
            className="bi bi-2-square-fill btn btn-danger"
            onClick={() =>
              ReactDOM.render(
                <CorrectOrNot
                  Correct={parseInt(props.Tomato.solution)}
                  Answer={parseInt(2)}
                  HowManyHearts={HowManyHearts}
                  setHowManyHearts={setHowManyHearts}
                  stopTimer={props.stopTimer}
                />,
                document.getElementById("HeartDisplay")
              )
            }
            ref={inputRef}
          ></button>
          &nbsp;
          <button
            type="button"
            className="bi bi-3-square-fill btn btn-danger"
            onClick={() =>
              ReactDOM.render(
                <CorrectOrNot
                  Correct={parseInt(props.Tomato.solution)}
                  Answer={parseInt(3)}
                  HowManyHearts={HowManyHearts}
                  setHowManyHearts={setHowManyHearts}
                  stopTimer={props.stopTimer}
                />,
                document.getElementById("HeartDisplay")
              )
            }
            ref={inputRef}
          ></button>
          &nbsp;
          <button
            type="button"
            className="bi bi-4-square-fill btn btn-danger"
            onClick={() =>
              ReactDOM.render(
                <CorrectOrNot
                  Correct={parseInt(props.Tomato.solution)}
                  Answer={parseInt(4)}
                  HowManyHearts={HowManyHearts}
                  setHowManyHearts={setHowManyHearts}
                  stopTimer={props.stopTimer}
                />,
                document.getElementById("HeartDisplay")
              )
            }
            ref={inputRef}
          ></button>
          &nbsp;
          <button
            type="button"
            className="bi bi-5-square-fill btn btn-danger"
            onClick={() =>
              ReactDOM.render(
                <CorrectOrNot
                  Correct={parseInt(props.Tomato.solution)}
                  Answer={parseInt(5)}
                  HowManyHearts={HowManyHearts}
                  setHowManyHearts={setHowManyHearts}
                  stopTimer={props.stopTimer}
                />,
                document.getElementById("HeartDisplay")
              )
            }
            ref={inputRef}
          ></button>
          &nbsp;
          <button
            type="button"
            className="bi bi-6-square-fill btn btn-danger"
            onClick={() =>
              ReactDOM.render(
                <CorrectOrNot
                  Correct={parseInt(props.Tomato.solution)}
                  Answer={parseInt(6)}
                  HowManyHearts={HowManyHearts}
                  setHowManyHearts={setHowManyHearts}
                  stopTimer={props.stopTimer}
                />,
                document.getElementById("HeartDisplay")
              )
            }
            ref={inputRef}
          ></button>
          &nbsp;
          <button
            type="button"
            className="bi bi-7-square-fill btn btn-danger"
            onClick={() =>
              ReactDOM.render(
                <CorrectOrNot
                  Correct={parseInt(props.Tomato.solution)}
                  Answer={parseInt(7)}
                  HowManyHearts={HowManyHearts}
                  setHowManyHearts={setHowManyHearts}
                  stopTimer={props.stopTimer}
                />,
                document.getElementById("HeartDisplay")
              )
            }
            ref={inputRef}
          ></button>
          &nbsp;
          <button
            type="button"
            className="bi bi-8-square-fill btn btn-danger"
            onClick={() =>
              ReactDOM.render(
                <CorrectOrNot
                  Correct={parseInt(props.Tomato.solution)}
                  Answer={parseInt(8)}
                  HowManyHearts={HowManyHearts}
                  setHowManyHearts={setHowManyHearts}
                  stopTimer={props.stopTimer}
                />,
                document.getElementById("HeartDisplay")
              )
            }
            ref={inputRef}
          ></button>
          &nbsp;
          <button
            type="button"
            className="bi bi-9-square-fill btn btn-danger"
            onClick={() =>
              ReactDOM.render(
                <CorrectOrNot
                  Correct={parseInt(props.Tomato.solution)}
                  Answer={parseInt(9)}
                  HowManyHearts={HowManyHearts}
                  setHowManyHearts={setHowManyHearts}
                  stopTimer={props.stopTimer}
                />,
                document.getElementById("HeartDisplay")
              )
            }
            ref={inputRef}
          ></button>
          &nbsp;
        </dev>
        <div id="HeartDisplay"></div>
      </div>
    </div>
  );
}
// Component to start the game
export default function StartGame() {
  UpdateGamesPlayed(); // Update the number of games played

  let TimeLeft;
  let TimeElapsed = 0;

  // Get the current level and set the time left accordingly
  let Level = CurrentLevelSingleton.getLevel();

  if (Level === 1) {
    TimeLeft = 30;
  } else if (Level === 2) {
    TimeLeft = 20;
  } else if (Level === 3) {
    TimeLeft = 10;
  } else {
    TimeLeft = 2;
  }

  // Interval to update the timer every second
  let OneSecPass = setInterval(() => {
    if (TimeLeft > 0) {
      TimeLeft = TimeLeft - 1;
      TimeElapsed = TimeElapsed + 1;

      // Render the GameTimer component
      ReactDOM.render(
        <GameTimer TimeLeft={TimeLeft} TimeElapsed={TimeElapsed} />,
        document.getElementById("TimerHere")
      );
    } else {
      clearInterval(OneSecPass);
      ReactDOM.render(<GameOver />, document.getElementById("InputAnswer"));
    }
  }, 1000);

  // Function to stop the timer
  const stopTimer = () => {
    clearInterval(OneSecPass);
    SuperTime(TimeElapsed); // Log the time elapsed for analytics
  };

  // Fetch a new question from the API
  fetch("https://marcconrad.com/uob/tomato/api.php")
    .then((response) => response.json())
    .then((Tomato) => {
      // Render the Game component with the fetched question
      console.log("TOMATO API - Question = " + Tomato.question);
      console.log("TOMATO API - Solution = " + Tomato.solution);
      ReactDOM.render(
        <Game Tomato={Tomato} HowManyHearts={3} stopTimer={stopTimer} />,
        document.getElementById("Box")
      );
    })
    .catch((error) => console.error("Error:", error));
  return null;
}
