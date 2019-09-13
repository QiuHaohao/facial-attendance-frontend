import React from 'react';
import { withRouter, Redirect } from 'react-router-dom';

import { useUser } from '../../../hooks/userHook';

import Logo from '../../commons/Logo';

import SignInForm from './SignInForm';

import './PageSignIn.css';

function PageSignIn() {
  const user = useUser();
  const renderRedirectToHome = () =>
    user.isSignedIn ? <Redirect to="/home" /> : null;
  return (
    <div className="page-signin">
      {renderRedirectToHome()}
      <Logo />
      <SignInForm />
    </div>
  );
}

export default withRouter(PageSignIn);
