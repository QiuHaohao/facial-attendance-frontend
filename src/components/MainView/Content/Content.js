import PropTypes from 'prop-types';
import React, { useEffect, useState, useMemo } from 'react';
import { withRouter, Route } from 'react-router-dom';
import { message } from 'antd';

import { useUser } from '../../../hooks/userHook';
import { useSession } from '../../../hooks/sessionHook';

import ConditionalRedirectRoute from '../../commons/ConditionalRedirectRoute';
import PageSession from '../../pages/PageSession';
import PageLabs from '../../pages/PageLabs';
import PageSignIn from '../../pages/PageSignIn';

function Content(props) {
  const user = useUser();
  const session = useSession();

  const [prevPathname, setPrevPathname] = useState(null);

  useEffect(() => {
    const currentPathname = props.location.pathname;
    const handlePathnameChange = (prev, cur) => {
      // from /session/ongoing to anywhere else, and session is going on
      if (prev === '/session/ongoing' && session.isOnGoing) {
        message.destroy();
        message.warning(
          'Recording paused. \n Go back to session page to resume'
        );
      }
      // from anywhere else to /session ,  and session is going on
      if (
        cur.startsWith('/session') &&
        prev !== null &&
        !prev.startsWith('/session') &&
        session.isOnGoing
      ) {
        message.destroy();
        message.success('Recording resumed.');
      }
    };
    if (prevPathname !== currentPathname) {
      handlePathnameChange(prevPathname, currentPathname);
      setPrevPathname(currentPathname);
    }
  }, [props.location.pathname, prevPathname, session.isOnGoing]);

  const renderContent = () => (
    <React.Fragment>
      <Route path="/session" component={PageSession} />
      <Route path="/labs" component={PageLabs} />
      <Route exact path="/" component={PageSession} />
    </React.Fragment>
  );
  return useMemo(
    () => (
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
    ),
    [user.isSignedIn]
  );
}

Content.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string
  })
};

export default withRouter(Content);
