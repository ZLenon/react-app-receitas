import React from 'react';
import PropTypes from 'prop-types';
import Header from '../Components/Header';

function MealsIdRecipeProgress() {
  return (
    <>
      <Header />
      <h1>MealsIdRecipeProgress</h1>
    </>
  );
}

MealsIdRecipeProgress.propTypes = {
  props: PropTypes.element,
}.insRequired;

export default MealsIdRecipeProgress;
