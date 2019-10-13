import PropTypes from 'prop-types';

import React from 'react';
import { Route, Redirect } from 'react-router-dom';

function PrivateRoute({ component: Component, isSignedIn, ...rest }) {
  return (
    <Route
      {...rest}
      render={props =>
        isSignedIn === true ? (
          <Component {...props} />
        ) : (
          <Redirect to="/signin" />
        )
      }
    />
  );
}

PrivateRoute.propTypes = {
  component: PropTypes.func.isRequired,
  isSignedIn: PropTypes.bool.isRequired,
  location: PropTypes.object
};

export default PrivateRoute;
