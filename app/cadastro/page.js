"use client";

import { useState } from "react";
import styled from "styled-components";
import Logo from "../../components/Logo";
import { signup } from "../login/actions.js";
import { useRouter } from "next/navigation";
import { Button } from "../login/page";

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
  max-width: 430px;
  height: 45px;
  padding: 0 40px 0 10px;
  box-sizing: border-box;
  background: black;
  border: solid;
  border-radius: 10px;
  color: white;
  text-align: start;
  border: ${(props) => (props.hasError ? "2px solid #F31260" : "solid")};
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
  margin: 0px 0 5px 17px;
`;

const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  max-height: 100px;
  flex-direction: column;
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

const H1 = styled.h1`
  color: black;
  align-self: flex-start; /* Align text to the start of the card */
  font-weight: 700;
  font-size: 22px;
  margin-left: 17px;
`;

const ErrorMessage = styled.span`
  color: #f31260;
  font-size: 12px;
  margin: 0 0 10px 17px;
  align-self: flex-start;
  height: 10px; /* Espaço fixo para a mensagem de erro */
  visibility: ${(props) => (props.visible ? "visible" : "hidden")};
`;

export default function Cadastro() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!formData.name) newErrors.name = "Obrigatório";
    if (!formData.email) newErrors.email = "Obrigatório";
    if (!formData.password) newErrors.password = "Obrigatório";
    if (!formData.confirmPassword) newErrors.confirmPassword = "Obrigatório";
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPasswordMatch = "As senhas precisam ser idênticas";
    }

    if (Object.keys(newErrors).length === 0) {
      signup(formData);
    } else {
      setErrors(newErrors);
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
        <Input
          placeholder="Insira o seu nome"
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          hasError={!!errors.name}
        />
        <ErrorMessage visible={!!errors.name}>{errors.name}</ErrorMessage>

        <Label htmlFor="email">Email</Label>
        <Input
          placeholder="Insira o seu email"
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          required
          value={formData.email}
          onChange={handleChange}
          hasError={!!errors.email}
        />
        <ErrorMessage visible={!!errors.email}>{errors.email}</ErrorMessage>

        <Label>Senha</Label>
        <Input
          placeholder="Insira a sua senha"
          id="password"
          name="password"
          type="password"
          required
          value={formData.password}
          onChange={handleChange}
          hasError={!!errors.password}
        />
        <ErrorMessage visible={!!errors.password}>
          {errors.password}
        </ErrorMessage>

        <Label>Confirmar Senha</Label>
        <Input
          placeholder="Confirme sua senha"
          type="password"
          name="confirmPassword"
          required
          value={formData.confirmPassword}
          onChange={handleChange}
          hasError={!!errors.confirmPassword || !!errors.confirmPasswordMatch}
        />
        <ErrorMessage visible={!!errors.confirmPassword}>
          {errors.confirmPassword}
        </ErrorMessage>
        <ErrorMessage visible={!!errors.confirmPasswordMatch}>
          {errors.confirmPasswordMatch}
        </ErrorMessage>

        <A onClick={() => router.push("/login")}>Já tenho uma conta</A>
        <Button type="submit">CRIAR CONTA</Button>
      </Form>
    </Container>
  );
}
