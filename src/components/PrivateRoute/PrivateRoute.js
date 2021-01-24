import React from 'react';
import {
  Route,
  Redirect,
} from "react-router-dom";
import PropTypes from 'prop-types';

export const PrivateRoute = (props) => {
  const { component: Component, authed, ...rest } = props;

  return (
    <Route
      {...rest}
      render={(props) => authed === true
        ? <Component {...props} />
        : <Redirect to={{ pathname: '/login', state: { from: props.location }}} />}
    />
  )
}

PrivateRoute.propTypes = {
  ...(Route.propTypes || {}),
  authed: PropTypes.bool.isRequired,
}
