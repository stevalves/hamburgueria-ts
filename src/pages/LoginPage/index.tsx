import { useContext } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { Form } from "../../components/Form";
import { Input } from "../../components/Input";
import { LogAndRegHeader } from "../../components/LogAndRegHeader";
import { UserContext } from "../../contexts/UserContexts";
import { StLoginPage } from "./styles";
import "react-toastify/dist/ReactToastify.css";
import { yupResolver } from "@hookform/resolvers/yup";
import loginSchema from "./loginSchema";
import { StErrorMessage } from "../../styles/ErrorMessage";

export function LoginPage() {
  const { UserLogin, AutoLogin } = useContext(UserContext);
  const navigate = useNavigate()
  async function auth() {
    const is = await AutoLogin()
    if(is) {
      navigate("/home")
    }
  }
  auth()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
    mode: "onChange",
  });

  interface iLoginData {
    email: string;
    password: string;
  }

  const submit: SubmitHandler<any> = async (data: iLoginData) => {
    await UserLogin(data);
  };

  return (
    <StLoginPage>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <LogAndRegHeader />
      <Form title="Login" goLogin={handleSubmit(submit)}>
        <Input
          id="email"
          label="Email"
          placeholder="..."
          type="email"
          {...register("email")}
        />
        <Input
          id="password"
          label="Senha"
          placeholder="..."
          type="password"
          {...register("password")}
        />
        {errors.password && <StErrorMessage>Insira uma senha</StErrorMessage>}
        <button className="primaryButton" type="submit">
          Logar
        </button>
        <p>Crie sua conta para saborear muitas delícias e matar sua fome!</p>
        <Link to="register" className="greyButton">
          Cadastrar
        </Link>
      </Form>
    </StLoginPage>
  );
}
