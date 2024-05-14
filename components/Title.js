import styled from "styled-components";

const H1 = styled.h1`
  color: white;
  font-size: 70px;
  font-weight: 600;
  position: relative;
  text-shadow: 0px 0px 13px rgba(255, 255, 255, 0.3);
  text-align: center;
  aligh-items: center;
  padding-top: 40px;
  z-index: 3; /* Conteúdo adicional acima das estrelas e do header, se necessário */
`;

const P = styled.p`
  color: rgb(243, 244, 246);
  font-size: 25px;
  font-weight: 100;
  position: relative;
  text-align: center;
  aligh-items: center;
  padding-top: 40px;
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
