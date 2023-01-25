import React from 'react';
import PropTypes from 'prop-types';
import Header from '../Components/Header';

function MealsIdRecipe() {
  return (
    <>
      <Header />
      <h1>MealsIdRecipe</h1>
    </>
  );
}

MealsIdRecipe.propTypes = {
  props: PropTypes.element,
}.insRequired;

export default MealsIdRecipe;
