import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Container, MockCard, Title, TextContainer } from "../aulas";
import Card_1 from "./Card_1";
import Card_2 from "./Card_2";
import Card_3 from "./Card_3";
import Card_4 from "./Card_4";
import { Wrapper5, Button5 } from "./Card_5";

export const Button = styled.button`
  position: relative;
  margin: 20px 20px 20px 20px;
  background: white;
  color: black;
  font-size: 14px;
  font-weight: 300;
  padding: 11px 23px;
  border-radius: 8px;
  border: solid black 2px;
  top: -20vh;
  left: 42vw;
  &:hover {
    color: white;
    font-weight: 500;
    background: black;
    cursor: pointer;
    transition: 0.3s;
  }
`;

const Container1 = styled.div`
  overflow: hidden;
  position: absolute;
  width: 100vw;
  height: 100vh;
  z-index: 99;
  display: ${({ isVisible }) => (isVisible ? "block" : "none")};
`;

const CardWrapper = styled.div`
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  transition: opacity 0.3s;
`;

export function Stop({ onClick }) {
  return <Button onClick={onClick}>PARAR DE OBSERVAR</Button>;
}

export default function MockCards() {
  const [isVisible, setIsVisible] = useState(false);
  const [cardVisibility, setCardVisibility] = useState([
    false,
    false,
    false,
    false,
  ]);

  const handleStopClick = () => {
    setIsVisible(true);
  };

  const handleBackClick = () => {
    setIsVisible(false);
    setCardVisibility([false, false, false, false]);
  };

  useEffect(() => {
    if (isVisible) {
      const timers = cardVisibility.map((_, index) =>
        setTimeout(() => {
          setCardVisibility((prev) => {
            const newVisibility = [...prev];
            newVisibility[index] = true;
            return newVisibility;
          });
        }, index * 100)
      );

      return () => {
        timers.forEach((timer) => clearTimeout(timer));
      };
    }
  }, [isVisible]);

  return (
    <>
      <Stop onClick={handleStopClick} />
      <Container1 isVisible={isVisible}>
        <CardWrapper isVisible={cardVisibility[0]}>
          <Card_1 />
        </CardWrapper>
        <CardWrapper isVisible={cardVisibility[1]}>
          <Card_2 />
        </CardWrapper>
        <CardWrapper isVisible={cardVisibility[2]}>
          <Card_3 />
        </CardWrapper>
        <CardWrapper isVisible={cardVisibility[3]}>
          <Card_4 />
        </CardWrapper>
        <Wrapper5>
          <Container>
            <MockCard>
              <Title style={{ color: "#F31260" }}>Erro</Title>
              <TextContainer>
                <p>Ops…Acho que você quebrou o site.</p>
                <p>
                  Agora o Guia Quântico está em superposição, ou seja, em todos
                  seus possíveis estados ao mesmo tempo.
                </p>
                <Button5 onClick={handleBackClick}>VOLTAR A OBSERVAR</Button5>
              </TextContainer>
            </MockCard>
          </Container>
        </Wrapper5>
      </Container1>
    </>
  );
}
