"use client";

import {
  Container,
  Card,
  Title,
  TextContainer,
  StyledImage,
} from "../../aulas";

export default function Card_2() {
  return (
    <Container>
      <Card>
        <Title> Por que física quântica é tão difícil de entender?</Title>
        <TextContainer>
          <p>
            {" "}
            Antes de ir para o conteúdo principal, eu vou precisar te dar um
            choque de realidade: <br></br> <br></br>
            <strong
              style={{
                position: "relative",
                left: "35%",
              }}
            >
              Física quântica não faz sentido!
            </strong>
          </p>

          <p>
            Não espere que o que você aprender vá "fazer sentido". Se você usar
            a lógica do seu dia a dia, não vai conseguir entender nada. Física
            quântica não segue essa lógica.
          </p>

          <p>
            O nosso cérebro só consegue visualizar situações similares às que já
            tivemos contato na nossa vida.
          </p>

          <p>
            Por isso, em alguns momentos, tentar imaginar alguma teoria da
            física quântica vai se parecer com tentar imaginar uma cor que não
            existe: <strong>Impossível!</strong>
          </p>
          <StyledImage
            src="/intro-card2.gif"
            width={750}
            height={100}
            alt="Picture of the author"
          />
        </TextContainer>
      </Card>
    </Container>
  );
}
