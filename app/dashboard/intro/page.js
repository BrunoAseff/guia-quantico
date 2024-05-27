"use client";

import "../../../slick/slick.css";
import "../../../slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";
import styled from "styled-components";
import Card_1 from "@/components/aulas/introducao/card_1";
import Card_2 from "@/components/aulas/introducao/card_2";
import Card_3 from "@/components/aulas/introducao/card_3";

const Container = styled.div`
  position: absolute;
  max-width: 99vw;
  max-height: 90vh;
  margin 0;
`;

export default function SimpleSlider() {
  const settings = {
    dots: false,
    fade: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false,
  };
  return (
    <Container>
      <Slider {...settings}>
        <div>
          <Card_1 />
        </div>
        <div>
          <Card_2 />
        </div>
        <div>
          <Card_3 />
        </div>
      </Slider>
    </Container>
  );
}
