import InfosFooter from "../InfosFooter";
import { Container, Line } from "./styles";

function Footer() {
  return (
    <Container>
      <InfosFooter />
      <Line>
        <div>
          <span>Copyright © 2022 - </span>
          <span>Todos os Direitos Reservados</span>
        </div>
        <span>CNPJ: 05.365.132/0001-30</span>
      </Line>
    </Container>
  );
}

export default Footer;
