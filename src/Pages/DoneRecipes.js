import React from 'react';
import PropTypes from 'prop-types';
import Header from '../Components/Header';
import ProfileIcon from '../Components/ProfileIcon';

function DoneRecipes() {
  return (
    <>
      <Header />
      <ProfileIcon />
      <h1 data-testid="page-title">Done Recipes</h1>
    </>
  );
}

DoneRecipes.propTypes = {
  props: PropTypes.element,
}.insRequired;

export default DoneRecipes;
