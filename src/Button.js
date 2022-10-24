import React from "react";

const Button = ({ symbol, handleClick, color }) => {
  return (
    <button
      className="button"
      style={{ backgroundColor: color }}
      onClick={() => handleClick(symbol)}
    >
      {symbol}
    </button>
  );
};

export default Button;
