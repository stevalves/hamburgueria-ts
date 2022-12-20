import { createContext, useState } from "react";
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
  AutoLogin:
    | {
        email: string;
        password: string;
        name: string;
        id: number;
      }
    | any;
  UserLogin: iUserLoginData | any;
  UserRegister: iUserRegisterData | any;
  user:
    | {
        email: string;
        name: string;
        id: number;
      }
    | {};
  logout: () => void;
}

interface iUser {
  email: string;
  name: string;
  id: number;
}

export function UserProvider({ children }: iUserProviderProps) {
  const [user, setUser] = useState({} as iUser | any);
  const navigate = useNavigate();

  async function UserLogin(data: iUserLoginData) {
    try {
      const response = await api.post<iUserResponse>("login", data);
      if (response.statusText === "OK") {
        toast.success("Login feito com sucesso!");
        localStorage.setItem("@TOKEN", response.data.accessToken);
        localStorage.setItem("@USERID", response.data.user.id + "");
        setUser(response.data.user);
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

  async function AutoLogin() {
    const token = localStorage.getItem("@TOKEN");
    const userid = localStorage.getItem("@USERID");
    if (token && userid) {
      const response = await api.get(`users/${userid}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (response.statusText === "OK") {
        setUser(response.data);
        return true;
      } else {
        return false;
      }
    }
  }

  function logout() {
    localStorage.clear();
    setUser(null);
    navigate("/");
  }

  return (
    <UserContext.Provider
      value={{ UserLogin, UserRegister, user, AutoLogin, logout }}
    >
      {children}
    </UserContext.Provider>
  );
}
