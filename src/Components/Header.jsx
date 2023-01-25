import React from 'react';
import profileIcon from '../images/profileIcon.svg';
// import PropTypes from 'prop-types';

function Header() {
  return (
    <>
      <h1 data-testid="page-title">Recipes App</h1>
      <button
        type="button"
        data-testid="profile-top-btn"
        name="profile"
      >
        <img data-testid="profile-top-btn" src={ profileIcon } alt="" />

      </button>
      <input
        type="text"
        data-testid="search-top-btn"
        placeholder="Pesquisar"
        name="search"
        onChange=" "
      />
    </>
  );
}

/* Header.propTypes = {

};
 */
export default Header;
