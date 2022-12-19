import { Form } from "../../components/Form";
import { Input } from "../../components/Input";
import { LogAndRegHeader } from "../../components/LogAndRegHeader";
import { StRegisterPage } from "./styles";
import { useForm, SubmitHandler } from "react-hook-form";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContexts";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { yupResolver } from "@hookform/resolvers/yup";
import registerSchema from "./registerSchema";
import { StErrorMessage } from "../../styles/ErrorMessage";

interface iRegisterData {
  name: string,
  email: string,
  password: string,
  rePassword: string,
}

export function RegisterPage() {
  const { UserRegister } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iRegisterData>({
    resolver: yupResolver(registerSchema),
    mode: "onChange",
  });

  const submit: SubmitHandler<iRegisterData> = async (data: iRegisterData) => {
    const { name, email, password } = data;
    let newData = {
      name: name,
      email: email,
      password: password,
    };
    await UserRegister(newData);
  }

  return (
    <StRegisterPage>
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
      <Form title="Register" goBack={true} goLogin={handleSubmit(submit)}>
        <Input
          id="name"
          label="Nome"
          placeholder="..."
          type="text"
          {...register("name")}
        />
        {errors.name && <StErrorMessage>{errors.name.message}</StErrorMessage>}
        <Input
          id="email"
          label="Email"
          placeholder="..."
          type="email"
          {...register("email")}
        />
        {errors.email && <StErrorMessage>{errors.email.message}</StErrorMessage>}
        <Input
          id="password"
          label="Senha"
          placeholder="..."
          type="password"
          {...register("password")}
        />
        {errors.password && <StErrorMessage>{errors.password.message}</StErrorMessage>}
        <Input
          id="rePassword"
          label="Confirmar senha"
          placeholder="..."
          type="password"
          {...register("rePassword")}
        />
        {errors.rePassword && <StErrorMessage>{errors.rePassword.message}</StErrorMessage>}
        <button className="primaryButton" type="submit">
          Cadastrar
        </button>
      </Form>
    </StRegisterPage>
  );
}
