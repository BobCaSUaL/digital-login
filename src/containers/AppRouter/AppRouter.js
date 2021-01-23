import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import PrivateRoute from '../../components/PrivateRoute';
import Header from '../../components/Header';
import LoginForm from '../../components/LoginForm';

import { AppContext } from '../App';
import NotFound from '../NotFound';

export const AppRouter = () => {
  const { appState } = React.useContext(AppContext);

  return (
    <Router>
      <Switch>
        <PrivateRoute exact path="/" component={Header} authed={ appState.isAuthenticated }/>
        <Route exact path="/login" component={LoginForm} />
        <Route component={NotFound}  />
      </Switch>
    </Router>
  )
}
