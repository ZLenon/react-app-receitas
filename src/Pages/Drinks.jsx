import React from 'react';
import PropTypes from 'prop-types';
import Header from '../Components/Header';

function Drinks() {
  return (
    <>
      <Header />
      <h1>Drinks</h1>
    </>
  );
}

Drinks.propTypes = {
  props: PropTypes.element,
}.insRequired;

export default Drinks;
