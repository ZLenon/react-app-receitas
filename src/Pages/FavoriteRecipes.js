import React from 'react';
import PropTypes from 'prop-types';
import Header from '../Components/Header';
import ProfileIcon from '../Components/ProfileIcon';
import Footer from '../Components/Footer';

function FavoriteRecipes() {
  return (
    <>
      <header>
        <Header />
        <ProfileIcon />
        <h1 data-testid="page-title">Favorite Recipes</h1>
      </header>
      <Footer />
    </>

  );
}

FavoriteRecipes.propTypes = {
  props: PropTypes.element,
}.insRequired;

export default FavoriteRecipes;
