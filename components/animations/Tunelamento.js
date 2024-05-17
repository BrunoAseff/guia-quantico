import React, { useEffect, useRef } from "react";
import anime from "animejs/lib/anime.es.js";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: 0;
  width: 100vw;
`;

const Line = styled.div`
  position: relative;
  width: 1px;
  height: 100px;
  background-color: white;
`;

const Circle = styled.div`
  position: absolute;
  top: 35%;
  left: -55px;
  width: 20px;
  height: 20px;
  background-color: white;
  border-radius: 50%;
`;

export default function Tunelamento() {
  const circleRef = useRef(null);

  useEffect(() => {
    anime({
      targets: circleRef.current,
      translateX: [
        { value: 100, duration: 1000 },
        { value: 0, duration: 1000 },
      ],
      easing: "easeInOutSine",
      loop: true,
    });
  }, []);

  return (
    <Container>
      <Line>
        <Circle ref={circleRef}></Circle>
      </Line>
    </Container>
  );
}
