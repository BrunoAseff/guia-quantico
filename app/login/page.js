"use client";

import styled from "styled-components";
import Logo from "../../components/Logo";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90vh; /* Ensure the container takes full viewport height */
`;

const Card = styled.div`
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
  margin: 0 0 10px 0;
  width: 430px;
  height: 45px;
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
  font-size: 17px;
  margin: 20px 0 6px 13px; /* Add margin for better spacing */
`;

const ForgotPassword = styled.p`
  display: flex;
  color: black;
  font-weight: 700;
  font-size: 17px;
  margin: 20px 14px 6px 13px; /* Add margin for better spacing */
  &:hover {
    color: #006fee;
    cursor: pointer;
  }
`;

const PasswordText = styled.div`
  display: flex;
  justify-content: space-between;
  color: black;
  width: 100%;
`;

const Button = styled.button`
  margin: 40px 0; /* Add margin at the top for spacing */
  padding: 13px 170px; /* Adjust padding for better button size */
  font-weight: 700;
  color: black;
  font-size: 14px;
  border: 3px solid black;
  border-radius: 20px;
  background: white;
  text-align: center;
  &:hover {
    font-weight: 600;
    background: linear-gradient(to right, #27272a, black, #27272a);
    color: white;
    cursor: pointer;
  }
`;

const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const P = styled.p`
  font-weight: 700;
  color: "black";
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
        <Text>Email</Text>
        <Input placeholder="Insira o seu email" type="text" />
        <PasswordText>
          <Text>Senha</Text>
          <ForgotPassword>Esqueceu sua senha?</ForgotPassword>
        </PasswordText>
        <Input placeholder="Insira a sua senha" type="password" />
        <P href="/" onClick={() => router.push("/cadastro")}>
          Não tenho uma conta
        </P>
        <Button>ENTRAR</Button>
      </Card>
    </Container>
  );
}
