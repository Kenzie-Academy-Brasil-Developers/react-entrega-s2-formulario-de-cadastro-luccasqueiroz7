import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { TextField } from "@mui/material";
import "./styles.css";
import { useHistory } from "react-router-dom";

function Form() {
  const history = useHistory();

  const formSchema = yup.object().shape({
    name: yup
      .string()
      .required("Nome obrigatório")
      .matches(
        "[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$",
        "Permitido apenas letras"
      ),
    email: yup.string().required("E-mail obrigatório").email("E-mail inválido"),
    password: yup
      .string()
      .required("Senha obrigatória")
      .matches(
        "^(?=.*[A-Z])(?=.*[!#@$%&])(?=.*[0-9])(?=.*[a-z]).{6,15}$",
        "Senha fraca"
      ),
    confirmPassword: yup
      .string()
      .required("Confirmação de senha obrigatória")
      .oneOf([yup.ref("password")], "Senhas não coincidem"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const onSubmitFunction = (data) => {
    history.push(`/sucess-form/${data.name}`);
  };

  return (
    <form className="form" onSubmit={handleSubmit(onSubmitFunction)}>
      <TextField
        id="nameForm"
        className="formGeneral"
        label="Nome"
        variant="standard"
        error={errors.name?.message ? true : false}
        helperText={errors.name?.message ? errors.name.message : false}
        {...register("name")}
      />

      <TextField
        id="emailForm"
        className="formGeneral"
        label="E-mail"
        variant="standard"
        error={errors.email?.message ? true : false}
        helperText={errors.email?.message ? errors.email.message : false}
        {...register("email")}
      />

      <TextField
        id="passwordForm"
        className="formGeneral"
        type="password"
        label="Senha"
        variant="standard"
        error={errors.password?.message ? true : false}
        helperText={errors.password?.message ? errors.password.message : false}
        {...register("password")}
      />

      <TextField
        id="confirmPasswordForm"
        className="formGeneral"
        type="password"
        label="Confirma Senha"
        variant="standard"
        error={errors.confirmPassword?.message ? true : false}
        helperText={
          errors.confirmPassword?.message
            ? errors.confirmPassword.message
            : false
        }
        {...register("confirmPassword")}
      />

      <button type="submit">Cadastrar</button>
    </form>
  );
}

export default Form;
