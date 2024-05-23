import React from "react";
import styled, { keyframes } from "styled-components";

const l17 = keyframes`
  100% { background-size: 120% 100%; }
`;

const LoaderWrapper = styled.div`
  position: absolute; /* Ensure the loader is positioned absolutely within the button */
  display: flex;
  justify-content: center;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const LoaderDiv = styled.div`
  display: flex;
  position: relative;
  width: 60px;
  height: 10px;
  -webkit-mask: radial-gradient(circle closest-side, #000 94%, #0000) left/20%
    100%;
  background: linear-gradient(#000 0 0) left/0% 100% no-repeat #ddd;
  animation: ${l17} 2s infinite steps(6);
`;

const Loader = () => {
  return (
    <LoaderWrapper>
      <LoaderDiv />
    </LoaderWrapper>
  );
};

export default Loader;
