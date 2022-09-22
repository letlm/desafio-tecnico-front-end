import Nav from "./Nav";
import { Container } from "./styles";
import IconAltatech from "../../assets/Altatech_icon_white.svg";
import Search from "../Search";
import { FaShoppingBag, FaUserCircle } from "react-icons/fa";
import { useModal } from "../../context/ModalProvider";
import ModalRestrictedArea from "../ModalRestrictedArea";
import FormRestrictedArea from "../FormRestrictedArea";

function Header() {
  const { setOpen } = useModal();

  const handleOpen = () => setOpen(true);

  return (
    <Container>
      <ul>
        <img src={IconAltatech} alt="Altatech Icon" />
        <div className="header">
          <Search />
          <Nav />
          <button>
            <FaShoppingBag size={30} />
          </button>
          <button onClick={handleOpen}>
            <FaUserCircle size={30} />
          </button>
          <ModalRestrictedArea>
            <FormRestrictedArea />
          </ModalRestrictedArea>
        </div>
      </ul>
    </Container>
  );
}

export default Header;
