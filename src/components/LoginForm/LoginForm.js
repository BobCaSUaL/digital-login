import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import { StyledLoginForm } from './styled';

export const LoginForm = () => {
  return (
    <StyledLoginForm
      id="login-form"
      noValidate
      autoComplete="off"
    >
      <div className="form-fields">
        <TextField
          id="login-form--input-username"
          label="Username"
          autoComplete="username"
          variant="outlined"
          required
        />
        <TextField
          id="login-form--input-password"
          label="Password"
          type="password"
          autoComplete="current-password"
          variant="outlined"
          required
        />
      </div>
      <Button
        id="login-form--button-login"
        variant="outlined"
        color="primary"
      >
        Login
      </Button>
    </StyledLoginForm>
  );
}
