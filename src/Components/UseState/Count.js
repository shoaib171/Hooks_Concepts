/** @format */

import React, { useState } from "react";

const Count = (props) => {
  const [Count, SetCount] = useState(0);
  // const incrementvalue=(e)=>{
  //    e.preventDefault();
  //    SetCount(Count+1);
  // }
  // const decrementvalue=(e)=>{
  //     e.preventDefault();
  //     SetCount(Count-1);
  //This is conditional logic to show just zero values not in Minus
  // if (Count > 0) {
  //   SetCount(Count - 1);
  // } else {
  //   SetCount(0);
  // }
  //  }
  return (
    <div style={{ textAlign: "center", position: "relative", top: "30px" }}>
      <h2>{props.heading}</h2>
      <button className="btn" onClick={() => SetCount(Count + 1)}>
        +
      </button>
      <span>{Count}</span>
      <button
        className="btn"
        onClick={() => (Count === 0 ? SetCount(0) : SetCount(Count - 1))}
      >
        -
      </button>
    </div>
  );
};

export default Count;
