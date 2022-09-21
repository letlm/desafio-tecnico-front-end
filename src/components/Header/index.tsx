import Nav from "./Nav";
import { Container } from "./styles";
import IconAltatech from "../../assets/Altatech_icon_white.svg";
import Search from "../Search";

function Header() {
  return (
    <Container>
      <ul>
        <img src={IconAltatech} alt="Altatech Icon" />
        <div className="header">
          <Search />
          <Nav title="Serviços" path="#services" />
          <Nav title="Produtos" path="#products" />
          <Nav title="Contato" path="#contact" />
        </div>
      </ul>
    </Container>
  );
}

export default Header;
