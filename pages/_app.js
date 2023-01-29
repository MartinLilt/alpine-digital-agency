import "../styles/globals.css";
import "tailwindcss/tailwind.css";
import "normalize.css";
import localFont from "@next/font/local";
import dynamic from "next/dynamic";

const myFont = localFont({
  src: "../src/assets/fonts/universFonts/UniversLT.ttf",
});

const AnimatedCursor = dynamic(() => import("react-animated-cursor"), {
  ssr: false,
});

const App = ({ Component, pageProps }) => {
  return (
    <>
      <div className={myFont.className}>
        <Component {...pageProps} />
        <AnimatedCursor
          outerSize={25}
          outerAlpha={1}
          innerScale={0.7}
          outerScale={3}
          hasBlendMode={true}
          outerStyle={{
            border: "1px solid #fff",
            backgroundColor: "none",
          }}
          innerStyle={{
            backgroundColor: "var(--cursor-color)",
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
            ".hero_content",
          ]}
        />
      </div>
    </>
  );
};
export default App;
