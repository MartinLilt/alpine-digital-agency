import Header from "../header";
import Footer from "../footer";
import s from "./layout.module.css";
import PropTypes from "prop-types";
import React, { useRef } from "react";

const Layout = ({
  children,
  isHome,
  isFooter,
  isAbout,
  isWorks,
  isWorksCategory,
  textEnter,
  textLeave,
}) => {
  // const [windowHeight, setwindowHeight] = useState(0);
  const containerRef = useRef(null);
  // const elementRef = useRef(null);

  // useEffect(() => {
  //   const ref = elementRef.current;
  //   if (ref) {
  //     const rect = ref.getBoundingClientRect();
  //     const validValue = Number(rect.height.toFixed());
  //     setwindowHeight(validValue);
  //   }
  // }, []);

  return (
    <>
      <Header
        textEnter={textEnter}
        textLeave={textLeave}
        isHome={isHome}
        isAbout={isAbout}
        isWorks={isWorks}
        isWorksCategory={isWorksCategory}
      />
      <div ref={containerRef}>
        <main>{children}</main>
        {isFooter && <Footer textEnter={textEnter} textLeave={textLeave} />}
      </div>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  isHome: PropTypes.bool,
  isFooter: PropTypes.bool,
  isAbout: PropTypes.bool,
  isWorks: PropTypes.bool,
  isWorksCategory: PropTypes.bool,
  isFooterCategory: PropTypes.bool,
  textEnter: PropTypes.func.isRequired,
  textLeave: PropTypes.func.isRequired,
};

Layout.defaultProps = {
  isHome: false,
  isFooter: false,
  isAbout: false,
  isWorks: false,
  isWorksCategory: false,
  isFooterCategory: false,
};

export default React.memo(Layout);
