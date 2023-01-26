import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import searchIcon from '../images/searchIcon.svg';
// import PropTypes from 'prop-types';

function SearchIcon() {
  const [isShow, setIsShow] = useState(false);
  return (
    <>
      <Link
        to="#"
        onClick={ () => setIsShow(!isShow) }
      >
        <img data-testid="search-top-btn" src={ searchIcon } alt="Search Icon" />
      </Link>
      {isShow && (<>
        <input
          type="text"
          data-testid="search-input"
          onChange=""
        />
        <p id="radioButtons">
          <label htmlFor="ingredient">
            Ingredient
            <input
              type="radio"
              data-testid="ingredient-search-radio"
              name="ingredient"
              onChange=""
            />
          </label>
          <label htmlFor="name">
            Name
            <input
              type="radio"
              data-testid="name-search-radio"
              name="name"
              onChange=""
            />
          </label>
          <label htmlFor="firstLetter">
            First Letter
            <input
              type="radio"
              data-testid="first-letter-search-radio"
              name="firstLetter"
              onChange=""
            />
          </label>
        </p>
        <button
          type="button"
          data-testid="exec-search-btn"
          onClick=""
        >
          Search

        </button>
                  </>
      )}
    </>
  );
}

/* SearchIcon.propTypes = {

}; */

export default SearchIcon;
