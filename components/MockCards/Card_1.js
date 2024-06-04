import { Container, MockCard, Title, TextContainer } from "../aulas";
import styled from "styled-components";

const Wrapper = styled.div`
  max-width: 40vw;
  position: fixed;
  bottom: 50%;
  left: 0%;
`;
export default function Card_1() {
  return (
    <Wrapper>
      <Container>
        <MockCard>
          <Title>量子物理学とは何ですか?</Title>
          <TextContainer>
            <p>
              ファインダーで事が違う物理学的な尺度では、物理学的な通常とは非常に異なる方法で事が進みます。それほど異なるので、この尺度を研究するために物理学の分野を作る必要がありました：量子物理学です！したがって、量子物理学は、原子や光子などの宇宙の最も小さな粒子の振る舞いの研究です。
            </p>
          </TextContainer>
        </MockCard>
      </Container>
    </Wrapper>
  );
}
