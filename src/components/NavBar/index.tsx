import { Drawer } from "@mui/material";
import { useState } from "react";
import { Box, Container } from "./styles";
import AltatechLogo from "../../assets/Altatech_logo_white.svg";

import Search from "../Search";
import Nav from "../Header/Nav";
import { CgMenu, CgClose } from "react-icons/cg";
import { FaUserCircle, FaShoppingBag } from "react-icons/fa";
import ModalRestrictedArea from "../ModalRestrictedArea";
import { useModal } from "../../context/ModalProvider";
import FormRestrictedArea from "../FormRestrictedArea";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";

function NavBar() {
  const { setOpen } = useModal();
  const handleOpen = () => setOpen(true);

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const history = useHistory();

  const handleHome = (path: string) => {
    return history.push(path);
  };

  const handleBag = () => {
    toast(" 🛒 Sua sacola está vazia. Solicite seu orçamento!", {
      className: "toastify-color-progress-error",
    });
  };

  return (
    <Container>
      <section>
        <button className="btnOpen" onClick={() => setIsDrawerOpen(true)}>
          <CgMenu size={40} className="icon" />
        </button>
        <Search />
      </section>
      <Drawer
        anchor="left"
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      >
        <Box>
          <nav>
            <ul>
              <button onClick={() => handleHome("/")}>
                <img src={AltatechLogo} alt="Altatech" />
              </button>
              <button onClick={handleOpen}>
                <FaUserCircle size={36} />
              </button>
              <ModalRestrictedArea>
                <FormRestrictedArea />
              </ModalRestrictedArea>
              <button onClick={handleBag}>
                <FaShoppingBag size={35} />
              </button>
              <Nav />

              <button onClick={() => setIsDrawerOpen(false)}>
                <CgClose size={30} />
              </button>
            </ul>
          </nav>
        </Box>
      </Drawer>
    </Container>
  );
}

export default NavBar;
