import React, { useEffect, useRef } from "react";
import anime from "animejs/lib/anime.es.js";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  margin: 0;
`;

const Square = styled.div`
  margin: 30px;
  position: relative;
  width: 20px;
  height: 20px;
  background-color: white;
  box-shadow: 0px 0px 13px rgba(255, 255, 255, 0.1);
`;

const Connect = () => {
  const square1Ref = useRef(null);
  const square2Ref = useRef(null);

  useEffect(() => {
    anime({
      targets: square1Ref.current,
      translateY: [
        { value: -40, duration: 1000 },
        { value: 40, duration: 1000 },
      ],
      borderRadius: ["0%", "50%"],
      backgroundColor: "#FAFAFA", // Added color transition
      easing: "easeInOutQuad",
      direction: "alternate",
      loop: true,
    });

    anime({
      targets: square2Ref.current,
      translateY: [
        { value: 40, duration: 1000 },
        { value: -40, duration: 1000 },
      ],
      borderRadius: ["0%", "50%"],
      backgroundColor: "#71717A", // Added color transition
      easing: "easeInOutQuad",
      direction: "alternate",
      loop: true,
    });
  }, []);

  return (
    <Container>
      <Square ref={square1Ref} style={{ top: "-5%" }}></Square>
      <Square ref={square2Ref} style={{ top: "-5%" }}></Square>
    </Container>
  );
};

export default Connect;
