"use client";

import { Container, Card, Title, TextContainer } from "../../aulas";

export default function Card_3() {
  return (
    <Container>
      <Card>
        <Title>Nêutron</Title>
        <TextContainer>
          <p>
            O nêutron é uma das partículas que formam o núcleo do átomo, junto
            com os prótons.
          </p>
          <p>
            Diferente dos prótons, os nêutrons não têm carga elétrica; eles são
            neutros. Isso ajuda a manter os prótons juntos no núcleo, já que os
            prótons, todos positivos, tendem a se repelir.
          </p>

          <p>
            Os nêutrons também são importantes em reações nucleares, como quando
            um átomo se divide e libera energia.
          </p>
          <p>
            Eles são como pacificadores no núcleo, ajudando a manter tudo unido
            e funcionando.
          </p>
        </TextContainer>
      </Card>
    </Container>
  );
}
