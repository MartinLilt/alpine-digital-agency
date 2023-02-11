import "../styles/globals.css";
import "tailwindcss/tailwind.css";
import "normalize.css";
import localFont from "@next/font/local";
import PropTypes from "prop-types";
import dynamic from "next/dynamic";
import { AnimatePresence } from "framer-motion";

const AnimatedCursor = dynamic(() => import("react-animated-cursor"), {
  ssr: false,
});

const myFont = localFont({
  src: "../src/assets/fonts/universFonts/UniversLT.ttf",
});

const App = ({ Component, pageProps }) => {
  return (
    <>
      <div className={myFont.className}>
        <Component {...pageProps} />
        <AnimatedCursor
          innerSize={8}
          outerSize={48}
          outerAlpha={0}
          innerScale={0.1}
          outerScale={2}
          outerStyle={{
            border: "0.1rem solid #fff",
          }}
          innerStyle={{
            backgroundColor: "transparent",
          }}
          clickables={[
            "a",
            'input[type="text"]',
            'input[type="email"]',
            'input[type="number"]',
            'input[type="submit"]',
            'input[type="image"]',
            "label[for]",
            "select",
            "textarea",
            "button",
            ".link",
          ]}
        />
      </div>
    </>
  );
};

App.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};

export default App;
