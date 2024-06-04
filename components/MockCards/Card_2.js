import { Container, MockCard, Title, TextContainer } from "../aulas";
import styled from "styled-components";

const Wrapper = styled.div`
  position: fixed;
  max-width: 100vw;
  left: 9%;
  top: 41%;
  bottom: 0%;
`;

export default function Card_2() {
  return (
    <Wrapper>
      <Container>
        <MockCard>
          <Title>Receita de Bolo Quântico</Title>
          <TextContainer>
            <p>Ingredientes:</p>
            <ul>
              <li>2 xícaras de neutrinos</li>
              <li>1 pitada de incerteza</li>
              <li>3 colheres de sopa de bóson de higgs</li>
              <li>4 ovos de probabilidades</li>
              <li>5 xícaras de matéria escura</li>
              <li>6 colheres de chá de interação quântica</li>
              <li>7 gotas de intuição</li>
            </ul>
          </TextContainer>
        </MockCard>
      </Container>
    </Wrapper>
  );
}
