import Image from "next/image";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 30px 0 30px;
`;

const Button = styled.button`
display: flex;
text-align: center;
align-items: center;
font-weight: 300;
background: white;
color: black;
font-size: 14px;
padding: 11px 23px;
margin-right: 20px;
border-radius: 8px;
display: flex;
border-style: solid;
box-shadow: 0px 0px 5px rgba(255, 255, 255, 0.3);
border-width: 1px;

&:hover{
  box-shadow: 0px 0px 13px rgba(255, 255, 255, 0.3);
  cursor: pointer;

}
}
`;

const H1 = styled.h1`
  color: white;
`;

export default function Dashboard_header() {
  return (
    <Container>
      <H1>Olá, Maitê!</H1>
      <Button>
        <Image
          style={{ marginRight: "8px" }}
          src="sair.svg"
          alt="Email icon"
          width={10}
          height={10}
        />
        Sair
      </Button>
    </Container>
  );
}
