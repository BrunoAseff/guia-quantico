import styled from "styled-components";
import { useRouter } from "next/navigation";

export const Button1 = styled.button`
display: flex;
text-align: center;
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

const Button2 = styled.button`
display: flex;
text-align: center;
font-weight: 300;
color: white;
font-size: 14px;
padding: 11px 23px;
margin-right: 100px;
display: flex;
border-style: solid;
border-radius: 8px;
border-color: white;
box-shadow: 0px 0px 5px rgba(255, 255, 255, 0.3);
background: rgba(255, 255, 255, 0);
border-width: 1px;

&:hover{
  cursor: pointer;
  background: white;
  color: black;
}
}
`;

const Div = styled.div`
  display: flex;
  justify-content: flex-end;
  position: relative;
  z-index: 2; /* Deve estar acima das estrelas */
  padding-top: 50px;
`;

export default function Header() {
  const router = useRouter();

  return (
    <Div>
      <Button1 onClick={() => router.push("/login")}>Entrar</Button1>

      <Button2 onClick={() => router.push("/cadastro")}>Criar Conta</Button2>
    </Div>
  );
}
