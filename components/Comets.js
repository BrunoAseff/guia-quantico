"use client";

import React, { useEffect, useRef } from "react";
import styled from "styled-components";

const Canvas = styled.canvas`
  display: flex;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  padding: 0;
  margin: 0;
  position: absolute;
  z-index: -1;
`;

const Comets = () => {
  const canvasRef = useRef(null);
  const maxComets = 3;
  const comets = [];

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const w = (canvas.width = window.innerWidth);
    const h = (canvas.height = window.innerHeight);

    function random(min, max) {
      if (arguments.length < 2) {
        max = min;
        min = 0;
      }

      if (min > max) {
        const hold = max;
        max = min;
        min = hold;
      }

      return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    class Comet {
      constructor() {
        this.x = random(0, w);
        this.y = random(-h, 0);
        this.length = random(0.5, 2);
        this.speed = random(2, 5);
        this.opacity = random(0.4, 0.9);
        this.angle = 20;
        this.color = "white";
      }

      draw() {
        ctx.save(); // Save the current state of the context
        ctx.shadowBlur = 10;
        ctx.shadowColor = "rgba(255, 255, 255, 0.8)";
        ctx.shadowOffsetX = 0;
        ctx.shadowOffsetY = 0;

        ctx.beginPath();
        ctx.moveTo(this.x, this.y);
        ctx.lineTo(
          this.x - this.length * Math.cos(this.angle),
          this.y - this.length * Math.sin(this.angle)
        );
        ctx.strokeStyle = this.color;
        ctx.lineWidth = 4;
        ctx.stroke();

        ctx.restore(); // Restore the state of the context
      }

      update() {
        this.x += this.speed * Math.cos(this.angle);
        this.y += this.speed * Math.sin(this.angle);

        if (this.y > h || this.x > w || this.x < 0) {
          this.x = random(0, w);
          this.y = random(-h, 0);
          this.length = random(0.5, 2);
          this.speed = random(2, 5);
          this.opacity = random(0.4, 0.9);
          this.angle = 20;
          this.color = "white";
        }
      }
    }

    for (let i = 0; i < maxComets; i++) {
      comets.push(new Comet());
    }

    function animation() {
      ctx.globalCompositeOperation = "source-over";
      ctx.globalAlpha = 1;
      ctx.fillStyle = "rgba(0, 0, 0, 1)"; // Solid background color
      ctx.fillRect(0, 0, w, h);

      ctx.globalCompositeOperation = "lighter";
      for (let i = 0; i < comets.length; i++) {
        comets[i].draw();
        comets[i].update();
      }

      requestAnimationFrame(animation);
    }

    animation();

    window.addEventListener("resize", () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    });

    return () => {
      window.removeEventListener("resize", () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      });
    };
  }, []);

  return <Canvas ref={canvasRef} />;
};

export default Comets;
