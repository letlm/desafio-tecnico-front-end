import { Container, Context, Line } from "./styles";
import Altatech from "../../assets/Altatech_logo_white.svg";
import { BsFillArrowUpCircleFill, BsWhatsapp } from "react-icons/bs";
import { LottiesAnime } from "./lotties.db";
import Lottie from "react-lottie-player";
import Carousel from "react-simply-carousel";
import { useState } from "react";

function DashboardView() {
  const [activeSlide, setActiveSlide] = useState(0);

  const handleScroll = () => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Container>
      <Context>
        <section className="animation">
          <Carousel
            activeSlideIndex={activeSlide}
            onRequestChange={setActiveSlide}
            dotsNav={{
              show: true,
              itemBtnProps: {
                style: {
                  height: 10,
                  width: 10,
                  borderRadius: "50%",
                  border: 1,
                  marginLeft: 5,
                  background: "gray",
                },
              },
              activeItemBtnProps: {
                style: {
                  height: 10,
                  width: 10,
                  borderRadius: "50%",
                  border: 1,
                  marginLeft: 5,
                  background: "black",
                },
              },
            }}
            itemsToShow={1}
            speed={3000}
            delay={3000}
            autoplay={true}
            infinite={true}
          >
            {LottiesAnime.map((item, index) => (
              <div className="anime" key={index}>
                <Lottie
                  loop
                  animationData={item.animationData}
                  play
                  style={{ width: 290, height: 290 }}
                />
                <span>{item.text}</span>
              </div>
            ))}
          </Carousel>
        </section>

        <section className="initial">
          <div className="title">
            <img src={Altatech} alt="Altatech" />

            <span>Produtos e Solu????es de T.I para a sua empresa!</span>
            <span>Especializada em servi??os e seguran??a em nuvem </span>
          </div>
          <div className="box">
            <span>Altatech Cloud Backup</span>
            <span>Datacenter</span>
            <span>Solu????es em nuvem</span>
            <span>E muito +</span>
          </div>
        </section>
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
