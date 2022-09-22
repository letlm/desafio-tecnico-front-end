import { Container, ContextCenter, ContextLeft, ContextRight } from "./styles";
import { FaFacebookF, FaYoutube, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";
import Altatech from "../../assets/Altatech_logo_white.svg";

import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import { useState } from "react";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "80%",
  height: 500,
  bgcolor: "background.paper",
  border: "8px solid #E87E21",
  borderRadius: "16px",
  display: "flex",
  justifyContent: "center",
  p: 4,
  minWidth: 300,
};

function InfosFooter() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <Container>
      <ContextLeft>
        <section className="logo">
          <img src={Altatech} alt="Altatech" />
        </section>
        <section className="company">
          <h3>EMPRESA</h3>
          <Link to="/about">Sobre</Link>
          <Link to="/">Contato</Link>
          <Link to="/about">LGPD</Link>

          <button onClick={handleOpen}>Telefones</button>
          <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={open}
            onClose={handleClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
              timeout: 500,
            }}
          >
            <Fade in={open}>
              <Box sx={style}>
                <span>Telephones uteis</span>
              </Box>
            </Fade>
          </Modal>
        </section>
        <section className="useful">
          <h3>ÚTEIS</h3>
          <div className="dropdown">
            <div className="dropbtn">Políticas</div>
            <div className="dropdown-content">
              <Link to="/">De Cancelamento</Link>
              <Link to="/">De Cookies</Link>
              <Link to="/">De Privacidade</Link>
              <Link to="/">Comercial</Link>
              <Link to="/">De Garantia</Link>
            </div>
          </div>
          <Link to="/">Perguntas frequentes</Link>
          <Link to="/">Termos de Uso</Link>
          <Link to="/">Termo de Adesão Cloud</Link>
        </section>
      </ContextLeft>
      <ContextCenter>
        <span>De segunda a sexta-feira (08:00 às 18:00)</span>
        <span>Av. Juscelino Kubitscheck, 1905 - Centro</span>
        <span>86010-510 - Londrina, PR</span>
      </ContextCenter>
      <ContextRight>
        <button>
          <FaInstagram size={30} />
        </button>
        <button>
          <FaFacebookF size={30} />
        </button>
        <button>
          <FaYoutube size={30} />
        </button>
      </ContextRight>
    </Container>
  );
}

export default InfosFooter;
