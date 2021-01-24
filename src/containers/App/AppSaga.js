import { actionTypes } from './AppFlux';

export const saga = {
  /**
   * Managed the login requested flow.
   * This saga method performs a request to retieve the current logging-in user.
   * 
   * If the login succeeded a LOGIN_SUCCEDED action is dispatched,
   * a LOGIN_FAILED action is dispatcher otherwise.
   * 
   * In addiction you can also provide an `action.meta.$onSuccess.redirectTo`
   * property if a redirect after login success is required.
   * The `action.meta.$onSuccess` is added as meta information of the SUCCEEDED
   * action and can be processed on separate flow.
   * 
   * @param {object} action the action from the reducer 
   * @param {function} dispatch the dispatch function for the current flow
   */
  async onLoginRequested(action, dispatch) {
    const { payload, meta = {} } = action;
    try {
      // compute the Bearer token
      const token = btoa(`${payload.username}:${payload.password}`);

      const headers = new Headers();
      headers.append('Authorization', `Bearer ${token}`);
      // @TODO: create a fetch API wrapper and move the host to a configuration
      // file or enviromnent variable (applied on build phase)
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

  /**
   * Managed the login failed flow
   * 
   * @param {object} action the action from the reducer 
   * @param {function} dispatch the dispatch function for the current flow
   */
  async onLoginFailed(action, dispatch) {
    alert('Login failed');
  },

  /**
   * Process the last added action.
   * In addiction if an `action.meta.redirectTo` property is provided
   * than a `$REDIRECT_TO` action will be dispatched.
   * 
   * @param {object} action the action from the reducer 
   * @param {function} dispatch the dispatch function for the current flow
   */
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

  /**
   * Add an action to this saga.
   * 
   * @param {object} action the action from the reducer 
   * @param {function} dispatch the dispatch function for the current flow
   */
  addAction(action, dispatch) {
    setImmediate(() => this.processAction(action, dispatch));
  }
};