import React, { useContext } from 'react';
import Header from '../../components/Header';

import { AppContext } from '../App';

export const LandingPage = () => {
  const { appState } = useContext(AppContext);
  const { user = {} } = appState;

  return (
    <Header>
      <p>
        Welcome <b>{user.firstName}</b> <b>{user.lastName}</b>.
      </p>
    </Header>
  );
}
