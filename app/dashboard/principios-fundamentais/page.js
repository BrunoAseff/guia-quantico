"use client";

import "../../../slick/slick.css";
import "../../../slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";
import styled from "styled-components";
import Card_1 from "@/components/aulas/principios-fundamentais/card_1";
import Card_2 from "@/components/aulas/principios-fundamentais/card_2";
import Card_3 from "@/components/aulas/principios-fundamentais/card_3";
import Card_4 from "@/components/aulas/principios-fundamentais/card_4";
import Card_5 from "@/components/aulas/principios-fundamentais/card_5";
import Card_6 from "@/components/aulas/principios-fundamentais/card_6";
import Card_7 from "@/components/aulas/principios-fundamentais/card_7";
import Card_8 from "@/components/aulas/principios-fundamentais/card_8";
import MockCards from "@/components/MockCards/MockCards";
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
          <MockCards />
        </div>
        <div>
          <Card_4 />
        </div>
        <div>
          <Card_5 />
        </div>
        <div>
          <Card_6 />
        </div>
        <div>
          <Card_7 />
        </div>
        <div>
          <Card_8 />
        </div>
      </Slider>
    </Container>
  );
}
