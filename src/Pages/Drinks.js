import React from 'react';
import PropTypes from 'prop-types';
import Header from '../Components/Header';
import SearchIcon from '../Components/SearchBar';
import ProfileIcon from '../Components/ProfileIcon';
import Footer from '../Components/Footer';

function Drinks() {
  return (
    <>
      <header>
        <Header />
        <ProfileIcon />
        <SearchIcon />
        <h1 data-testid="page-title">Drinks</h1>
      </header>
      <Footer />
    </>
  );
}

Drinks.propTypes = {
  props: PropTypes.element,
}.insRequired;

export default Drinks;
