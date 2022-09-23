import { Container } from "./styles";
import Carousel from "react-simply-carousel";
import { useState } from "react";
import { partners } from "./partners";

function Partners() {
  const [activeSlide, setActiveSlide] = useState(0);
  return (
    <Container>
      <section>
        <span className="title">Empresas parceiras:</span>
        <Carousel
          activeSlideIndex={activeSlide}
          onRequestChange={setActiveSlide}
          forwardBtnProps={{
            children: <span>{`>`}</span>,
            style: {
              alignSelf: "center",
              background: "white",
              border: "none",
              borderRadius: "50%",
              color: "black",
              cursor: "pointer",
              fontSize: "16px",
              height: 25,
              lineHeight: 1,
              textAlign: "center",
              width: 25,
            },
          }}
          backwardBtnProps={{
            children: <span>{`<`}</span>,
            style: {
              alignSelf: "center",
              background: "white",
              border: "none",
              borderRadius: "50%",
              color: "black",
              cursor: "pointer",
              fontSize: "16px",
              height: 25,
              lineHeight: 1,
              textAlign: "center",
              width: 25,
            },
          }}
          responsiveProps={[
            {
              minWidth: 1000,
              itemsToShow: 7,
              speed: 6000,
            },
            {
              minWidth: 740,
              maxWidth: 1000,
              itemsToShow: 5,
              speed: 6000,
            },
            {
              minWidth: 300,
              maxWidth: 390,
              itemsToShow: 1,
              speed: 6000,
            },
            {
              minWidth: 489,
              maxWidth: 739,
              itemsToShow: 3,
              speed: 6000,
            },
          ]}
          itemsToShow={2}
          speed={6000}
          autoplay={true}
          autoplayDelay={0}
          infinite={true}
        >
          {partners.map((item, index) => (
            <img src={item.img} alt={item.name} key={item.id} />
          ))}
        </Carousel>
      </section>
    </Container>
  );
}

export default Partners;
