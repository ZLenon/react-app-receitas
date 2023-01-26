import React from 'react';
import PropTypes from 'prop-types';
import Header from '../Components/Header';
import ProfileIcon from '../Components/ProfileIcon';
import Footer from '../Components/Footer';

function DoneRecipes() {
  return (
    <>
      <header>
        <Header />
        <ProfileIcon />
        <h1 data-testid="page-title">Done Recipes</h1>
      </header>
      <Footer />
    </>
  );
}

DoneRecipes.propTypes = {
  props: PropTypes.element,
}.insRequired;

export default DoneRecipes;
