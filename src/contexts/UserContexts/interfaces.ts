export interface iUserProviderProps {
  children: React.ReactNode;
}

export interface iUserResponse {
  accessToken: string;
  user: {
    name: string;
    email: string;
    id: number;
  };
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
