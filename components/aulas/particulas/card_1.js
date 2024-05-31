"use client";

import { Container, Card, Title, TextContainer } from "../../aulas";

export default function Card_1() {
  return (
    <Container>
      <Card>
        <Title>Átomo</Title>
        <TextContainer>
          <p>
            O átomo é a menor unidade da matéria que mantém as propriedades de
            um elemento químico.
          </p>
          <p>
            Pense no átomo como um minúsculo sistema solar. No centro, temos o
            núcleo, que é como o sol, composto de prótons e nêutrons.
          </p>

          <p>
            Ao redor do núcleo, giram os elétrons, como planetas em órbita. Mas,
            diferente dos planetas, os elétrons não seguem trajetórias fixas;
            eles ocupam regiões chamadas orbitais, onde é mais provável
            encontrá-los.
          </p>
          <p>
            Os átomos são incrivelmente pequenos, mas se juntam para formar tudo
            que vemos ao nosso redor, desde o ar que respiramos até as estrelas
            no céu.
          </p>
        </TextContainer>
      </Card>
    </Container>
  );
}
