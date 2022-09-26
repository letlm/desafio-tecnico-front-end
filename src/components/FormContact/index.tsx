import Form from "./Form";
import { Container } from "./styles";
import Lottie from "react-lottie-player";
import contact from "../../animations/contact.json";

function FormContact() {
  return (
    <Container>
      <Form />
      <section className="right">
        <Lottie
          loop
          animationData={contact}
          style={{ width: 290, height: 290 }}
          play
        />
      </section>
    </Container>
  );
}

export default FormContact;
