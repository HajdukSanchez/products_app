import { User } from './user.model';

export interface LoginResponse {
  usuario: User;
  token: string;
}

export interface LoginRequest {
  email: string;
  password: string;
}
