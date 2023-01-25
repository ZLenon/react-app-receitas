import React from 'react';
import PropTypes from 'prop-types';
import Header from '../Components/Header';

function Meals() {
  return (
    <>
      <Header />
      <h1>Meals</h1>
    </>
  );
}

Meals.propTypes = {
  props: PropTypes.element,
}.insRequired;

export default Meals;
