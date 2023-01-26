import React from 'react';
import PropTypes from 'prop-types';
import Header from '../Components/Header';
import SearchIcon from '../Components/SearchBar';
import ProfileIcon from '../Components/ProfileIcon';

function Drinks() {
  return (
    <>
      <Header />
      <SearchIcon />
      <ProfileIcon />
      <h1 data-testid="page-title">Drinks</h1>
    </>
  );
}

Drinks.propTypes = {
  props: PropTypes.element,
}.insRequired;

export default Drinks;
