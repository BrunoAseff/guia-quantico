"use client";

import "../../../slick/slick.css";
import "../../../slick/slick-theme.css";
import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import styled from "styled-components";
import Card_1 from "@/components/aulas/particulas/card_1";
import Card_2 from "@/components/aulas/particulas/card_2";
import Card_3 from "@/components/aulas/particulas/card_3";
import Card_4 from "@/components/aulas/particulas/card_4";
import Card_5 from "@/components/aulas/particulas/card_5";
import Card_6 from "@/components/aulas/particulas/card_6";
import Card_7 from "@/components/aulas/particulas/card_7";
import Card_8 from "@/components/aulas/particulas/card_8";
import { CompleteButton } from "@/components/CompleteButton";
import Aulas_header from "@/components/Aulas_header";

const Container = styled.div`
  margin: 0;
  padding: 0;
  left: 0;
  top: 0;
`;

export default function SimpleSlider(id) {
  const [progress, setProgress] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleProgressUpdate = async () => {
    const response = await fetch("/api/progress", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id, increment: 20 }),
    });

    if (response.ok) {
      const newProgress = await response.json();
      setProgress(newProgress);
    }
  };

  const settings = {
    dots: false,
    fade: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false,
    afterChange: (current) => setCurrentSlide(current),
  };

  useEffect(() => {
    const nextArrow = document.querySelector(".slick-next");
    if (currentSlide === 7) {
      nextArrow.classList.add("faded");
    } else {
      nextArrow.classList.remove("faded");
    }
  }, [currentSlide]);

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
      {currentSlide === 7 && (
        <CompleteButton onClick={handleProgressUpdate}>
          Marcar como concluído
        </CompleteButton>
      )}
      <div>Progresso: {progress}%</div>
    </Container>
  );
}
