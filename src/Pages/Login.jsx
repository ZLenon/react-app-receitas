import React, { useState } from 'react';
import PropTypes from 'prop-types';

function Login(props) {
  const [valueEmail, setEmail] = useState({ email: '' });
  const [valuePassword, setPassword] = useState('');

  const handleEmailInput = (e) => {
    setEmail({
      ...valueEmail,
      email: e.target.value,
    });
  };

  const verifyInputs = () => {
    const number = 6;
    const checkRegex = /^([a-zA-Z0-9_\-.]+)@([a-zA-Z0-9_\-.]+)\.([a-zA-Z]{2,5})$/i;
    const checkEmail = checkRegex.test(valueEmail.email);
    const correctPasswordValue = valuePassword.length;
    const finalResults = correctPasswordValue > number;

    return finalResults && checkEmail;
  };

  const handleUserInformation = () => {
    const userStringfy = JSON.stringify(valueEmail);
    localStorage.setItem('user', userStringfy);

    const { history } = props;

    history.push('/meals');
  };

  return (
    <div>
      <input
        type="email"
        name="email"
        data-testid="email-input"
        onChange={ handleEmailInput }
      />
      <input
        type="password"
        data-testid="password-input"
        onChange={ (e) => setPassword(e.target.value) }
      />
      <button
        type="submit"
        data-testid="login-submit-btn"
        disabled={ !verifyInputs() }
        onClick={ handleUserInformation }
      >
        Enter
      </button>
    </div>
  );
}

Login.propTypes = {
  history: PropTypes.func.isRequired,
};

export default Login;
