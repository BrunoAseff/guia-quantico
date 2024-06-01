import White_logo from "../components/White_logo";
import styled from "styled-components";
import { useRouter } from "next/navigation";

const Div = styled.div`
  display: flex;
  justify-content: center;
  padding: 17px;
`;
const Container = styled.div`
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  z-index: 1000;
`;

const Button = styled.button`
  background: black;
  color: white;
  font-size: 12px;
  font-weight: 300;
  padding: 10px 23px;
  border-radius: 8px;
  border: solid white 1px;
  mix-blend-mode: screen;

  &:hover {
    box-shadow: 0px 0px 5px rgba(255, 255, 255, 0.3);
    transition: box-shadow 0.3s ease;

    cursor: pointer;
  }
`;

export default function Aulas_header() {
  const router = useRouter();

  return (
    <Div>
      <Container>
        <White_logo />
        <Button onClick={() => router.push("/dashboard")}>
          Voltar ao dashboard
        </Button>
      </Container>
    </Div>
  );
}
