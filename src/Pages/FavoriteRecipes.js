import React from 'react';
import PropTypes from 'prop-types';
import Header from '../Components/Header';
import ProfileIcon from '../Components/ProfileIcon';

function FavoriteRecipes() {
  return (
    <>
      <Header />
      <ProfileIcon />
      <h1 data-testid="page-title">Favorite Recipes</h1>
    </>
  );
}

FavoriteRecipes.propTypes = {
  props: PropTypes.element,
}.insRequired;

export default FavoriteRecipes;
