import React from 'react';
import PropTypes from 'prop-types';
import Header from '../Components/Header';

function DoneRecipes() {
  return (
    <>
      <Header />
      <h1>DoneRecipes</h1>
    </>
  );
}

DoneRecipes.propTypes = {
  props: PropTypes.element,
}.insRequired;

export default DoneRecipes;
