import { ContainerForm } from "./styles";

function Form() {
  return (
    <ContainerForm>
      <input placeholder="Seu e-mail" type="email" required />
      <input placeholder="Sua senha" type="password" required />
      <button type="submit" value="Submit">
        Entrar
      </button>
    </ContainerForm>
  );
}

export default Form;
