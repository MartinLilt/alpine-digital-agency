import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { cursorTypes } from "../../../vars";

export const CursorContext = React.createContext();

const CursorProvider = ({ children }) => {
  const [cursorVariant, setCursorVariant] = useState("default");
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", mouseMove);
    return () => window.removeEventListener("mousemove", mouseMove);
  }, []);

  const textEnter = (type) => {
    if (
      type === cursorTypes.accentCursor ||
      type === cursorTypes.whiteCursor ||
      type === cursorTypes.backgroundCursor
    ) {
      setCursorVariant(type);
    } else {
      setCursorVariant("default");
    }
  };

  const textLeave = () => {
    setCursorVariant("default");
  };

  const variants = {
    default: {
      x: mousePosition.x - 8,
      y: mousePosition.y - 8,
      background: "#ffffff00",
      border: "1px solid #fff",

      transition: { duration: 0.15, ease: [0.25, 0.46, 0.45, 0.94] },
    },
    whiteCursor: {
      width: "48px",
      height: "48px",
      x: mousePosition.x - 24,
      y: mousePosition.y - 24,
      border: "2px solid #fff",
      background: "#ffffff00",

      transition: { duration: 0.15, ease: [0.25, 0.46, 0.45, 0.94] },
    },
    accentCursor: {
      width: "48px",
      height: "48px",
      x: mousePosition.x - 24,
      y: mousePosition.y - 24,
      border: "2px solid #d12245",
      background: "#ffffff00",

      transition: { duration: 0.15, ease: [0.25, 0.46, 0.45, 0.94] },
    },
    backgroundCursor: {
      width: "96px",
      height: "96px",
      x: mousePosition.x - 48,
      y: mousePosition.y - 48,
      border: "2px solid #ffffff00",
      background: "#d12245",
      backgroundImage: "url(/cursor.svg)",
      backgroundRepeat: "no-repeat",

      transition: { duration: 0.15, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  };

  return (
    <CursorContext.Provider value={{ textEnter, textLeave }}>
      {children}
      <motion.div
        animate={cursorVariant}
        variants={variants}
        className="cursor"
      ></motion.div>
    </CursorContext.Provider>
  );
};

export default React.memo(CursorProvider);
