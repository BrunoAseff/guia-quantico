"use client";

import "../../../slick/slick.css";
import "../../../slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";
import styled from "styled-components";
import Card_1 from "@/components/aulas/interpretacoes/card_1";
import Card_2 from "@/components/aulas/interpretacoes/card_2";
import Card_3 from "@/components/aulas/interpretacoes/card_3";

import Aulas_header from "@/components/Aulas_header";

const Container = styled.div`
  margin 0;
  padding: 0;
  left: 0;
  top: 0;
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
      </Slider>
    </Container>
  );
}
