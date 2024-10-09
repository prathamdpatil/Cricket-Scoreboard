import React, { useState } from 'react';
import './App.css';

function Scoreboard() {
  // State variables for runs, wickets, and overs
  const [runs, setRuns] = useState(0);
  const [wickets, setWickets] = useState(0);
  const [balls, setBalls] = useState(0);  // Each over is 6 balls

  // Increment runs
  const handleRun = (run) => {
    setRuns(runs + run);
    incrementBalls();
  };

  // Increment wickets
  const handleWicket = () => {
    if (wickets < 10) {
      setWickets(wickets + 1);
      incrementBalls();
    }
  };

  // Increment balls and overs
  const incrementBalls = () => {
    setBalls(balls + 1);
  };

  // Calculate overs from balls
  const getOvers = () => {
    const overs = Math.floor(balls / 6);
    const remainingBalls = balls % 6;
    return `${overs}.${remainingBalls}`;
  };

  const resetAll = () => {
    setRuns(0);
    setWickets(0);
    setBalls(0)
}

  return (
    <div className="scoreboard">
      <h1>Cricket Scoreboard</h1>
      <div className="score">
        <p>Runs: {runs}</p>
        <p>Wickets: {wickets} / 10</p>
        <p>Overs: {getOvers()}</p>
      </div>

      <div className="controls">
        <button onClick={() => handleRun(1)}>1 Run</button>
        <button onClick={() => handleRun(2)}>2 Runs</button>
        <button onClick={() => handleRun(3)}>3 Runs</button>
        <button onClick={() => handleRun(4)}>4 Runs</button>
        <button onClick={() => handleRun(6)}>6 Runs</button>
        <button onClick={handleWicket}>Wicket</button>
        <button onClick={resetAll}>Reset</button>
      </div>
    </div>
  );
}

export default Scoreboard;
