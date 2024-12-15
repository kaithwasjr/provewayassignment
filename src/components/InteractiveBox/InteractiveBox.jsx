import React, { useState } from "react";
import "./InteractiveBox.css";
import OptionCard from "./OptionCard";
import Summary from "../Summary/Summary";

const InteractiveBox = ({ options }) => {
  const [selectedOption, setSelectedOption] = useState(2);

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className="bogo-container">
      <div className="header-container">
        <h2>YAY! It's BOGO</h2>
      </div>

      {options.map((option) => (
        <OptionCard
          key={option.id}
          option={option}
          isSelected={selectedOption === option.id}
          onSelect={() => handleOptionChange(option.id)}
        />
      ))}

      <Summary selectedOption={selectedOption} options={options} />

      <button className="add-to-cart">+ Add to Cart</button>
      <p className="powered-by">
        <i>@Powered by Pumper</i>
      </p>
    </div>
  );
};

export default InteractiveBox;