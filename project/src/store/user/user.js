import { ActionType } from '../action';
import { AuthorizationStatus } from '../../const';

const initialState = {
  authorizationStatus: AuthorizationStatus.UNKNOWN,
  authInfo: {},
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.REQUIRED_AUTHORIZATION :
      return {
        ...state,
        authorizationStatus: action.payload.authStatus,
        authInfo: action.payload.authInfo,
      };

    case ActionType.LOGOUT:
      return {
        ...state,
        authorizationStatus: AuthorizationStatus.NO_AUTH,
        authInfo: {},
      };

    default:
      return state;
  }
};

export { user };

