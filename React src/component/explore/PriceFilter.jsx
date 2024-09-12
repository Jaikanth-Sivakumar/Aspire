import React, { useState } from "react";
import "./PriceFilter.css";

function PriceFilter({ priceFlter, handlePriceFilter }) {
  return (
    <div className="price-filter_wrapper">
      <h4>Sort by Price</h4>
      <div className="radio-group">
        <label>
          <input
            type="radio"
            name="price-filter"
            value="high-to-low"
            checked={priceFlter === "high-to-low"}
            onChange={handlePriceFilter}
          />
          Highest to lowest
        </label>

        <label>
          <input
            type="radio"
            name="price-filter"
            value="low-to-high"
            checked={priceFlter === "low-to-high"}
            onChange={handlePriceFilter}
          />
          Lowest to highest
        </label>
      </div>
    </div>
    
  );
}

export default PriceFilter;





/*

import React, { useState } from "react";

import "./PriceFilter.css";

function SelectCategory({ checkBoxState, handleCheckBox }) {
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
          checked={checkBoxState.men} // Access checkBoxState for 'men'
          onChange={handleCheckBox}
        />
        <label htmlFor="category-men">masculine</label>
      </span>
      <span className="category-option">
        <input
          type="checkbox"
          id="category-women"
          name="women"
          checked={checkBoxState.women} // Access checkBoxState for 'women'
          onChange={handleCheckBox}
        />
        <label htmlFor="category-women">feminine</label>
      </span>
    </div>
  </div>
  );
}

function PriceFilter() {
  const [priceFlter, setPriceFilter] = useState(""); // Manage price filter state
  const [checkBoxState, setCheckBoxState] = useState({
    men: false,
    women: false,
  }); // Manage checkbox state

  function handleCheckBox(e) {
    const { name, checked } = e.target;
    setCheckBoxState((prevState) => ({
      ...prevState,
      [name]: checked, // Update the state dynamically based on the checkbox
    }));
  }

  function handlePriceFilter(e) {
    setPriceFilter(e.target.value); // Update price filter state
  }

  return (
    <div className="price-filter_wrapper">
      <h4>Sort by Price</h4>
      <div className="radio-group">
        <label>
          <input
            type="radio"
            name="price-filter"
            value="high-to-low"
            checked={priceFlter === "high-to-low"}
            onChange={handlePriceFilter}
          />
          Highest to lowest
        </label>

        <label>
          <input
            type="radio"
            name="price-filter"
            value="low-to-high"
            checked={priceFlter === "low-to-high"}
            onChange={handlePriceFilter}
          />
          Lowest to highest
        </label>
      </div>
      

      
    </div>
  );
}

export default PriceFilter;
*/