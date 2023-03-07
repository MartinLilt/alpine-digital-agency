import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { cursorTypes } from "../../../vars";
import { CursorContext } from "../../../context/cursorContext";
import gsap from "gsap";
import styled from "styled-components";

export default function CursorProvider({ children }) {
  const cursor = useRef(null);
  let [cursorVariant, setCursorVariant] = useState(cursorTypes.default);

  useEffect(() => {
    gsap.set(cursor.current, { xPercent: -50, yPercent: -50 });

    const ball = cursor.current;
    const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const mouse = { x: pos.x, y: pos.y };
    const speed = 0.2;

    const xSet = gsap.quickSetter(ball, "x", "px");
    const ySet = gsap.quickSetter(ball, "y", "px");

    const mouseMove = (e) => {
      mouse.x = e.x;
      mouse.y = e.y;
    };

    window.addEventListener("mousemove", mouseMove);

    gsap.ticker.add(() => {
      // adjust speed for higher refresh monitors
      const dt = 1.0 - Math.pow(1.0 - speed, gsap.ticker.deltaRatio());

      pos.x += (mouse.x - pos.x) * dt;
      pos.y += (mouse.y - pos.y) * dt;
      xSet(pos.x);
      ySet(pos.y);
    });

    return () => window.removeEventListener("mousemove", mouseMove);
  }, []);

  const variants = {
    default: {
      width: "24px",
      height: "24px",
      background: "#ffffff00",
      border: "1px solid #fff",
      transition: "color 0.3s ease",
    },
    whiteCursor: {
      width: "48px",
      height: "48px",
      border: "2px solid #fff",
      background: "#ffffff00",
      transition: "color 0.3s ease",
    },
    accentCursor: {
      width: "48px",
      height: "48px",
      border: "2px solid #d12245",
      background: "#ffffff00",
      transition: "color 0.3s ease",
    },
    backgroundCursor: {
      width: "96px",
      height: "96px",
      border: "2px solid #ffffff00",
      background: "#d12245",
      backgroundImage: "url(/cursor.svg)",
      backgroundRepeat: "no-repeat",
      transition: "color 0.3s ease",
    },
  };

  return (
    <CursorContext.Provider value={[cursorVariant, setCursorVariant]}>
      {children}
      <StyledCursor
        ref={cursor}
        animate={cursorVariant}
        variants={variants}
      ></StyledCursor>
    </CursorContext.Provider>
  );
}

const StyledCursor = styled(motion.div)`
  display: none;
  background-position: center !important;
  background-size: 35% !important;
  position: fixed;
  top: 0;
  left: 0;
  border-radius: 50%;
  pointer-events: none;
  z-index: 99999;

  @media only screen and (min-width: 768px) {
    & {
      display: block;
    }
  }
`;
