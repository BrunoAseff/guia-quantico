"use client";

import { Container, Card, Title, TextContainer } from "../../aulas";

export default function Card_4() {
  return (
    <Container>
      <Card>
        <Title>O Gato de Schrödinger</Title>
        <TextContainer>
          <p>
            Para ilustrar a estranheza da superposição, o físico Erwin
            Schrödinger propôs um experimento mental famoso: o Gato de
            Schrödinger.
          </p>
          <p>
            Imagine um gato em uma caixa, junto com um mecanismo que tem 50% de
            chance de matá-lo baseado na decaída de uma partícula radioativa.
          </p>

          <p>
            Até que a caixa seja aberta, o gato está em uma superposição de
            estados – tanto vivo quanto morto.
          </p>
          <p>
            A situação só se resolve quando observamos o gato. Antes disso, ele
            está em uma superposição de "vivo" e "morto".
          </p>
          <p>
            Um estado que não faz sentido em nosso mundo macroscópico, mas é
            fundamental no mundo quântico.
          </p>
        </TextContainer>
      </Card>
    </Container>
  );
}
