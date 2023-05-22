import React from "react";

const Count = ({ name, count, handleDecrease, handleIncrease }) => {
  return (
    <div className="optionItem">
      <span className="optionText">{name}</span>
      <div className="optionCounter">
        <button
          disabled={count <= 1}
          className="optionCounterButton"
          onClick={handleDecrease}
        >
          -
        </button>
        <span className="optionCounterNumber">{count}</span>
        <button className="optionCounterButton" onClick={handleIncrease}>
          +
        </button>
      </div>
    </div>
  );
};

export default Count;
