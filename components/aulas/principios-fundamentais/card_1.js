"use client";
import Card_1_animation from "../../animations/principios-fundamentais/card_1";
import {
  Container,
  Card,
  Title,
  TextContainer,
  ButtonContainer,
} from "../../aulas";
import { WhiteButton } from "../../../components/WhiteButton";

export default function Card_1() {
  return (
    <Container>
      <Card>
        <Title>Dualidade onda-partícula</Title>
        <TextContainer>
          <p>Luz é onda ou partícula? A resposta é: ambos!</p>
          <p>
            A luz pode se comportar como uma onda, se espalhando e interferindo
            consigo mesma, como quando você joga duas pedras em um lago e vê as
            ondas se encontrando.
          </p>

          <p>
            Mas, em outras situações, a luz se comporta como partículas chamadas
            fótons, pequenas bolinhas de energia que colidem e interagem com a
            matéria.
          </p>
          <p>
            É como se a luz tivesse uma identidade dupla, dependendo de como a
            observamos.
          </p>
          <Card_1_animation />
          <ButtonContainer>
            <WhiteButton>MUDAR COMPORTAMENTO DA LUZ</WhiteButton>
          </ButtonContainer>
        </TextContainer>
      </Card>
    </Container>
  );
}
