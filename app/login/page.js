"use client";

import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: black;
`;

const Card = styled.div`
  margin-top: 100px;
  width: 370px;
  height: auto;
  background: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  padding: 20px;
`;

const Input = styled.input`
  margin: 10px 0;
  width: 350px;
  height: 40px;
  padding: 0 40px 0 10px;
  box-sizing: border-box;
  background: black;
  border: solid;
  border-radius: 10px;
  color: white;
  text-align: start;
  &:focus {
    border: 4px solid white;
  }
  &::placeholder {
    color: #d4d4d8;
  }
`;

const Text = styled.p`
  color: black;
  align-self: flex-start; /* Align text to the start of the card */
  font-weight: 700;
  font-size: 15px;
  margin: 20px 0 0 13px; /* Add margin for better spacing */
`;

export default function Login() {
  return (
    <Container>
      <Card>
        <Text>Nome</Text>

        <Input placeholder="Insira o seu nome" type="email" />
        <Text>Email</Text>

        <Input placeholder="Insira o seu email" type="text" />

        <Text>Senha</Text>

        <Input placeholder="Insira a sua senha" type="password" />

        <Text>Confirmar Senha</Text>

        <Input placeholder="Confirme sua senha" type="password" />
      </Card>
    </Container>
  );
}
