import React from 'react';
import {
  Switch,
  Route,
} from "react-router-dom";

import PrivateRoute from '../../components/PrivateRoute';
import Header from '../../components/Header';

import { AppContext } from '../App';
import Login from '../Login';
import NotFound from '../NotFound';

export const AppRouter = () => {
  const { appState } = React.useContext(AppContext);

  return (
    <Switch>
      <PrivateRoute exact path="/" component={Header} authed={ appState.isAuthenticated }/>
      <Route exact path="/login" component={Login} />
      <Route component={NotFound}  />
    </Switch>
  )
}
