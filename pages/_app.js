import "../styles/globals.css";
import "tailwindcss/tailwind.css";
import localFont from "@next/font/local";
import PropTypes from "prop-types";
import { AnimatePresence } from "framer-motion";
import React from "react";
import CursorProvider from "../src/components/cursorProvider";

const myFont = localFont({
  src: "../src/assets/fonts/universFonts/UniversLT.ttf",
});

const App = ({ Component, pageProps }) => {
  return (
    <CursorProvider>
      <AnimatePresence mode="wait">
        <div className={myFont.className}>
          <Component {...pageProps} />
        </div>
      </AnimatePresence>
    </CursorProvider>
  );
};

App.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};

export default React.memo(App);
