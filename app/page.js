"use client";

import React from "react";
import styled from "styled-components";
import Stars from "../components/stars";
import Header from "../components/Header";
import Title from "../components/Title";
import GlobalStyle from "../components/GlobalStyles";

const Div = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: relative;
`;

const Content = styled.div`
  position: relative;
  z-index: 3; /* Conteúdo adicional acima das estrelas e do header, se necessário */
`;

export default function Cadastro() {
  return (
    <>
      <GlobalStyle />
      <Div>
        <Stars />
        <Header />
        <Content>
          <Title></Title>
        </Content>
      </Div>
    </>
  );
}
