import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { Form } from "../../components/Form";
import { Input } from "../../components/Input";
import { LogAndRegHeader } from "../../components/LogAndRegHeader";
import { UserContext } from "../../contexts/UserContexts";
import { StLoginPage } from "./styles";
import 'react-toastify/dist/ReactToastify.css';

export function LoginPage() {
  const { UserLogin } = useContext(UserContext);

  const { register, handleSubmit } = useForm({});

  async function submit(data: {}) {
    await UserLogin(data);
  }

  return (
    <StLoginPage>
      <ToastContainer
        position="top-right"
        autoClose={5000}
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
        <button className="primaryButton" type="submit">Logar</button>
        <p>Crie sua conta para saborear muitas delícias e matar sua fome!</p>
        <Link to="register" className="greyButton">
          Cadastrar
        </Link>
      </Form>
    </StLoginPage>
  );
}
