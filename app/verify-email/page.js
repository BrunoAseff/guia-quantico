"use client";

import styled from "styled-components";
import Image from "next/image";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 95vh;
`;

const Card = styled.div`
  width: 100%;
  max-width: 480px;
  height: auto;
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

export default function Verify() {
  return (
    <Container>
      <Card>
        <H1>Verifique o seu email!</H1>
        <P>
          Um email de verificação foi enviado para o seu email. Verifique para
          começar o curso.
        </P>

        <Image src="email.svg" alt="Email icon" width={170} height={170} />
      </Card>
    </Container>
  );
}
