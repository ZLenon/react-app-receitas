import React from 'react';
import PropTypes from 'prop-types';
import Header from '../Components/Header';

function Profile() {
  return (
    <>
      <Header />
      <h1>Profile</h1>
    </>
  );
}

Profile.propTypes = {
  props: PropTypes.element,
}.insRequired;

export default Profile;
