import Note from "../../assets/Note.svg";
import { Container } from "./styles";

function Estimate() {
  return (
    <Container>
      <section className="initial">
        <span>Solicite seu orçamento!</span>
        <div className="section">
          <div className="form">
            <form>
              <div>
                <input type="input" placeholder="Nome" />
                <input type="input" placeholder="E-mail" />
              </div>
              <div>
                <input type="input" placeholder="Telefone" />
                <input type="input" placeholder="CNPJ" />
              </div>
              <textarea placeholder="Mensagem" className="message" />
              <button>Solicitar</button>
            </form>
          </div>
          <div className="img">
            <img src={Note} alt="" />
          </div>
        </div>
      </section>
    </Container>
  );
}

export default Estimate;
