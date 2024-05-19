"use client";

import React from "react";
import styled from "styled-components";
import Header from "../components/Header";
import Title from "../components/Title";
import GlassCard from "../components/GlassCard";
import GlobalStyle from "../components/GlobalStyles";

const Div = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: relative;
`;

const Content = styled.div`
  position: relative;
  z-index: 3;
`;

export default function Home() {
  return (
    <>
      <GlobalStyle />
      <Div>
        <Header />
        <Content>
          <Title></Title>
          <GlassCard />
        </Content>
      </Div>
    </>
  );
}
