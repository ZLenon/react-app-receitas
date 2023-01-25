import React from 'react';
import PropTypes from 'prop-types';
import Header from '../Components/Header';
import SearchIcon from '../Components/SearchIcon';
import ProfileIcon from '../Components/ProfileIcon';

function Meals() {
  return (
    <header>
      <Header />
      <ProfileIcon />
      <SearchIcon />
      <h1 data-testid="page-title">Meals</h1>
    </header>
  );
}

Meals.propTypes = {
  props: PropTypes.element,
}.insRequired;

export default Meals;
