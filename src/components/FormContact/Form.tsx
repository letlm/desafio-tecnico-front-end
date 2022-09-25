import { toast } from "react-toastify";
import { ContainerForm } from "./styles";
import { useForm } from "react-hook-form";

function Form() {
  const { register, handleSubmit, setValue } = useForm();

  const handleError = (event: any) => {
    setTimeout(() => {
      toast("✔️ Em breve entraremos em contato!", {
        className: "toastify-color-progress-light",
      });

      setValue("name", "");
      setValue("phone", "");
      setValue("email", "");
      setValue("profile", "");
      setValue("subject", "");
      setValue("coments", "");
    }, 1000);
  };

  return (
    <ContainerForm onSubmit={handleSubmit(handleError)}>
      <span>Contato</span>
      <div>
        <div className="primary">
          <input
            placeholder="Nome"
            type="text"
            required
            {...register("name")}
          />

          <input
            placeholder="Telefone"
            type="tel"
            required
            {...register("phone")}
          />
        </div>
        <div className="secondary">
          <input
            placeholder="Email"
            type="email"
            required
            {...register("email")}
          />
          <select {...register("profile")}>
            <option value="" disabled selected>
              Selecionar perfil da empresa
            </option>
            <option value="comercio">
              Comércio, indústria, serviço, outros
            </option>
            <option value="governo">Governo</option>
            <option value="consultoria">Consultoria ou revenda</option>
            <option value="pessoa">
              Profissional autônomo ou Pessoa física
            </option>
          </select>
        </div>
        <div className="terciary">
          <input
            placeholder="Assunto"
            type="text"
            required
            {...register("subject")}
          />
          <textarea
            placeholder="Comentário"
            required
            {...register("comments")}
          />
        </div>
        <button>Enviar</button>
      </div>
    </ContainerForm>
  );
}

export default Form;
