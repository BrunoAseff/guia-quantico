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
  position: relative;
  translate: -57px 35px;
  width: 20px;
  height: 20px;
  background-color: white;
  border-radius: 50%;
  filter: drop-shadow(0px 0px 13px rgba(255, 255, 255, 0.3));
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
      easing: "spring(1, 80, 10, 0)",
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
