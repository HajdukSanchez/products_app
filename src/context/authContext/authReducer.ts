import { User } from '../../models/user.model';
import { AuthActionType, AuthState } from '../../models/authContext.model';

type AuthAction =
  | { type: AuthActionType.SIGN_IN; payload: { token: string; user: User } }
  | { type: AuthActionType.SIGN_UP; payload: { token: string; user: User } }
  | { type: AuthActionType.ADD_ERROR; payload: string }
  | { type: AuthActionType.NOT_AUTHENTICATED }
  | { type: AuthActionType.REMOVE_ERROR }
  | { type: AuthActionType.LOG_OUT };

export const authReducer = (state: AuthState, action: AuthAction): AuthState => {
  switch (action.type) {
    case AuthActionType.ADD_ERROR:
      return { ...state, user: null, status: 'unauthenticated', token: null, errorMessage: action.payload };
    case AuthActionType.REMOVE_ERROR:
      return { ...state, errorMessage: '' };
    case AuthActionType.SIGN_UP:
    case AuthActionType.SIGN_IN:
      return { ...state, errorMessage: '', status: 'authenticated', token: action.payload.token, user: action.payload.user };
    case AuthActionType.LOG_OUT:
    case AuthActionType.NOT_AUTHENTICATED:
      return { ...state, status: 'unauthenticated', token: null, user: null };
    default:
      return state;
  }
};
