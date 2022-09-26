import Lottie from "react-lottie-player";
import { Container } from "./styles";
import business from "../../animations/business.json";
import { useHistory } from "react-router-dom";

function AboutHome() {
  const history = useHistory();

  const handleClick = (path: string) => {
    return history.push(path);
  };
  return (
    <Container>
      <section>
        <span className="initial">Há mais de 20 anos no mercado...</span>
        <div>
          <div className="infos">
            <span>Mais de 21.000 clientes em todo o Brasil</span>
            <span> Mais de 3 mil equipamentos espalhados pelo Brasil</span>
            <span>
              Mais de 200 contratos ativos somente na região de Londrina -RS
            </span>
            <span> Uma das únicas a cumprir 100% dos projetos entregues</span>
          </div>
          <div className="about">
            <Lottie
              loop
              animationData={business}
              style={{ height: 200 }}
              play
            />
            <button onClick={() => handleClick("/about")}>
              Saiba mais sobre a Altatech
            </button>
          </div>
        </div>
      </section>
    </Container>
  );
}

export default AboutHome;
