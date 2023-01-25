import React from 'react';
import PropTypes from 'prop-types';
import Header from '../Components/Header';

function FavoriteRecipes() {
  return (
    <>
      <Header />
      <h1>FavoriteRecipes</h1>
    </>
  );
}

FavoriteRecipes.propTypes = {
  props: PropTypes.element,
}.insRequired;

export default FavoriteRecipes;
