import "../styles/globals.css";
import "tailwindcss/tailwind.css";
import localFont from "@next/font/local";
import PropTypes from "prop-types";
import { AnimatePresence } from "framer-motion";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { cursorTypes } from "../vars";

const myFont = localFont({
  src: "../src/assets/fonts/universFonts/UniversLT.ttf",
});

const App = ({ Component, pageProps }) => {
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
      backgroundPosition: "center",
      backgroundSize: "100%",
      transition: { duration: 0.15, ease: [0.17, 0.67, 0.83, 0.67] },
    },
    whiteCursor: {
      width: "48px",
      height: "48px",
      x: mousePosition.x - 24,
      y: mousePosition.y - 24,
      border: "2px solid #fff",
      background: "#ffffff00",
      backgroundPosition: "center",
      backgroundSize: "100%",
      transition: { duration: 0.15, ease: [0.17, 0.67, 0.83, 0.67] },
    },
    accentCursor: {
      width: "48px",
      height: "48px",
      x: mousePosition.x - 24,
      y: mousePosition.y - 24,
      border: "2px solid #d12245",
      background: "#ffffff00",
      backgroundPosition: "center",
      backgroundSize: "100%",
      transition: { duration: 0.15, ease: [0.17, 0.67, 0.83, 0.67] },
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
      backgroundPosition: "center",
      backgroundSize: "35%",
      transition: { duration: 0.15, ease: [0.17, 0.67, 0.83, 0.67] },
    },
  };

  return (
    <AnimatePresence>
      <div className={myFont.className}>
        <Component {...pageProps} textEnter={textEnter} textLeave={textLeave} />
        <motion.div
          animate={cursorVariant}
          variants={variants}
          className="cursor"
        ></motion.div>
      </div>
    </AnimatePresence>
  );
};

App.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};

export default React.memo(App);
