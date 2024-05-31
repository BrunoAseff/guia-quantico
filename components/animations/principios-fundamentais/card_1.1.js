import React, { useEffect, useRef } from "react";
import anime from "animejs/lib/anime.es.js";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const Line = styled.div`
  position: relative;
  width: 0px;
  height: 10vh;
  background-color: white;
`;

const Circle = styled.div`
  position: absolute;
  width: 20px;
  height: 20px;
  background-color: ${({ color }) => color};
  border-radius: 50%;
  box-shadow: 0px 0px 13px rgba(255, 255, 255, 0.3);
`;

const colors = ["black", "black", "black", "black", "black", "black"];

export default function Card_1_animation2() {
  const circleRefs = useRef([]);

  useEffect(() => {
    circleRefs.current.forEach((circle) => {
      anime({
        targets: circle,
        translateX: [
          {
            value: 600 + Math.random() * 50,
            duration: 1000 + Math.random() * 500,
          },
          { value: 0, duration: 1000 + Math.random() * 500 },
        ],
        translateY: [
          { value: Math.random() * 20, duration: 500 + Math.random() * 500 },
          { value: -Math.random() * 20, duration: 500 + Math.random() * 500 },
        ],
        easing: function (el, i, total) {
          return function (t) {
            return Math.pow(Math.sin(t * (i + 2)), total);
          };
        },
        loop: true,
      });
    });
  }, []);

  return (
    <Container>
      <Line>
        {colors.map((color, index) => (
          <Circle
            key={index}
            ref={(el) => (circleRefs.current[index] = el)}
            color={color}
            style={{ top: `${20 + index * 20}%`, left: "-80px" }}
          />
        ))}
      </Line>
    </Container>
  );
}
