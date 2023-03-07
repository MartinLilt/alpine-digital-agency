import "../styles/globals.css";
import "tailwindcss/tailwind.css";
import localFont from "@next/font/local";
import PropTypes from "prop-types";
import { animate, AnimatePresence } from "framer-motion";
import CursorProvider from "../src/components/cursorProvider";
import { ImageContext } from "../context/imageContext";
import { useState } from "react";
import Portal from "../src/components/portal";

const myFont = localFont({
  src: "../src/assets/fonts/universFonts/UniversLT.ttf",
});

export default function App({ Component, pageProps }) {
  const [animateImage, setAnimateImage] = useState("");

  return (
    <ImageContext.Provider value={[animateImage, setAnimateImage]}>
      <CursorProvider>
        <AnimatePresence mode="wait">
          <div className={myFont.className}>
            <div
              id="portal-container"
              style={{
                backgroundImage: `url(${animateImage})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
                zIndex: `99999`,
              }}
            />
            <Component {...pageProps} />
          </div>
        </AnimatePresence>
      </CursorProvider>
    </ImageContext.Provider>
  );
}

App.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};
