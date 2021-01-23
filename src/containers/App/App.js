import React, { useReducer } from 'react';
import AppRouter from '../AppRouter';

import { AppContext, reducer, initialState } from './AppFlux';
import './index.css';
import './style.css';

export const App = () => {
  const [appState, appDispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{ appState, appDispatch }}>
      <div className="app">
        <AppRouter />
      </div>
    </AppContext.Provider>
  );
}
