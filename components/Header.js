import styled from "styled-components";

const Nav = styled.nav`
  display: flex;
  justify-content: space-evenly;
  padding: 7px 0px;
  border-style: solid;
  border-radius: 40px;
  border-color: rgb(75, 0, 130);
  background: rgba(255, 255, 255, 0);
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  border-width: 1px;
  width: 25%;
  margin: auto;
`;

const Text = styled.p`
display: flex;
justify-content: space-around;
text-align: center;
color: white;
padding: 15px;
}
`;

const Div = styled.div`
  position: relative;
  z-index: 2; /* Deve estar acima das estrelas */
  padding-top: 50px;
`;

export default function Header() {
  return (
    <Div>
      <Nav>
        <Text>Entrar</Text>
        <Text>Cadastro</Text>
      </Nav>
    </Div>
  );
}
