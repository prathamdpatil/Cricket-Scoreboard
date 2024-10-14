import React, { useState } from 'react';
import './App.css';

function Scoreboard() {
  const [runs, setRuns] = useState(0);
  const [wickets, setWickets] = useState(0);
  const [balls, setBalls] = useState(0); 
  const [showAlert, setShowAlert] = useState(false); 
  

  const handleResetClick = () => {
    setShowAlert(true); 
  };

  const handleConfirmReset = () => {
    setRuns(0);
    setWickets(0);
    setBalls(0);
    setShowAlert(false); 

  };

  const handleCancelReset = () => {
    setShowAlert(false);
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
    <div className="scoreboardCon">
     <div className="scoreboard">
     <div className="teamscont">
            <div>
              <label htmlFor="team1" className='teamLable'>Team 1'st :-</label>
              <input type="text" className='teamInput' id='team1' placeholder='Enter Team Name'/>
            </div>
            <span className='teamLable teamLable2'>V/S</span>
            <div>
                <label htmlFor="team2" className='teamLable'>Team 2'nd :-</label>
                <input type="text" className='teamInput' id='team2' placeholder='Enter Team Name'/>
            </div>
     </div>
      <h1>Cricket Scoreboard</h1>
      <div className="score">
        <p>Runs: {runs}</p>
        <p>Wickets: {wickets} / 10</p>
        <p>Overs: {getOvers()}/20</p>
      </div>

      <div className="controls">
        <button onClick={() => handleRun(1)}>1 Run</button>
        <button onClick={() => handleRun(2)}>2 Runs</button>
        <button onClick={() => handleRun(3)}>3 Runs</button>
        <button onClick={() => handleRun(4)}>4 Runs</button>
        <button onClick={() => handleRun(6)}>6 Runs</button>
        <button onClick={handleWicket} id='handleWicket'>Wicket</button>
        <div className="controls">
        <button className='saveButton applyPos1'>Save Record</button>
      <button onClick={handleResetClick} className='resetButton applyPos2'>Reset</button>
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

    </div>
    
  );
}

export default Scoreboard;
