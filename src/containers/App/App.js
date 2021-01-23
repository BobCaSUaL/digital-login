import React, { useCallback, useReducer } from 'react';
import AppRouter from '../AppRouter';

import { AppContext, reducer, initialState } from './AppFlux';
import { saga } from './AppSaga';
import './index.css';
import './style.css';

export const App = () => {
  const [appState, dispatch] = useReducer(reducer, initialState);

  const appDispatch = useCallback((action) => {
    dispatch(action);
    setImmediate(() => saga.addAction(action, appDispatch));
  }, [dispatch]);

  return (
    <AppContext.Provider value={{ appState, appDispatch }}>
      <div className="app">
        <AppRouter />
      </div>
    </AppContext.Provider>
  );
}
