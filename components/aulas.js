import styled from "styled-components";
import Image from "next/image";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  max-width: 100%;
  margin: 0;
  overflow: hidden;
  max-height: 90vh;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 15vh;
  margin-bottom: 15vh;
  width: fit-content;
  max-width: 50vw;
  max-height: 68vh;
  height: auto;
  border-radius: 10px;
  border: 5px solid white;
  padding: 15px;
  background: white;
  overflow-x: hidden;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 10px;
  }
  &::-webkit-scrollbar-track {
    margin: 5px;
    background: transparent;
  }
  &::-webkit-scrollbar-thumb {
    background: black;
    border-radius: 200px;
  }
`;

export const MockCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 15vh;
  margin-bottom: 15vh;
  width: fit-content;
  max-width: 50vw;
  max-height: 68vh;
  height: auto;
  border-radius: 10px;
  border: 1px solid black;
  padding: 15px;
  background: white;
  overflow-x: hidden;
  overflow-y: auto;
`;

export const Title = styled.div`
  margin: 15px;
  color: black;
  font-size: 3.5vh;
  font-weight: 900;
  text-align: center;
`;

export const TextContainer = styled.div`
  padding: 13px;
  font-size: 2.2vh;
  color: black;
  font-weight: 500;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const StyledImage = styled(Image)`
  width: 100%;
  height: auto;
  object-fit: contain;
  &:hover {
    transform: scale(1.05);
    transition: transform 0.3s ease-in-out;
  }
`;
