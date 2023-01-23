interface IMe {
  email: string;
  avatar: string;
}

export interface IAuthState {
  isAuthenticated: boolean;
  user: IMe | null;
}

export interface ILogin {
  email: string;
  password: string;
}

export interface ITokens {
  refreshToken: string;
  accessToken: string;
}
