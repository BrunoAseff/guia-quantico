"use client";

import styled from "styled-components";
import Logo from "../../components/Logo";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80vw;
  height: 80vh;
`;

const Card = styled.div`
  margin: 190px 0 0 370px;
  width: 450px;
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
`;

const PasswordText = styled.div`
  display: flex;
  justify-content: space-between;
  color: black;
  width: 100%;
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
        <Text>Email</Text>

        <Input placeholder="Insira o seu email" type="text" />

        <PasswordText>
          <Text>Senha</Text>
          <ForgotPassword>Esqueceu sua senha?</ForgotPassword>
        </PasswordText>

        <Input placeholder="Insira a sua senha" type="password" />
        <A href="/" onClick={() => router.push("/cadastro")}>
          Não tenho uma conta
        </A>
        <Button>Entrar</Button>
      </Card>
    </Container>
  );
}
