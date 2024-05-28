import styled, { keyframes } from "styled-components";

const Container = styled.div`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 45vw;
  height: auto;
  filter: drop-shadow(0px 0px 13px rgba(255, 255, 255, 0.1));
`;

const Proton = styled.div`
  width: 130px;
  height: 130px;
  position: relative;
  &:hover {
    cursor: pointer;
  }
  &::before {
    content: "";
    position: absolute;
    width: 50px;
    height: 50px;
    left: 50%;
    top: 50%;
    border-radius: 50%;
    transform: translate(-50%, -50%);
    background: black;
  }
`;

const electron_1 = keyframes`
  0%, 100% { left: 50%; top: 60%; transform: scale(1); opacity: 1; }
  12% { left: 85%; top: 58%; }
  21% { left: 90%; top: 55%; }
  25% { left: 95%; top: 50%; transform: scale(0.9); opacity: 1; }
  29% { left: 90%; top: 45%; }
  38% { left: 85%; top: 42%; }
  50% { left: 50%; top: 40%; transform: scale(0.8); opacity: 1; }
  62% { left: 10%; top: 42%; }
  71% { left: 5%; top: 45%; }
  75% { left: 0%; top: 50%; transform: scale(0.9); opacity: 1; }
  79% { left: 5%; top: 55%; }
  88% { left: 10%; top: 58%; }
`;

const electron_2 = keyframes`
  0%, 100% { left: 15.5%; top: 83.5%; transform: scale(0.9); }
  4% { left: 14%; top: 80%; }
  13% { left: 18%; top: 60%; }
  25% { left: 35%; top: 35%; transform: scale(0.8); opacity: 1; }
  37% { left: 60%; top: 18%; }
  46% { left: 80%; top: 14%; }
  50% { left: 83.5%; top: 15.5%; transform: scale(0.9); opacity: 1; }
  54% { left: 84%; top: 21%; }
  63% { left: 82%; top: 38%; }
  75% { left: 65%; top: 65%; transform: scale(1); }
  87% { left: 38%; top: 82%; }
  96% { left: 21%; top: 84%; }
`;

const electron_3 = keyframes`
  0%, 100% { left: 15.5%; top: 15.5%; transform: scale(0.9); }
  4% { left: 18%; top: 19%; }
  13% { left: 25%; top: 37%; }
  25% { left: 47%; top: 58%; transform: scale(0.8); }
  37% { left: 63%; top: 69%; }
  46% { left: 79%; top: 80%; }
  50% { left: 83.5%; top: 83.5%; transform: scale(0.9); opacity: 1; }
  54% { left: 80%; top: 79%; }
  63% { left: 69%; top: 63%; }
  75% { left: 58%; top: 47%; transform: scale(1); opacity: 1; }
  87% { left: 37%; top: 25%; }
  96% { left: 19%; top: 18%; }
`;

const Electron1 = styled.div`
  position: absolute;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: black;
  animation: ${electron_1} 1.5s linear infinite;
`;

const Electron2 = styled.div`
  position: absolute;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: black;
  animation: ${electron_2} 1.5s linear infinite;
`;

const Electron3 = styled.div`
  position: absolute;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: black;
  animation: ${electron_3} 1.5s linear infinite;
`;

export default function Card_1_animation() {
  return (
    <Container>
      <Proton>
        <Electron1 />
        <Electron2 />
        <Electron3 />
      </Proton>
    </Container>
  );
}
