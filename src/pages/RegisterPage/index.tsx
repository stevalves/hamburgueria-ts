import { Form } from "../../components/Form";
import { Input } from "../../components/Input";
import { LogAndRegHeader } from "../../components/LogAndRegHeader";
import { StRegisterPage } from "./styles";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContexts";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";

export function RegisterPage() {
  const { UserRegister } = useContext(UserContext);
  
  const { register, handleSubmit } = useForm({});

  async function submit(data: any) {
    const {name,email,password} = data
    let newData = {
      name: name,
      email: email,
      password: password
    }
    await UserRegister(newData)
  }

  return (
    <StRegisterPage>
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
      <Form title="Register" goBack={true} goLogin={handleSubmit(submit)}>
        <Input
          id="name"
          label="Nome"
          placeholder="..."
          type="text"
          {...register("name")}
        />
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
        <Input
          id="rePassword"
          label="Confirmar senha"
          placeholder="..."
          type="password"
          {...register("rePassword")}
        />
        <button className="primaryButton" type="submit">Cadastrar</button>
      </Form>
    </StRegisterPage>
  );
}
