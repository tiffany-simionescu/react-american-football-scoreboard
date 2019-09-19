import React from 'react';

export function IncrementQuarter(props) {
  return (
  <div className="quarterButton">

    <button className="quarter_increment_button"
      onClick={() => {
        props.setQuarter(props.quarter + 1);
          if(props.quarter >= 4) {
            props.setQuarter(1);
          }
      }}>Increment Quarter
    </button>

  </div>
  );
}