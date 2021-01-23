import React, { useContext, useCallback } from 'react';

import LoginForm from '../../components/LoginForm';

import { AppContext, appActionTypes } from '../App';


export const Login = (props) => {
  const { appDispatch } = useContext(AppContext);
  const handleLoginRequested = useCallback(
    (event, credentials) => {
      appDispatch({
        type: appActionTypes.LOGIN,
        payload: credentials,
        meta: { redirectTo: '/' },
      })
    },
    [appDispatch],
  );
  return (
    <LoginForm onLoginRequested={handleLoginRequested} />
  )
}