"use client";

import Stars from "../../components/stars";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Card = styled.div`
  margin-top: 100px;
  width: 340px;
  height: auto;
  background: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  mix-blend-mode: screen;
  padding: 20px;
`;

const Input = styled.input`
  margin: 10px 0;
  width: 300px;
  height: 23px;
  background: black;
  border-radius: 7px;
  color: white;
  text-align: start;
`;

const Text = styled.p`
  color: black;
  align-self: flex-start; /* Align text to the start of the card */
  font-weight: 700;
  font-size: 15px;
  margin: 10px 0 0 0; /* Add margin for better spacing */
`;

const Button = styled.button`
  margin-top: 20px; /* Add margin at the top for spacing */
  padding: 10px 20px; /* Adjust padding for better button size */
  font-weight: 700;
  color: white;
  font-size: 14px;
  border: 1px solid white;
  border-radius: 20px;
  background: black;
  width: 120px; /* Set a fixed width */
  text-align: center;
  &:hover {
    cursor: pointer;
  }
`;

export default function Login() {
  return (
    <>
      <Stars />

      <Container>
        <Card>
          <Text>Nome</Text>

          <Input placeholder="Insira o seu nome" type="text" />
          <Text>Email</Text>

          <Input placeholder="Insira o seu email" type="text" />

          <Text>Senha</Text>

          <Input placeholder="Insira a sua senha" type="password" />

          <Text>Confirmar Senha</Text>

          <Input placeholder="Confirme sua senha" type="password" />
          <Button>Entrar</Button>
        </Card>
      </Container>
    </>
  );
}
