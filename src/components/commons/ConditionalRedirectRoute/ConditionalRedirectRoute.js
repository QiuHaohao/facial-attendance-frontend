import PropTypes from 'prop-types';

import React from 'react';
import { Route, Redirect } from 'react-router-dom';

function ConditionalRedirectRoute({ component: Component, when, to, ...rest }) {
  return (
    <Route
      {...rest}
      render={props =>
        when === true ? <Redirect to={to} /> : <Component {...props} />
      }
    />
  );
}

ConditionalRedirectRoute.propTypes = {
  component: PropTypes.func.isRequired,
  when: PropTypes.bool.isRequired,
  to: PropTypes.string.isRequired
};

export default ConditionalRedirectRoute;
