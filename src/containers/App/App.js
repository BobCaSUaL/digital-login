import React, { useCallback, useReducer } from 'react';
import { useHistory } from 'react-router-dom';
import AppRouter from '../AppRouter';

import { AppContext, reducer, initialState, actionTypes } from './AppFlux';
import { saga } from './AppSaga';
import './index.css';
import './style.css';

export const App = () => {
  const history = useHistory();
  const [appState, dispatch] = useReducer(reducer, initialState);

  const appDispatch = useCallback((action) => {
    console.debug(`>> action dispatched: ${action.type}`, action);
    dispatch(action);
    setImmediate(() => saga.addAction(action, appDispatch));
    if (action.type === actionTypes.$REDIRECT_TO) {
      history.replace(action.payload);
    }
  }, [dispatch, history]);

  return (
    <AppContext.Provider value={{ appState, appDispatch }}>
      <div className="app">
        <AppRouter />
      </div>
    </AppContext.Provider>
  );
}
