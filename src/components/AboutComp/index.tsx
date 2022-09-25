import { Container, ContainerAbout, ContainerPrizes } from "./styles";
import { FaCheck } from "react-icons/fa";
import Altatech from "../../assets/Altatech_logo.svg";

function AboutComp() {
  return (
    <Container>
      <ContainerAbout>
        <div className="initial">
          <div>
            <img src={Altatech} alt="Altatech" />
          </div>
          <span>
            <FaCheck />
            Desde 2002 no mercado corporativo e com mais de 21.000 clientes
            atendidos em todo Brasil.
          </span>
          <span>
            <FaCheck />A ALTATECH é uma empresa com foco em projetos de
            tecnologia, segurança da informação, consultoria e revenda das
            principais marcas na área de tecnologia.
          </span>
        </div>
        <div className="finale">
          <div></div>
          <span>
            <FaCheck />
            Nosso principal motivo de existência é entregar a CONFIANÇA na
            utilização de recursos tecnológicos.
          </span>
          <span>
            <FaCheck />
            Nossos pilares são: segurança, contingência, colaboração e
            produtividade.
          </span>
        </div>
      </ContainerAbout>
      <ContainerPrizes>
        <div>
          <img
            src="https://i.imgur.com/kDlUxhS.png"
            alt="PC Partner Gold - Lenovo"
          />
          <span>
            Agora é GOLD no programa de parceiros. Estamos entre as melhores
            revendas do país!!!
          </span>
        </div>
        <div>
          <img
            src="https://i.imgur.com/P3jIKre.png"
            alt="Intel | Technology Provider Gold 2019"
          />
          <span>
            A Altatech, recebeu o prêmio Technology Provider Gold 2019.
            Reconhecimento pelo fornecimento de soluções na comercialização de
            sua linha de produtos.
          </span>
        </div>
      </ContainerPrizes>
    </Container>
  );
}

export default AboutComp;
