import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Header from '../../components/Header';
import NotFound from '../NotFound';

export const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Header} />
        <Route component={NotFound}  />
      </Switch>
    </Router>
  )
}
