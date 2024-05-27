"use client";

import styled from "styled-components";
import Dashboard_header from "@/components/Dashboard_header";
import Link from "next/link";

const Container = styled.div`
  width: 140%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  position: fixed;
`;

const Lines = styled.svg`
  position: absolute;
  width: 100%;
  height: 100%;
`;

const Circles = styled.svg`
  position: absolute;
  width: 100%;
  height: 100%;
  filter: url(#shadow);
  &:hover {
    color: blue;
  }
`;

const Circle = styled.circle`
  fill: white;
  transition: fill 0.3s;

  &:hover {
    cursor: pointer;
    r: 7;
  }
`;

const Text = styled.div`
  position: absolute;
  color: white;
`;

const texts = [
  { x: "8%", y: "55%", content: "Introdução" },
  { x: "18%", y: "35%", content: "Princípios Fundamentais" },
  { x: "28%", y: "65%", content: "Interpretações" },
  { x: "38%", y: "50%", content: "Partículas" },
  { x: "48%", y: "30%", content: "Campos e Forças" },
  { x: "58%", y: "70%", content: "Tópicos Avançados" },
];

export default function Dashboard() {
  return (
    <>
      <Dashboard_header></Dashboard_header>
      <Container>
        <Lines xmlns="http://www.w3.org/2000/svg">
          {/* Linhas conectando as estrelas */}
          <line
            x1="10%"
            y1="50%"
            x2="20%"
            y2="40%"
            style={{ stroke: "white", strokeWidth: 2 }}
          />
          <line
            x1="20%"
            y1="40%"
            x2="30%"
            y2="60%"
            style={{ stroke: "white", strokeWidth: 2 }}
          />
          <line
            x1="30%"
            y1="60%"
            x2="40%"
            y2="45%"
            style={{ stroke: "white", strokeWidth: 2 }}
          />
          <line
            x1="40%"
            y1="45%"
            x2="50%"
            y2="35%"
            style={{ stroke: "white", strokeWidth: 2 }}
          />
          <line
            x1="50%"
            y1="35%"
            x2="60%"
            y2="65%"
            style={{ stroke: "white", strokeWidth: 2 }}
          />
        </Lines>
        <Circles xmlns="http://www.w3.org/2000/svg">
          {/* Definição de filtro para sombra */}
          <defs>
            <filter id="shadow" x="-50%" y="-50%" width="200%" height="200%">
              <feDropShadow dx="0" dy="0" stdDeviation="3" floodColor="white" />
            </filter>
          </defs>
          {/* Estrelas */}
          <Link href="/dashboard/intro">
            <Circle cx="10%" cy="50%" r="5" fill="white" />
          </Link>
          <Link href="/dashboard/principios-fundamentais">
            <Circle cx="20%" cy="40%" r="5" fill="white" />
          </Link>
          <Link href="/dashboard/interpretacoes">
            <Circle cx="30%" cy="60%" r="5" fill="white" />
          </Link>
          <Link href="/dashboard/particulas">
            <Circle cx="40%" cy="45%" r="5" fill="white" />
          </Link>
          <Link href="/dashboard/campos-e-forcas">
            <Circle cx="50%" cy="35%" r="5" fill="white" />
          </Link>
          <Link href="/dashboard/topicos-avancados">
            <Circle cx="60%" cy="65%" r="5" fill="white" />
          </Link>
        </Circles>
        {texts.map((text, index) => (
          <Text key={index} style={{ left: text.x, top: text.y }}>
            {text.content}
          </Text>
        ))}
      </Container>
    </>
  );
}
