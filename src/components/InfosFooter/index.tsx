import {
  FaFacebookF,
  FaYoutube,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";

import Altatech from "../../assets/Altatech_logo_white.svg";
import AltatechIcon from "../../assets/Altatech_icon_white.svg";

import { Container } from "./styles";
import { AiOutlineArrowRight } from "react-icons/ai";
import ModalFooter from "../ModalFooter";

function InfosFooter() {
  const handleClick = (url: string) => {
    window.open(url);
  };

  return (
    <Container>
      <section className="context">
        <div className="infos">
          <span className="title">Fique por dentro do que acontece aqui</span>
          <div>
            <span>Receba nossa newsletter</span>
            <div className="newsletter">
              <input
                type="input"
                required
                className="input"
                placeholder="Seu e-mail"
              />
              <button>
                <AiOutlineArrowRight size={20} />
              </button>
            </div>
          </div>
        </div>
        <div className="img">
          <img src={Altatech} alt="Altatech" />
        </div>
      </section>
      <section className="useful">
        <div className="image">
          <img src={AltatechIcon} alt="Altatech" />
        </div>

        <div className="all">
          <div className="left">
            <span className="secutiry">
              A segurança que sua empresa precisa e a confiança que você busca!
            </span>
            <span className="email">comercial@altatech.com.br</span>
          </div>
          <div className="center-left">
            <a href="/about">Sobre</a>
            <a href="/contact">Contato</a>
            <a href="/">LGPD</a>
            <ModalFooter />
          </div>
          <div className="center-right">
            <div className="dropdown">
              <div className="dropbtn">Políticas</div>
              <div className="content">
                <a href="/" className="select">
                  De Cancelamento
                </a>
                <a href="/" className="select">
                  De Cookies
                </a>
                <a href="/" className="select">
                  De Privacidade
                </a>
                <a href="/" className="select">
                  Comercial
                </a>
                <a href="/" className="select">
                  De Garantia
                </a>
              </div>
            </div>
            <a href="/">Perguntas frequentes</a>
            <a href="/">Termos de uso e adesão</a>
          </div>
          <div className="right">
            <div className="address">
              <span>Segunda à sexta-feira</span>
              <span>08:00 - 18:00</span>
              <span>Av. Juscelino Kubitscheck, 1905</span>
              <span>86010-510 - Londrina, PR</span>
            </div>
            <div className="social">
              <button
                onClick={() =>
                  handleClick("https://www.instagram.com/altatech.solucoes/")
                }
              >
                <FaInstagram size={30} />
              </button>
              <button
                onClick={() =>
                  handleClick("https://www.facebook.com/comercialaltatech/")
                }
              >
                <FaFacebookF size={30} />
              </button>
              <button
                onClick={() =>
                  handleClick(
                    "https://www.youtube.com/channel/UCiynHM_ky_aXo8bp5DTKtUw"
                  )
                }
              >
                <FaYoutube size={30} />
              </button>

              <button
                onClick={() =>
                  handleClick(
                    "https://www.linkedin.com/company/altatech-solucoes/"
                  )
                }
              >
                <FaLinkedin size={30} />
              </button>
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
}

export default InfosFooter;
