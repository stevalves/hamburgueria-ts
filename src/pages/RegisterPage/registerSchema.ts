import * as yup from "yup";

const registerSchema = yup.object().shape({
  name: yup
    .string()
    .required("Nome obrigatório.")
    .min(4, "Insira no mímimo 4 caracteres.")
    .max(18, "Insira no máximo 18 caracteres."),
  email: yup
    .string()
    .required("Email obrigatório.")
    .email("Insira um email válido."),
  password: yup
    .string()
    .required("Senha obrigatória.")
    .min(6, "Insira no mínimo 6 caracteres.")
    .matches(/(?=.*?[A-Z])/, "Insira uma letra maiúscula.")
    .matches(/(?=.*?[a-z])/, "Insira uma letra minuscula.")
    .matches(/(?=.*?[0-9])/, "Insira um número.")
    .matches(/(?=.?[#?!@$%^&-])/, "Insira um caracter especial."),
  rePassword: yup
    .string()
    .required("Confirme a senha.")
    .oneOf([yup.ref("password"), null], "As senhas não coincidem."),
});

export default registerSchema;
