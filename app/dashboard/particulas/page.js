"use client";

import styled from "styled-components";
import Connected from "../../../components/animations/Connected";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  width: 100vw;
  max-width: 100%;
  margin: 0 auto;
  overflow: hidden;
`;

const CardLeft = styled.div`
  max-width: calc(55vw - 140px); /* Adjusted max-width */
  margin: 70px 0 0 70px;
  align-items: center;
  justify-content: flex-start;
  font-size: 18px;
  color: white;
  font-weight: 400;
`;

const CardRight = styled.div`
  width: 700px;
  height: 90vh;
  text-align: center;
  align-items: center;
  justify-content: center;
  color: white;
  display: flex;
`;

const H1 = styled.h1`
  color: white;
  font-size: 20px;
  padding: 20px;
  font-weight: 900;
  text-align: center;
`;

export default function Intro() {
  return (
    <Container>
      <CardLeft>
        <H1> Dualidade onda-Partícula</H1>

        <p> Luz é onda ou partícula? A resposta é: ambos!</p>
        <p>
          {" "}
          A dualidade onda-partícula é uma daquelas coisas na física quântica
          que fazem a gente coçar a cabeça tentando entender.{" "}
        </p>

        <p>
          {" "}
          É como se a realidade decidisse jogar um jogo com a gente, nos fazendo
          questionar tudo o que achamos que sabemos.{" "}
        </p>

        <p>
          {" "}
          A luz pode se comportar como uma onda, se espalhando e interferindo
          consigo mesma, como quando você joga duas pedras em um lago e vê as
          ondas se encontrando.{" "}
        </p>

        <p>
          {" "}
          Mas, em outras situações, a luz se comporta como partículas chamadas
          fótons, pequenas bolinhas de energia que colidem e interagem com a
          matéria.{" "}
        </p>

        <p>
          {" "}
          É como se a luz tivesse uma identidade dupla, dependendo de como a
          observamos.{" "}
        </p>
      </CardLeft>
      <CardRight>
        <Connected />
      </CardRight>
    </Container>
  );
}
