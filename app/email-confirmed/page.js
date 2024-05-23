"use client";

import styled from "styled-components";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 95vh;
  flex-direction: column;
`;

const Card = styled.div`
  width: 100%;
  max-width: 480px;
  height: 50vh;
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  flex-direction: column;
  align-items: center;
  border-radius: 8px;
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.1);
  padding: 10px;
  box-sizing: border-box;
  max-height: calc(100vh - 100px);
  mix-blend-mode: screen;
`;

const H1 = styled.h1`
  font-size: 30px;
  font-weight: 600;
`;

const P = styled.p`
  font-size: 20px;
  font-weight: 400;
`;

export const Button = styled.button`
display: flex;
text-align: center;
font-weight: 300;
background: white;
color: black;
font-size: 17px;
padding: 15px 21px;
margin-top: 5px;
border-radius: 8px;
display: flex;
border-style: solid;
box-shadow: 0px 0px 3px rgba(255, 255, 255, 0.3);
border-width: 1px;

&:hover{
  box-shadow: 0px 0px 13px rgba(0, 0, 0, 0.9);
  cursor: pointer;

}
}
`;
export default function Verify() {
  const router = useRouter();

  return (
    <Container>
      <Card>
        <Image
          src="emailconfirmed.svg"
          alt="Email icon"
          width={170}
          height={170}
        />
        <H1>O seu email foi confirmado!</H1>
        <P>
          Sua conta foi criada com sucesso. Clique no botão abaixo para começar
          a estudar.
        </P>
        <Button onClick={() => router.push("/login")}>Começar a estudar</Button>
      </Card>
    </Container>
  );
}
