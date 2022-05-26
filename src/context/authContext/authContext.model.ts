import { LoginRequest } from '../../models/login.model';
import { RegisterRequest } from '../../models/register.model';
import { User } from '../../models/user.model';

/**
 * Keys for the async storage
 */
export enum AuthStorageData {
  TOKEN = 'TOKEN',
}

/**
 * Types pf status in our auth process
 */
type AuthContextStatus = 'checking' | 'authenticated' | 'unauthenticated';

/**
 * The auth context model data that we can use to access the auth state
 */
export type AuthContextProps = {
  errorMessage: string;
  token: string | null;
  user: User | null;
  status: AuthContextStatus;
  isLoading: boolean;
  signUp: (data: RegisterRequest) => void;
  signIn: (data: LoginRequest) => void;
  logOut: () => void;
  removeError: () => void;
};

/**
 *  Types of actions that can be dispatched to the reducer
 */
export enum AuthActionType {
  SIGN_IN = 'SIGN_IN',
  SIGN_UP = 'SIGN_UP',
  ADD_ERROR = 'ADD_ERROR',
  REMOVE_ERROR = 'REMOVE_ERROR',
  NOT_AUTHENTICATED = 'NOT_AUTHENTICATED',
  LOG_OUT = 'LOG_OUT',
}

/**
 * State returned on our auth reducer
 */
export interface AuthState {
  status: AuthContextStatus;
  token: string | null;
  errorMessage: string;
  user: User | null;
}
