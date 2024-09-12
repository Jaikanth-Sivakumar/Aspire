import React, { useState } from "react";
import "./SelectCategory.css";

function SelectCategory({ checkBoxState, handleCheckBox, priceFlter, handlePriceFilter}) {
  const [isOpen, setIsOpen] = useState(false);

  function handleCategoryClick() {
    setIsOpen(!isOpen);
  }

  return (
    <div className="select-category_container">
      <h4 onClick={handleCategoryClick}>Category</h4>
      <div className={isOpen ? "open" : ""}>
        <span className="category-option">
          <input
            type="checkbox"
            id="category-men"
            name="men"
            checked={checkBoxState.men}
            onChange={handleCheckBox}
          />
          <label htmlFor="category-men">masculine</label>
        </span>
        <span className="category-option">
          <input
            type="checkbox"
            id="category-women"
            name="women"
            checked={checkBoxState.women}
            onChange={handleCheckBox}
          />
          <label htmlFor="category-women">Feminnine</label>
        </span>
      </div>
    </div>
  );
}


export default SelectCategory;

/*

import React, { useState } from "react";
import "./PriceFilter.css";
import "./SelectCategory.css";

function PriceFilter({ priceFlter, handlePriceFilter }) {
  return (
    <div className="price-filter_wrapper">
      <label htmlFor="price-filter">Sort by:</label>
      <select id="price-filter" value={priceFlter} onChange={handlePriceFilter}>
        <option value="default" disabled hidden>
          Select an option
        </option>
        <option value="high-to-low">(Price) Highest to lowest</option>
        <option value="low-to-high">(Price) Lowest to highest</option>
      </select>
    </div>
  );
}

function SelectCategory({ checkBoxState, handleCheckBox, priceFlter, handlePriceFilter }) {
  const [isOpen, setIsOpen] = useState(false);

  function handleCategoryClick() {
    setIsOpen(!isOpen);
  }

  return (
    <div className="select-category_container">
      <h4 onClick={handleCategoryClick}>Category</h4>
      <div className={isOpen ? "open" : ""}>
        <span className="category-option">
          <input
            type="checkbox"
            id="category-men"
            name="men"
            checked={checkBoxState.men}
            onChange={handleCheckBox}
          />
          <label htmlFor="category-men">Men</label>
        </span>
        <span className="category-option">
          <input
            type="checkbox"
            id="category-women"
            name="women"
            checked={checkBoxState.women}
            onChange={handleCheckBox}
          />
          <label htmlFor="category-women">Women</label>
        </span>
      </div>
      <PriceFilter priceFlter={priceFlter} handlePriceFilter={handlePriceFilter} />
    </div>
  );
}

export default SelectCategory;
*/