import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import { useUser } from '../../../hooks/userHook';

import PrivateRoute from '../../commons/PrivateRoute';
import PageSession from '../../pages/PageSession';
import PageLabs from '../../pages/PageLabs';
import PageSignIn from '../../pages/PageSignIn';

function Content() {
  const user = useUser();

  const renderRedirectToPageSignIn = () =>
    !user.isSignedIn ? <Redirect to="/signin" /> : null;

  const renderContent = () => (
    <React.Fragment>
      {renderRedirectToPageSignIn()}
      <Route path="/session" component={PageSession} />
      <Route path="/labs" component={PageLabs} />
      <Route exact path="/" component={PageSession} />
    </React.Fragment>
  );
  return (
    <div className="content">
      <Route exact path="/signin" component={PageSignIn} />
      <PrivateRoute
        path="/"
        isSignedIn={user.isSignedIn}
        component={renderContent}
      />
    </div>
  );
}

export default Content;
