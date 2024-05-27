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
  margin-top: 10vh; /* Use viewport height for top margin */
  max-width: 60vw;
  max-height: 72vh;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  border: 1px solid white;
  padding: 10px 30px 30px 30px;
  background: white;
  box-sizing: border-box;
`;

export const Title = styled.div`
  color: black;
  font-size: 3.5vh;
  padding: 15px;
  font-weight: 900;
  text-align: center;
`;

export const TextContainer = styled.div`
  padding: 5px 20px;
  background: white;
  border-radius: 10px;
  border: black solid 3px;
  font-size: 2.3vh; /* Use viewport height for font size */
  color: black;
  font-weight: 600;
`;
