"use client";
import Card_1_animation from "../../animations/intro/Card_1";
import { Container, Card, Title, TextContainer } from "../../aulas";

export default function Card_1() {
  return (
    <Container>
      <Card>
        <Title>O que é Física Quântica?</Title> <Card_1_animation />
        <TextContainer>
          <p>
            Quando mergulhamos no mundo das partículas subatômicas, descobrimos
            que elas se comportam de maneiras muito diferentes da física
            convencional.
          </p>

          <p>
            Tão diferente que foi necessário criar um ramo da física só pra
            estudar essa escala: <br></br> <br></br>
            <strong style={{ position: "relative", left: "40%" }}>
              A física Quântica!
            </strong>
          </p>
          <p>
            {" "}
            Então, resumindo, a Física quântica é o estudo do comportamento das
            menores partículas do universo, como átomos e fótons.
          </p>
        </TextContainer>
      </Card>
    </Container>
  );
}
