import styled from "styled-components";

export const CompleteButton = styled.button`
  position: relative;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 10px 20px;
  background-color: white;
  color: black;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    box-shadow: 0px 0px 5px rgba(255, 255, 255, 0.3);
  }
`;
