import React from 'react';
import TextField from '@material-ui/core/TextField';

import { StyledLoginForm } from './styled';

export const LoginForm = () => {
  return (
    <StyledLoginForm noValidate autoComplete="off">
      <TextField
            required
            id="outlined-required"
            label="Required"
            defaultValue="Hello World"
            variant="outlined"
          />
      <TextField
        id="outlined-password-input"
        label="Password"
        type="password"
        autoComplete="current-password"
        variant="outlined"
      />
    </StyledLoginForm>
  );
}
