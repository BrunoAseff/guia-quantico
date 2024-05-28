import React, { useEffect } from "react";
import styled from "styled-components";
import anime from "animejs";

const WaveContainer = styled.div`
  width: 100%;
  height: 100px;
  position: relative;
  overflow: hidden;
`;

const WavePath = styled.svg`
  position: absolute;
  width: 200%;
  height: 100%;
`;

const generateSineWavePath = (width, height, frequency, amplitude, phase) => {
  const points = [];
  for (let x = 0; x <= width; x += 1) {
    const y =
      height / 2 +
      amplitude * Math.sin((2 * Math.PI * frequency * x) / width + phase);
    points.push(`${x},${y}`);
  }
  return `M${points.join(" L")}`;
};

const Card_1_animation = () => {
  const width = 600;
  const height = 200;
  const frequency = 60; // Number of waves across the width
  const amplitude = 70; // Height of the wave
  const phase = 0;

  useEffect(() => {
    anime({
      targets: "#sine-wave path",
      translateX: ["0%", "-90%"],
      easing: "linear",
      duration: 15000,
      loop: true,
    });
  }, [width]);

  const pathData = generateSineWavePath(
    width * 4,
    height,
    frequency,
    amplitude,
    phase
  );

  return (
    <WaveContainer>
      <WavePath
        viewBox={`0 0 ${width * 2} ${height}`}
        preserveAspectRatio="none"
        id="sine-wave"
      >
        <path d={pathData} stroke="black" strokeWidth="3" fill="none" />
      </WavePath>
    </WaveContainer>
  );
};

export default Card_1_animation;
