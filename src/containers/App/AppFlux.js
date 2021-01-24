import React from 'react';

export const AppContext = React.createContext();

export const initialState = {
  isAuthenticated: false,
  user: null,
  token: null,
};

export const actionTypes = {
  $REDIRECT_TO: '$REDIRECT_TO', // special action to request routing redirect
  LOGIN_REQUESTED: '/digital/actions/LOGIN_REQUESTED',
  LOGIN_SUCCEEDED: '/digital/actions/LOGIN_SUCCEEDED',
  LOGIN_FAILED: '/digital/actions/LOGIN_FAILED',
  LOGOUT: '/digital/actions/LOGOUT',
};

export const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.LOGIN_SUCCEEDED:
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload.user,
        token: action.payload.token
      };
    case actionTypes.LOGOUT:
      localStorage.clear();
      return initialState;
    default:
      return state;
  }
};
