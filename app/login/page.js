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
        <A>Já tenho uma conta</A>
        <Button>Entrar</Button>
      </Card>
    </Container>
  );
}
