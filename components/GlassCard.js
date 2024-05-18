import styled from "styled-components";
import Tunelamento from "./animations/Tunelamento";
import Onda from "./animations/Onda";
import Particle from "./animations/Particle";
import Connected from "./animations/Connected";
import { Button1 } from "./Header";

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

const Button = styled.button`
  display: flex;
  text-align: center;
  font-weight: 300;
  color: white;
  font-size: 20px;
  padding: 15px 25px;
  display: flex;
  margin-top: 30px;
  border-style: solid;
  border-radius: 40px;
  border-color: white;
  background: rgba(255, 255, 255, 0);
  border-width: 1px;

  &:hover {
    box-shadow: 0px 0px 13px rgba(255, 255, 255, 0.3);
    cursor: pointer;
  }
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
      <Button>Começar agora</Button>
    </Container>
  );
}
