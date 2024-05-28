import styled from "styled-components";

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
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 15vh;
  margin-bottom: 15vh;
  width: fit content;
  max-width: 48%;
  max-height: 70vh;
  height: fit-content;
  border-radius: 10px;
  border: 1px solid white;
  padding: 10px 30px 30px 30px;
  background: white;
  overflow-x: hidden;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 4px;
    margin: 20px;
  }
  &::-webkit-scrollbar-track {
    background: transparent;
    border-radius: 10px;
  }
  &::-webkit-scrollbar-thumb {
    background: black;
    border-radius: 10px;
  }
`;

export const Title = styled.div`
  color: black;
  font-size: 3.5vh;
  padding: 15px;
  font-weight: 900;
  text-align: center;
  flex-shrink: 1;
`;

export const TextContainer = styled.div`
  position: relative;
  flex: 1;
  padding: 10px 20px;
  background: white;
  border-radius: 10px;
  border: black solid 3px;
  font-size: 2.2vh;
  color: black;
  font-weight: 600;
  max-width: 100%;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
