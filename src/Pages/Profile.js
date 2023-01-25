import React from 'react';
import PropTypes from 'prop-types';
import Header from '../Components/Header';
import ProfileIcon from '../Components/ProfileIcon';

function Profile() {
  return (
    <>
      <Header />
      <ProfileIcon />
      <h1 data-testid="page-title">Profile</h1>
    </>
  );
}

Profile.propTypes = {
  props: PropTypes.element,
}.insRequired;

export default Profile;
