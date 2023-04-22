export type UserType = 'CUSTOMER' | 'TRAVEL_AGENT' | 'ADMIN';

export interface IUser {
  id?: number;
  email?: string;
  password?: string;
  name?: string;
  surname?: string;
  phone?: string;
  userType?: UserType;
}

export interface IUserCredentials {
  email: string;
  password: string;
}

export interface IUserRegisterCredentials extends IUserCredentials {
  name: string;
  userType: UserType;
}

export interface AuthResponse {
  user: IUser;
  refreshToken: string;
}
