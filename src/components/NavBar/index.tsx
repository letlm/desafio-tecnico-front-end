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

function NavBar() {
  const { setOpen } = useModal();
  const handleOpen = () => setOpen(true);

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

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
              <img src={AltatechLogo} alt="Altatech" />
              <button onClick={handleOpen}>
                <FaUserCircle size={36} />
              </button>
              <ModalRestrictedArea>
                <FormRestrictedArea />
              </ModalRestrictedArea>
              <button>
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
