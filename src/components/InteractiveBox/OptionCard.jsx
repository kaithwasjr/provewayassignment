import React from "react";
export const options = [
  {
    id: 1,
    units: 1,
    discount: 10,
    price: 10.0,
    oldPrice: 24.0,
  },
  {
    id: 2,
    units: 2,
    discount: 20,
    price: 18.0,
    oldPrice: 24.0,
    isMostPopular: true, // Add a flag for "Most Popular"
  },
  {
    id: 3,
    units: 3,
    discount: 30,
    price: 24.0,
    oldPrice: 24.0,
  },
];

const OptionCard = ({ option, isSelected, onSelect }) => {
  return (
    <div
      className={`option-card ${isSelected ? "selected" : ""}`}
      style={{ display: "flex", flexDirection: `${isSelected ? "column" : "row"}` }}
      onClick={onSelect}
    >
      {option.isMostPopular && (<>
        <div className="badge-most-popular-svg">
        <svg width="170" height="7" viewBox="0 0 129 7" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5 0H124L129 7H0L5 0Z" fill="#D7445B"/>
        </svg>
        </div>
        <div className="badge-most-popular">MOST POPULAR</div>
      </>
      )}
      <div className="option-card-inner">
        <input
          type="radio"
          id={`option${option.id}`}
          name="unitOption"
          value={option.id}
          checked={isSelected}
          onChange={() => {}}
        />
        <label htmlFor={`option${option.id}`}>
          <div className="firstdiv">
            <div className="firstdivsec1">
              <strong className="oneunit">
                {`${option.units} Unit${option.units > 1 ? "s" : ""}`}
              </strong>
              <span className="badge">{`${option.discount}% Off`}</span>
            </div>
            {option.units === 1 && (
              <span className={"standard-price"}>Standard Price</span>
            )}
          </div>
          <p className="usdfirst">
            <strong className="usdfirststrong">{`$${option.price}.00 USD`}</strong>
            <span className="old-price">{`$${option.oldPrice}.00 USD`}</span>
          </p>
        </label>
      </div>
      {isSelected && (
        <div className="dropdownstopparentdiv">
          <div className="dropdowns">
            <div className="dropdownparent">
              <div className="counttextparentdiv">
                <p className="counttext">#1</p>
                <p className="counttext">#2</p>
              </div>
              <div className="dropdownfirst">
                <label>Size</label>
                <select>
                  <option value="S">S</option>
                  <option value="M">M</option>
                  <option value="L">L</option>
                </select>
                <div className="dropdownsecondparent">
                  <select>
                    <option value="S">S</option>
                    <option value="M">M</option>
                    <option value="L">L</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="dropdownparent">
              <div className="dropdownfirst">
                <label>Colour</label>
                <select>
                  <option value="Black">Black</option>
                  <option value="White">White</option>
                  <option value="Red">Red</option>
                </select>
                <select>
                  <option value="Black">Black</option>
                  <option value="White">White</option>
                  <option value="Red">Red</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default OptionCard;
