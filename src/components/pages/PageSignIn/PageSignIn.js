import React from 'react';

import Logo from '../../commons/Logo';

import SignInForm from './SignInForm';

import './PageSignIn.css';

function PageSignIn() {
  return (
    <div className="page-signin">
      <Logo />
      <SignInForm />
    </div>
  );
}

export default PageSignIn;
