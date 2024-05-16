import styled from "styled-components";

const H1 = styled.h1`
  color: white;
  font-size: 70px;
  font-weight: 900;
  position: relative;
  text-align: center;
  aligh-items: center;
  padding-top: 40px;
  z-index: 3; /* Conteúdo adicional acima das estrelas e do header, se necessário */
`;

const P = styled.p`
  color: rgb(243, 244, 246);
  font-size: 22px;
  font-weight: 300;
  position: relative;
  text-align: center;
  aligh-items: center;
  padding-top: 20px;
  z-index: 3;
`;

export default function Title() {
  return (
    <>
      <H1>Guia Quântico</H1>
      <P>
        Um guia básico que vai facilitar o seu entendimento em física quântica.
      </P>
    </>
  );
}
