import styled from "styled-components";

const P = styled.p`
  color: white;
  font-size: 100px;
  font-weight: 600;
  position: relative;
  z-index: 3; /* Conteúdo adicional acima das estrelas e do header, se necessário */
`;

export default function Title() {
  return (
    <>
      <P>Guia Quântico</P>
    </>
  );
}
