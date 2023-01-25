import React from 'react';
import searchIcon from '../images/searchIcon.svg';
// import PropTypes from 'prop-types';

function SearchIcon() {
  return (
    <img data-testid="search-top-btn" src={ searchIcon } alt="Search Icon" />
  );
}

/* SearchIcon.propTypes = {

}; */

export default SearchIcon;
