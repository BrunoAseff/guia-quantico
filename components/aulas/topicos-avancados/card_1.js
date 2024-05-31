"use client";

import { Container, Card, Title, TextContainer } from "../../aulas";

export default function Card_1() {
  return (
    <Container>
      <Card>
        <Title>Spins</Title>
        <TextContainer>
          <p>
            O spin é uma propriedade fundamental das partículas subatômicas, mas
            não se deixe enganar pelo nome!
          </p>
          <p>
            Embora "spin" faça parecer que as partículas estão girando como
            pequenos piões, na verdade, não é bem isso. O spin é uma forma de
            momento angular intrínseco que as partículas têm, mesmo sem estarem
            fisicamente girando.
          </p>

          <p>
            As partículas podem ter spins diferentes, como 1/2, 1 ou 0, o que
            determina como elas se comportam e como podem se combinar com outras
            partículas.
          </p>
          <p>
            O spin é crucial para as regras da física quântica, influenciando
            tudo, desde as interações magnéticas até a estrutura dos átomos.
          </p>
        </TextContainer>
      </Card>
    </Container>
  );
}
