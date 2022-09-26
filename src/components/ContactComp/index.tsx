import FormContact from "../FormContact";
import { Container } from "./styles";

function ContactComp() {
  const email = "mailto:comercial@altatech.com.br";
  const emailRH = "mailto:comercial@altatech.com.br";
  return (
    <Container>
      <FormContact />
      <div className="oters">
        <div>
          <span>
            Caso prefira, envie seu contato para
            <a href={email}>comercial@altatech.com.br</a>
          </span>
          <span>
            Se interessou pela Altatech e deseja trabalhar conosco? Envie seu
            currículo para
            <a href={emailRH}>rh@altatech.com.br</a>
          </span>
          <span>Será uma honra receber seu contato!</span>
        </div>
      </div>
    </Container>
  );
}

export default ContactComp;
