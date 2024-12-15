import React from "react";

const Summary = ({ selectedOption, options }) => {
  const selected = options.find((option) => option.id === selectedOption);
  return (
    <div className="summary">
      <p className="freedelivery">Free Delivery</p>
      <p>
        <strong >Total: ${selected ? selected.price : 0}.00 USD</strong>
      </p>
    </div>
  );
};

export default Summary;