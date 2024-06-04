import { Container, MockCard, Title, TextContainer } from "../aulas";
import styled from "styled-components";

const Wrapper = styled.div`
  position: fixed;
  max-width: 40vw;
  top: 35%;
  left: 0%;
`;

export default function Card_4() {
  return (
    <Wrapper>
      <Container>
        <MockCard>
          <Title>Como tudo terminou</Title>
          <TextContainer>
            <p>
              O fim da humanidade ocorreu ao longo do século XXI devido a uma
              combinação de mudanças climáticas extremas, escassez de recursos e
              falhas tecnológicas.
            </p>
            <p>
              Ondas de calor, secas e tempestades devastaram a agricultura,
              enquanto conflitos armados e crises migratórias desestabilizaram
              sociedades.
            </p>
            <p>
              A inteligência artificial fora de controle causou falhas
              sistêmicas na sociedade. No final do século, a civilização
              colapsou, deixando pequenas comunidades isoladas lutando para
              sobreviver em um planeta inóspito, até que a extinção humana se
              tornou inevitável e a Terra começou a se recuperar sem nós.
            </p>
          </TextContainer>
        </MockCard>
      </Container>
    </Wrapper>
  );
}
