"use client";

import styled from "styled-components";
import Logo from "../../components/Logo";
import { login } from "./actions";
import { useRouter } from "next/navigation";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90vh;
`;

const Form = styled.form`
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
`;

const Label = styled.label`
  color: black;
  align-self: flex-start; /* Align text to the start of the card */
  font-weight: 700;
  font-size: 17px;
  margin: 20px 0 6px 6px; /* Add margin for better spacing */
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

export const Button = styled.button`
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
  max-height: 100px;
  flex-direction: column;
`;

const A = styled.p`
  font-weight: 700;
  color: black;
  margin: 15px 0;
  &:hover {
    color: #006fee;
    cursor: pointer;
  }
`;

const H1 = styled.h1`
  color: black;
  align-self: flex-start; /* Align text to the start of the card */
  font-weight: 700;
  font-size: 22px;
  margin-left: 6px;
`;

export default function Login() {
  const router = useRouter();

  return (
    <Container>
      <Form>
        <LogoContainer>
          <Logo />
        </LogoContainer>
        <H1>Login</H1>
        <Label>Email</Label>
        <Input
          placeholder="Insira o seu email"
          id="email"
          name="email"
          type="email"
          autocomplete="email"
          required
        />
        <PasswordText>
          <Label htmlFor="email">Senha</Label>
          <ForgotPassword>Esqueceu sua senha?</ForgotPassword>
        </PasswordText>
        <Input
          placeholder="Insira a sua senha"
          htmlFor="password"
          type="password"
          autocomplete="password"
          required
        />
        <A onClick={() => router.push("/cadastro")}>Não tenho uma conta</A>
        <Button type="submit" formAction={login}>
          ENTRAR
        </Button>
      </Form>
    </Container>
  );
}
