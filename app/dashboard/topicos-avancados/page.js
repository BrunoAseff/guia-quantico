"use client";

import "../../../slick/slick.css";
import "../../../slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";
import styled from "styled-components";
import Card_1 from "@/components/aulas/topicos-avancados/card_1";
import Card_2 from "@/components/aulas/topicos-avancados/card_2";
import Card_3 from "@/components/aulas/topicos-avancados/card_3";
import Card_4 from "@/components/aulas/topicos-avancados/card_4";

import Aulas_header from "@/components/Aulas_header";

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
      <Aulas_header />
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
        <div>
          <Card_4 />
        </div>
      </Slider>
    </Container>
  );
}
