import styled from "styled-components";

const Card = styled.div`
  width: 200px;
  height: 200px;
  margin: 70px;
  text-align: center;
  align-items: center;
  justify-content: center;
  font-size: 15px;
  color: white;
  box-shadow: 0px 0px 13px rgba(255, 255, 255, 0.3);
  display: flex;
  border: 1px solid white;
  border-radius: 10px;
  box-shadow: 0px 0px 5px rgba(255, 255, 255, 0.3);
  background: rgba(255, 255, 255, 0);
`;

const Div = styled.div`
  display: flex;
  justify-content: center;
`;

export default function GlassCard() {
  return (
    <Div>
      <Card>Princípio da incerteza</Card>
      <Card>Tunelamento Quântico</Card>
      <Card>Dualidade onda-partícula</Card>
      <Card>Emaranhamento Quântico</Card>
    </Div>
  );
}
