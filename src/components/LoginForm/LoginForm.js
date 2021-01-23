import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import { StyledLoginForm } from './styled';

export const defaultInitialState = {
  username: '',
  password: '',
};

export const LoginForm = (props) => {
  const { initialState, onLoginRequested } = props;
  const [state, setState] = useState(initialState);

  const handleUsernameChange = useCallback(
    ({ target }) => setState((state) => ({ ...state, username: target.value })),
    [setState],
  );
  const handlePasswordChange = useCallback(
    ({ target }) => setState((state) => ({ ...state, password: target.value })),
    [setState],
  );
  /*
   * Note: useCallback not used as the callback should be evaluated
   * each time the state changes, that means mostly every render.
   */
  const handelFormSubmit = (event) => {
    onLoginRequested(event, state);
    setState(initialState);
  };

  return (
    <StyledLoginForm
      id="login-form"
      noValidate
      autoComplete="off"
      onSubmit={handelFormSubmit}
    >
      <div className="form-fields">
        <TextField
          id="login-form--input-username"
          dataTestid="input-username"
          label="Username"
          autoComplete="username"
          variant="outlined"
          required
          value={state.username}
          onChange={handleUsernameChange}
        />
        <TextField
          id="login-form--input-password"
          dataTestid="input-password"
          label="Password"
          type="password"
          autoComplete="current-password"
          variant="outlined"
          required
          value={state.password}
          onChange={handlePasswordChange}
        />
      </div>
      <Button
        id="login-form--button-login"
        type="submi"
        variant="outlined"
        color="primary"
      >
        Login
      </Button>
    </StyledLoginForm>
  );
}

LoginForm.propTypes = {
  initialState: PropTypes.shape({
    username: PropTypes.string,
    password: PropTypes.string,
  }),
  onLoginRequested: PropTypes.func.isRequired,
}

LoginForm.defaultProps = {
  initialState: defaultInitialState,
}
