"use client";

import styled from "styled-components";
import Logo from "../../components/Logo";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
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
  mix-blend-mode: screen;
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

const Button = styled.button`
  margin-top: 40px; /* Add margin at the top for spacing */
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

const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const A = styled.a`
  font-weight: 700;
  color: "black";
`;

export default function Login() {
  return (
    <Container>
      <Card>
        <LogoContainer>
          <Logo />
        </LogoContainer>
        <Text>Nome</Text>

        <Input placeholder="Insira o seu nome" type="email" />
        <Text>Email</Text>

        <Input placeholder="Insira o seu email" type="text" />

        <Text>Senha</Text>

        <Input placeholder="Insira a sua senha" type="password" />

        <Text>Confirmar Senha</Text>

        <Input placeholder="Confirme sua senha" type="password" />
        <A href="/" onClick={() => router.push("/cadastro")}>
          Já tenho uma conta
        </A>
        <Button>Entrar</Button>
      </Card>
    </Container>
  );
}
