import { createContext } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { api } from "../../api/request";
import {
  iUserLoginData,
  iUserRegisterData,
  iUserProviderProps,
  iUserResponse,
} from "./interfaces";

export const UserContext = createContext({} as iUserChanges);

interface iUserChanges {
  UserLogin: any;
  UserRegister: any;
}

export function UserProvider({ children }: iUserProviderProps) {
  const navigate = useNavigate();

  async function UserLogin(data: iUserLoginData) {
    try {
      const response = await api.post<iUserResponse>("login", data);
      if (response.statusText === "OK") {
        toast.success("Login feito com sucesso!");
        localStorage.setItem("@TOKEN", response.data.accessToken);
        navigate("/home");
      }
    } catch (error) {
      toast.error("Algo deu errado!");
    }
  }

  async function UserRegister(data: iUserRegisterData) {
    try {
      const response = await api.post<iUserResponse>("users", data);
      if (response.statusText === "Created") {
        toast.success(
          "Registro feito com sucesso! redirecionando a página de login."
        );
        setTimeout(() => {
          navigate("/");
        }, 3000);
      }
    } catch (error) {
      toast.error("Algo deu errado!");
    }
  }
  return (
    <UserContext.Provider value={{ UserLogin, UserRegister }}>
      {children}
    </UserContext.Provider>
  );
}
