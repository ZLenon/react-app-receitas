import React from 'react';
import PropTypes from 'prop-types';
import Header from '../Components/Header';
import ProfileIcon from '../Components/ProfileIcon';
import Footer from '../Components/Footer';

function Profile() {
  return (
    <>
      <header>
        <Header />
        <ProfileIcon />
        <h1 data-testid="page-title">Profile</h1>
      </header>
      <Footer />
    </>
  );
}

Profile.propTypes = {
  props: PropTypes.element,
}.insRequired;

export default Profile;
