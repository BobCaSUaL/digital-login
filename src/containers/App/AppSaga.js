import { actionTypes } from './AppFlux';

export const saga = {
  async onLoginRequested(action, dispatch) {
    const { payload, meta = {} } = action;
    try {
      // compute the Bearer token
      const token = btoa(`${payload.username}:${payload.password}`);

      const headers = new Headers();
      headers.append('Authorization', `Bearer ${token}`);
      const request = new Request('http://localhost:3003/login', {
        method: 'GET',
        headers: headers,
      });

      const response = await fetch(request);
      const user = await response.json();

      dispatch({
        type: actionTypes.LOGIN_SUCCEEDED,
        payload: {
          ...payload,
          user,
          token,
        },
        meta: meta.$onSuccess,
      });
    } catch (error) {
      dispatch({
        type: actionTypes.LOGIN_FAILED,
        payload: error,
        meta: meta.$onError,
        error: true,
      });
    }
  },

  async onLoginFailed(action, dispatch) {
    alert('Login failed');
  },

  async processAction(action, dispatch) {
    switch (action.type) {
      case actionTypes.LOGIN_REQUESTED:
        await this.onLoginRequested(action, dispatch);
        break;
      case actionTypes.LOGIN_FAILED:
        await this.onLoginFailed(action, dispatch);
        break;
    }
    if (action.meta && action.meta.redirectTo) {
      dispatch({
        type: actionTypes.$REDIRECT_TO,
        payload: action.meta.redirectTo,
      });
    }
  },

  addAction(action, dispatch) {
    setImmediate(() => this.processAction(action, dispatch));
  }
};