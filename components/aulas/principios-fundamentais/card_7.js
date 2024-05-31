"use client";

import { Container, Card, Title, TextContainer } from "../../aulas";

export default function Card_7() {
  return (
    <Container>
      <Card>
        <Title>Tunelamento quântico</Title>
        <TextContainer>
          <p>
            Um dos fenômenos que essa incerteza causa é o tunelamento quântico.
          </p>
          <p>
            Imagine tentar atravessar uma parede sólida. No mundo macroscópico,
            isso é impossível.
          </p>

          <p>
            Mas, no mundo quântico, partículas como elétrons podem fazer
            exatamente isso!
          </p>
          <p>Como isso funciona?</p>
          <p>
            Quando uma partícula encontra uma barreira, por causa da incerteza
            da posição dela, há uma pequena probabilidade de que ela esteja, na
            verdade, no outro lado dessa barreira.
          </p>
          <p>
            Inclusive, o tunelamento é usado para funcionamento dos transistores
            e está presente em boa parte dos nossos dispositivos eletrônicos.
          </p>
        </TextContainer>
      </Card>
    </Container>
  );
}
