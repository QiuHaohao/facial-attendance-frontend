import PropTypes from 'prop-types';
import React, { useMemo } from 'react';

import { withRouter, Switch } from 'react-router-dom';

import { useSession } from '../../../hooks/sessionHook';

import ConditionalRedirectRoute from '../../commons/ConditionalRedirectRoute';

import PageSessionNew from './PageSessionNew';
import PageSessionOngoing from './PageSessionOngoing';

function PageSession(props) {
  const session = useSession();
  return useMemo(
    () => (
      <React.Fragment>
        <Switch>
          <ConditionalRedirectRoute
            path={`${props.match.path}/new`}
            when={session.isOnGoing}
            to={`${props.match.path}/ongoing`}
            component={PageSessionNew}
          />
          <ConditionalRedirectRoute
            path={`${props.match.path}/ongoing`}
            when={!session.isOnGoing}
            to={`${props.match.path}/new`}
            component={PageSessionOngoing}
          />
          <ConditionalRedirectRoute
            exect
            path={`${props.match.path}/`}
            when={session.isOnGoing}
            to={`${props.match.path}/ongoing`}
            component={PageSessionNew}
          />
        </Switch>
      </React.Fragment>
    ),
    [session.isOnGoing, props.match.path]
  );
}

PageSession.propTypes = {
  match: PropTypes.shape({
    path: PropTypes.string
  })
};

export default withRouter(PageSession);
