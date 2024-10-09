import React, { useState } from 'react';
import './App.css';

function Scoreboard() {
  const [runs, setRuns] = useState(0);
  const [wickets, setWickets] = useState(0);
  const [balls, setBalls] = useState(0); 
  const [showAlert, setShowAlert] = useState(false); 

  const handleResetClick = () => {
    setShowAlert(true); // Show the alert when the reset button is clicked
  };

  const handleConfirmReset = () => {
    // Logic to reset the scoreboard
    setRuns(0);
    setWickets(0);
    setBalls(0);
    setShowAlert(false); // Hide the alert after confirmation
  };

  const handleCancelReset = () => {
    setShowAlert(false); // Hide the alert without resetting
  };

  const handleRun = (run) => {
    setRuns(runs + run);
    incrementBalls();
  };

  const handleWicket = () => {
    if (wickets < 10) {
      setWickets(wickets + 1);
      incrementBalls();
    }
  };


  const incrementBalls = () => {
    setBalls(balls + 1);
  };


  const getOvers = () => {
    const overs = Math.floor(balls / 6);
    const remainingBalls = balls % 6;
    return `${overs}.${remainingBalls}`;
  };


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
        <button onClick={handleWicket} id='handleWicket'>Wicket</button>
        <div className="controls">
      <button onClick={handleResetClick}>Reset</button>

      {/* Custom Alert Box */}
      {showAlert && (
        <div className="alert-overlay">
          <div className="alert-box">
            <h2>Are You Sure?</h2>
            <p>Do you really want to reset all the information?</p>
            <div className="alert-actions">
              <button onClick={handleConfirmReset}>Yes, Reset</button>
              <button onClick={handleCancelReset}>Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
      </div>
    </div>
  );
}

export default Scoreboard;
