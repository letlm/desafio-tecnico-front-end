import { Container } from "./styles";
import { telephones } from "./telephones.db";
import TelephonesMap from "./TelephonesMap";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";

function Telephones() {
  return (
    <Container>
      <span className="spanTitle">
        <FaPhoneAlt size={20} /> Telefones úteis
      </span>
      <section>
        {telephones.map((phone, index) => (
          <TelephonesMap
            key={phone.id}
            name={phone.city}
            number={phone.number}
          />
        ))}
      </section>
      <section>
        <span className="whats">
          <FaWhatsapp size={20} className="icon" /> (43) 99932-02-73
        </span>
      </section>
    </Container>
  );
}

export default Telephones;
