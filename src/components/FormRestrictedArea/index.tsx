import Form from "./Form";
import { Container } from "./styles";
import Altatech from "../../assets/Altatech_logo.svg";

function FormRestrictedArea() {
  return (
    <Container>
      <img src={Altatech} alt="Altatech" />
      <Form />
      <section>
        <button>Esqueci minha senha</button>
        <span>
          Não possui cadastro? <a href="/">Crie sua conta!</a>
        </span>
      </section>
    </Container>
  );
}

export default FormRestrictedArea;
