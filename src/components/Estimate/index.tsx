import Note from "../../assets/Note.svg";
import { Container } from "./styles";

import { useForm } from "react-hook-form";

import { toast } from "react-toastify";

function Estimate() {
  const { register, handleSubmit, setValue } = useForm();

  const toastDisplay = () => {
    setTimeout(() => {
      toast("📋 Orçamento solicitado! Entraremos em breve em contato!", {
        className: "toastify-color-progress-light",
      });
      setValue("name", "");
      setValue("email", "");
      setValue("phone", "");
      setValue("cnpj", "");
      setValue("message", "");
    }, 1000);
  };

  return (
    <Container data-aos="fade-right" data-aos-duration="1000">
      <section className="initial">
        <span>Solicite seu orçamento!</span>
        <div className="section">
          <div className="form">
            <form onSubmit={handleSubmit(toastDisplay)}>
              <div>
                <input
                  type="text"
                  {...register("name")}
                  placeholder="Nome"
                  required
                />

                <input
                  type="email"
                  {...register("email")}
                  placeholder="E-mail"
                  required
                />
              </div>
              <div>
                <input
                  type="tel"
                  {...register("phone")}
                  placeholder="Telefone"
                  required
                />

                <input
                  type="number"
                  {...register("cnpj")}
                  placeholder="CNPJ"
                  required
                />
              </div>
              <textarea
                {...register("message")}
                placeholder="Mensagem"
                className="message"
                required
              />
              <button>Solicitar</button>
            </form>
          </div>
          <div className="img">
            <img src={Note} alt="Imagem de Calculadora" />
          </div>
        </div>
      </section>
    </Container>
  );
}

export default Estimate;
