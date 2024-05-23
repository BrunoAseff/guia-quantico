"use client";

import styled from "styled-components";
import Logo from "../../components/Logo";
import { signup } from "../login/actions.js";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Button } from "../login/page";
import Image from "next/image";
import Loader from "../../components/Loader";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 95vh;
`;

const Form = styled.form`
  width: 100%;
  max-width: 480px;
  max-height: 90vh;
  background: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 8px;
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.1);
  padding: 10px;
  box-sizing: border-box;
  mix-blend-mode: screen;
`;

const Input = styled.input`
  width: 100%;
  min-height: 48px;
  max-width: 95%;
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

const Label = styled.label`
  color: black;
  align-self: flex-start;
  font-weight: 700;
  font-size: 15px;
  margin: 13px 0 5px 17px;
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
  align-self: flex-start;
  font-weight: 700;
  font-size: 22px;
  margin-left: 17px;
`;

const PasswordContainer = styled.div`
  position: relative;
  width: 100%;
  flex-direction: column;
  display: flex;
  align-items: center;
`;

const TogglePasswordButton = styled.button`
  top: 10px;
  left: 400px;
  position: absolute;
  background: none;
  border: none;
  cursor: pointer;
`;

const ImageContainer = styled.div`
  margin-top: 40px;
`;

export default function Cadastro() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);

    const formData = new FormData(event.target);

    try {
      await signup(formData);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Container>
      <Form method="POST" onSubmit={handleSubmit}>
        <LogoContainer>
          <Logo />
        </LogoContainer>
        <H1>Cadastro</H1>

        <Label>Nome</Label>
        <Input placeholder="Insira o seu nome" type="text" />
        <Label htmlFor="email">Email</Label>
        <Input
          placeholder="Insira o seu email"
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          required
        />
        <Label>Senha</Label>

        <PasswordContainer>
          <Input
            placeholder="Insira a sua senha"
            id="password"
            name="password"
            type={showPassword ? "text" : "password"}
            required
          />
          <TogglePasswordButton
            type="button"
            onClick={togglePasswordVisibility}
          >
            <Image
              src={showPassword ? "/eye-opened.svg" : "/eye-closed.svg"}
              alt="Toggle Password Visibility"
              width={24}
              height={24}
            />
          </TogglePasswordButton>
        </PasswordContainer>

        <PasswordContainer>
          <Label>Confirmar Senha</Label>
          <Input
            placeholder="Confirme sua senha"
            type={showConfirmPassword ? "text" : "password"}
            required
          />
          <TogglePasswordButton
            type="button"
            onClick={toggleConfirmPasswordVisibility}
          >
            <ImageContainer>
              <Image
                src={
                  showConfirmPassword ? "/eye-opened.svg" : "/eye-closed.svg"
                }
                alt="Toggle Password Visibility"
                width={24}
                height={24}
              />
            </ImageContainer>
          </TogglePasswordButton>
        </PasswordContainer>

        <A onClick={() => router.push("/login")}>Já tenho uma conta</A>
        <Button type="submit" formAction={signup}>
          {isLoading ? <Loader /> : "CRIAR CONTA"}
        </Button>
      </Form>
    </Container>
  );
}
