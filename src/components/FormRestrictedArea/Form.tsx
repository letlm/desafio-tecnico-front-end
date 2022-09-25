import { toast } from "react-toastify";
import { ContainerForm } from "./styles";
import { useForm } from "react-hook-form";

function Form() {
  const { register, handleSubmit, setValue } = useForm();
  const handleError = (event: any) => {
    setTimeout(() => {
      toast("✖️ Ocorreu um erro, por favor tente novamente mais tarde!", {
        className: "toastify-color-progress-light",
      });

      setValue("email", "");
      setValue("password", "");
    }, 1000);
  };

  return (
    <ContainerForm onSubmit={handleSubmit(handleError)}>
      <input
        placeholder="Seu e-mail"
        type="email"
        required
        {...register("email")}
      />
      <input
        placeholder="Sua senha"
        type="password"
        required
        {...register("password")}
      />
      <button>Entrar</button>
    </ContainerForm>
  );
}

export default Form;
