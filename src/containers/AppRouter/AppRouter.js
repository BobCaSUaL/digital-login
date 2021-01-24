import React from 'react';
import {
  Switch,
  Route,
} from "react-router-dom";

import PrivateRoute from '../../components/PrivateRoute';

import { AppContext } from '../App';
import LandingPage from '../LandingPage';
import Login from '../Login';
import NotFound from '../NotFound';

export const AppRouter = () => {
  const { appState } = React.useContext(AppContext);

  return (
    <Switch>
      <PrivateRoute exact path="/" component={LandingPage} authed={ appState.isAuthenticated }/>
      <Route exact path="/login" component={Login} />
      <Route component={NotFound}  />
    </Switch>
  )
}
