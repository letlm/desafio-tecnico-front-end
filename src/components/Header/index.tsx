import Nav from "./Nav";
import { Container } from "./styles";
import IconAltatech from "../../assets/Altatech_icon_white.svg";
import Search from "../Search";
import { FaShoppingBag, FaUserCircle } from "react-icons/fa";
import { useModal } from "../../context/ModalProvider";
import ModalRestrictedArea from "../ModalRestrictedArea";
import FormRestrictedArea from "../FormRestrictedArea";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";

function Header() {
  const { setOpen } = useModal();

  const handleOpen = () => setOpen(true);
  const history = useHistory();

  const handleHome = (path: string) => {
    return history.push(path);
  };

  const handleBag = () => {
    toast("🛒 Sua sacola está vazia. Solicite seu orçamento!", {
      className: "toastify-color-progress-error",
    });
  };

  return (
    <Container>
      <ul>
        <button onClick={() => handleHome("/")}>
          <img src={IconAltatech} alt="Altatech Icon" />
        </button>
        <div className="header">
          <Search />
          <Nav />
          <button onClick={handleBag}>
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
