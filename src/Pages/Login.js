import { useHistory } from 'react-router-dom';
import React, { useState } from 'react';

function Login() {
  const [valueEmail, setEmail] = useState({ email: '' });
  const [valuePassword, setPassword] = useState('');
  const history = useHistory();

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

    history.push('/meals');
  };

  return (
    <div>
      <h1>Login</h1>
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

export default Login;
