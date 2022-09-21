import { Container, Context, Line } from "./styles";
import Altatech from "../../assets/Altatech_logo_white.svg";
import { BsFillArrowUpCircleFill, BsWhatsapp } from "react-icons/bs";

function DashboardView() {
  const handleScroll = () => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Container>
      <Context>
        <img src={Altatech} alt="Altatech" />

        <div className="border"></div>
      </Context>
      <Line>
        <button type="button" onClick={handleScroll} className="return">
          <BsFillArrowUpCircleFill size={30} />
        </button>
        <button type="button" onClick={handleScroll} className="whats">
          <BsWhatsapp size={30} />
        </button>
      </Line>
    </Container>
  );
}

export default DashboardView;
