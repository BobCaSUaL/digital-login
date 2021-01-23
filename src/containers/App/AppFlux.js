import React from 'react';

export const AppContext = React.createContext();

export const initialState = {
  isAuthenticated: false,
  user: null,
  token: null,
};

export const actionTypes = {
  LOGIN: '/digital/actions/LOGIN',
  LOGOUT: '/digital/actions/LOGOUT',
};

export const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.LOGIN:
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
