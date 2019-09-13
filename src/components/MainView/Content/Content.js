import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import { useUser } from '../../../hooks/userHook';
import PageHome from '../../pages/PageHome';
import PageLabs from '../../pages/PageLabs';
import PageSignIn from '../../pages/PageSignIn';

function Content() {
  const user = useUser();

  const renderRedirectToPageSignIn = () =>
    !user.isSignedIn ? <Redirect to="/signin" /> : null;

  return (
    <div className="content">
      {renderRedirectToPageSignIn()}
      <Route exact path="/home" component={PageHome} />
      <Route exact path="/labs" component={PageLabs} />
      <Route exact path="/signin" component={PageSignIn} />
      <Route exact path="/" component={() => <div>home</div>} />
    </div>
  );
}

export default Content;
