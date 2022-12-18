export interface iUserProviderProps {
  children: React.ReactNode;
}

export interface iUserResponse {
  accessToken: string;
  user: iUserLoginData;
}

export interface iUserLoginData {
  email: string;
  password: string;
}

export interface iUserRegisterData {
  name: string;
  email: string;
  password: string;
}
