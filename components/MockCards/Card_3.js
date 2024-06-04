import { Container, MockCard, Title, TextContainer } from "../aulas";
import styled from "styled-components";

const Wrapper = styled.div`
  position: fixed;
  max-width: 33vw;
  left: 8.5%;
  bottom: 28%;
`;

export default function Card_3() {
  return (
    <Wrapper>
      <Container>
        <MockCard>
          <Title> Curiosidades Sobre o Espaço</Title>
          <TextContainer>
            <ol>
              <li>
                A Lua está se afastando da Terra a uma taxa de aproximadamente
                3,8 centímetros por ano.
              </li>
              <li>
                Um dia em Vênus é mais longo que um ano em Vênus, devido à sua
                lenta rotação.
              </li>
              <li>
                Existem mais estrelas no universo observável do que grãos de
                areia em todas as praias da Terra.
              </li>
              <li>
                O maior vulcão do sistema solar está em Marte e se chama Olympus
                Mons.
              </li>
              <li>
                Em 2022, a NASA conseguiu desviar o curso de um asteroide pela
                primeira vez em um teste de defesa planetária.
              </li>
            </ol>
          </TextContainer>
        </MockCard>
      </Container>
    </Wrapper>
  );
}
