import React from 'react';
import PropTypes from 'prop-types';
import Header from '../Components/Header';

function DrinksIdRecipe() {
  return (
    <>
      <Header />
      <h1>DrinksIdRecipe</h1>
    </>
  );
}

DrinksIdRecipe.propTypes = {
  props: PropTypes.element,
}.insRequired;

export default DrinksIdRecipe;
