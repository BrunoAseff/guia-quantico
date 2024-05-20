"use client";

import styled from "styled-components";
import Logo from "../../components/Logo";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 95vh;
`;

const Card = styled.div`
  width: 100%;
  max-width: 480px;
  background: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 8px;
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.1);
  padding: 10px;
  box-sizing: border-box;
  max-height: calc(100vh - 100px);
  mix-blend-mode: screen;
`;

const Input = styled.input`
  margin: 0 0 10px 0;
  width: 430px;
  height: 48px;
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
  &:hover {
    background: linear-gradient(to right, #27272a, black, #27272a);
    color: white;
  }
`;

const Text = styled.p`
  color: black;
  align-self: flex-start; /* Align text to the start of the card */
  font-weight: 700;
  font-size: 15px;
  margin: 10px 0 0 17px; /* Reduced margin for better spacing */
`;

const Button = styled.button`
  margin-top: auto; /* Push the button to the bottom */
  margin-bottom: 20px; /* Add margin to the bottom for spacing */
  padding: 10px 20px;
  width: 100%;
  max-width: 350px;
  font-weight: 700;
  color: black;
  font-size: 12px;
  border: 2px solid black;
  border-radius: 15px;
  background: white;
  text-align: center;
  &:hover {
    background: linear-gradient(to right, #27272a, black, #27272a);
    color: white;
    cursor: pointer;
  }
`;
const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const A = styled.p`
  font-weight: 700;
  color: black; /* Corrected color value */
  margin: 15px 0; /* Add margin for better spacing */
  &:hover {
    color: #006fee;
    cursor: pointer;
  }
`;

export default function Login() {
  return (
    <Container>
      <Card>
        <LogoContainer>
          <Logo />
        </LogoContainer>
        <Text>Nome</Text>
        <Input placeholder="Insira o seu nome" type="text" />
        <Text>Email</Text>
        <Input placeholder="Insira o seu email" type="email" />
        <Text>Senha</Text>
        <Input placeholder="Insira a sua senha" type="password" />
        <Text>Confirmar Senha</Text>
        <Input placeholder="Confirme sua senha" type="password" />
        <A href="/cadastro">Já tenho uma conta</A>
        <Button>CRIAR CONTA</Button>
      </Card>
    </Container>
  );
}
