import React from 'react';
import { Route } from 'react-router-dom';

import { useUser } from '../../../hooks/userHook';

import ConditionalRedirectRoute from '../../commons/ConditionalRedirectRoute';
import PageSession from '../../pages/PageSession';
import PageLabs from '../../pages/PageLabs';
import PageSignIn from '../../pages/PageSignIn';

function Content() {
  const user = useUser();

  const renderContent = () => (
    <React.Fragment>
      <Route path="/session" component={PageSession} />
      <Route path="/labs" component={PageLabs} />
      <Route exact path="/" component={PageSession} />
    </React.Fragment>
  );
  return (
    <div className="content">
      <ConditionalRedirectRoute
        exact
        path="/signin"
        when={user.isSignedIn}
        to="/session"
        component={PageSignIn}
      />
      <ConditionalRedirectRoute
        path="/"
        when={!user.isSignedIn}
        to="/signin"
        component={renderContent}
      />
    </div>
  );
}

export default Content;
