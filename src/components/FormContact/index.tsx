import Form from "./Form";
import { Container } from "./styles";
import Lottie from "react-lottie";
import contact from "../../animations/contact.json";

function FormContact() {
  return (
    <Container>
      <Form />
      <section className="right">
        <Lottie options={{ animationData: contact }} width={290} height={290} />
      </section>
    </Container>
  );
}

export default FormContact;
