import React from 'react';
import { Link } from 'react-router-dom';
import profileIcon from '../images/profileIcon.svg';
// import PropTypes from 'prop-types';

function ProfileIcon() {
  return (
    <Link to="/profile">
      <img data-testid="profile-top-btn" src={ profileIcon } alt="Profile Icon" />
    </Link>

  );
}

/* ProfileIcon.propTypes = {

}; */

export default ProfileIcon;
