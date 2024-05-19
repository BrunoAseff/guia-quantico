import styled from "styled-components";

const Container = styled.div`
  display: flex;
  margin: 50px;
  color: ${(props) => props.cor};
  font-weight: 700;
  position: relative;
`;

const Svg = styled.svg`
  display: flex;
  justify-content: flex-start;
`;

const H1 = styled.h1`
  margin: 0 0 0 15px;
`;

export default function Logo(cor) {
  return (
    <Container>
      <Svg
        width="50"
        height="50"
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {" "}
        <g clip-path="url(#clip0_235_973)">
          {" "}
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M100 -4.37114e-06C155.228 -6.78525e-06 200 44.7715 200 100C200 155.228 155.228 200 100 200C44.7715 200 5.67237e-06 155.228 3.25826e-06 100C8.44143e-07 44.7715 44.7715 -1.95703e-06 100 -4.37114e-06ZM100 -4.37114e-06C138.108 -6.03688e-06 169 30.8923 169 69C169 107.108 138.108 138 100 138C61.8924 138 31 107.108 31 69C31 30.8923 61.8924 -2.7054e-06 100 -4.37114e-06ZM132 69C132 51.3269 117.673 37 100 37C82.3269 37 68 51.3269 68 69C68 86.6731 82.3269 101 100 101C117.673 101 132 86.6731 132 69Z"
            fill="url(#paint0_linear_235_973)"
          />{" "}
        </g>{" "}
        <defs>
          {" "}
          <linearGradient
            id="paint0_linear_235_973"
            x1="-9.344e-06"
            y1="23"
            x2="152.5"
            y2="160.5"
            gradientUnits="userSpaceOnUse"
          >
            {" "}
            <stop stop-color="black" /> <stop offset="1" stop-color="black" />{" "}
          </linearGradient>{" "}
          <clipPath id="clip0_235_973">
            {" "}
            <rect
              width="200"
              height="200"
              fill="black"
              transform="translate(7.62939e-06 200) rotate(-90)"
            />{" "}
          </clipPath>{" "}
        </defs>{" "}
      </Svg>
      <H1>Guia Quântico</H1>
    </Container>
  );
}
