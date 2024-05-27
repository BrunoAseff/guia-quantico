"use client";
import Card_1_animation from "../../animations/intro/Card_1";
import { Container, Card, Title, TextContainer } from "../../aulas";

export default function Card_1() {
  return (
    <Container>
      <Card>
        <Title>
          O QUE É FÍSICA QUÂNTICA? <Card_1_animation />
        </Title>
        <TextContainer>
          <p>
            Na escala subatômica, as coisas acontecem de forma bem diferente da
            física convencional.
          </p>

          <p>
            Tão diferente que foi necessário criar um ramo da física só pra
            estudar essa escala: <br></br>
            <strong>A física quântica!</strong>
          </p>
          <p>
            {" "}
            Portanto, a Física quântica é o estudo do comportamento das menores
            partículas do universo, como átomos e fótons.
          </p>
        </TextContainer>
      </Card>
    </Container>
  );
}
