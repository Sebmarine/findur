import React, { useState } from "react";
import "./RPS.css";

const options = ["Rock", "Paper", "Scissors"];

const RPS = () => {
  const [playerOption, setPlayerOption] = useState("");
  const [computerOption, setComputerOption] = useState("");
  const [result, setResult] = useState("");

  const handleClick = (option) => {
    setPlayerOption(option);
    const randomIndex = Math.floor(Math.random() * 3);
    setComputerOption(options[randomIndex]);
    determineWinner();
  };

  const determineWinner = () => {
    if (playerOption === computerOption) {
      setResult("Tie");
    } else if (
      (playerOption === "Rock" && computerOption === "Scissors") ||
      (playerOption === "Paper" && computerOption === "Rock") ||
      (playerOption === "Scissors" && computerOption === "Paper")
    ) {
      setResult("You Win");
    } else {
      setResult("Computer Wins");
    }
  };

  return (
    <div className="container">
      <h1 className="header">Rock, Paper, Scissors</h1>
      <div className="choice-container">
        <button classname="choice-item" onClick={() => handleClick("Rock")}>
          Rock
        </button>
        <button classname="choice-item" onClick={() => handleClick("Paper")}>
          Paper
        </button>
        <button classname="choice-item" onClick={() => handleClick("Scissors")}>
          Scissors
        </button>
      </div>
      <div className="result">
        <p>You chose: {playerOption}</p>
        <p>Computer chose: {computerOption}</p>
        <p>Result: {result}</p>
      </div>
    </div>
  );
};

export default RPS;
