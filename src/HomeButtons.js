import React from 'react';

export function HomeButtons(props) {
  return (
    <div className="homeButtons">
      
      <button className="homeButtons__touchdown"
        onClick={() => {
          props.setHomeScore(props.homeScore + 7);
        }}>Home Touchdown
      </button>

      <button className="homeButtons__fieldGoal"
        onClick={() => {
          props.setHomeScore(props.homeScore + 3);
        }}>Home Field Goal
      </button>
  </div>
  );
}