//TODO: STEP 1 - Import the useState hook.
import React, { useState, useEffect } from "react";
import "./App.css";
import BottomRow from "./BottomRow";


function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
  const [homeScore, updateHome] = useState(0);
  const [awayScore, updateAway] = useState(0);
  const [secCount, secCountDown] = useState(59);
  const [minCount, minCountDown] = useState(14)

  useEffect(() => {
    setTimeout(() => {
      secCountDown(secCount - 1)
    }, 1000);
  })

  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">Saints</h2>
            <div className="home__score">{homeScore}</div>
          </div>
          <div className="timer">{minCount}:{secCount}</div>
          {secCount === 0 && (
            secCountDown(59),
            minCountDown(minCount - 1)
          )}
          <div className="away">
            <h2 className="away__name">Panthers</h2>
            <div className="away__score">{awayScore}</div>
          </div>
        </div>
        <BottomRow />
      </section>
      <section className="buttons">
        <div className="homeButtons">
          <button onClick={() => updateHome(homeScore + 7)} className="homeButtons__touchdown">Home Touchdown</button>
          <button onClick={() => updateHome(homeScore + 3)} className="homeButtons__fieldGoal">Home Field Goal</button>
        </div>
        <div className="awayButtons">
          <button onClick={() => updateAway(awayScore + 7)} className="awayButtons__touchdown">Away Touchdown</button>
          <button onClick={() => updateAway(awayScore + 3)} className="awayButtons__fieldGoal">Away Field Goal</button>
        </div>
          
      </section>
    </div>
  );
}

export default App;
