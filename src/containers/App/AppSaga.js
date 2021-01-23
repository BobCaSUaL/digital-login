import { actionTypes } from './AppFlux';

export const saga = {
  addAction(action, dispatch) {
    switch (action.type) {
      case actionTypes.LOGIN:
        alert('login');
        break;
    }
  }
};