import styled from "styled-components";
import Tunelamento from "./animations/Tunelamento";
import Onda from "./animations/Onda";
import Particle from "./animations/Particle";
import Connected from "./animations/Connected";

const Card = styled.div`
  width: 200px;
  height: 200px;
  margin: 70px;
  padding-top: 20px;
  text-align: center;
  align-items: center;
  justify-content: center;
  font-size: 15px;
  color: white;
  display: flex;
  border: 1px solid white;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0);
  flex-direction: column;
`;

const CardsContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const P = styled.p`
  margin-bottom: 60px;
`;

export default function GlassCard() {
  return (
    <Container>
      <CardsContainer>
        <Card>
          Princípio da incerteza
          <Particle />
        </Card>
        <Card>
          Tunelamento Quântico
          <Tunelamento />
        </Card>
        <Card>
          <P> Dualidade onda-partícula</P>
          <Onda />
        </Card>
        <Card>
          Emaranhamento Quântico
          <Connected />
        </Card>
      </CardsContainer>
    </Container>
  );
}
