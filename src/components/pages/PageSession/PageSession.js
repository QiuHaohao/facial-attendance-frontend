import PropTypes from 'prop-types';
import React from 'react';

import { withRouter, Route, Switch } from 'react-router-dom';

import PageSessionNew from './PageSessionNew';
import PageSessionOngoing from './PageSessionOngoing';

function PageSession(props) {
  return (
    <React.Fragment>
      <Switch>
        <Route path={`${props.match.path}/new`} component={PageSessionNew} />
        <Route
          path={`${props.match.path}/ongoing`}
          component={PageSessionOngoing}
        />
        <Route exect path={`${props.match.path}/`} component={PageSessionNew} />
      </Switch>
    </React.Fragment>
  );
}

PageSession.propTypes = {
  match: PropTypes.shape({
    path: PropTypes.string
  })
};

export default withRouter(PageSession);
