import Header from "../header";
import Footer from "../footer";
import s from "./layout.module.css";
import PropTypes from "prop-types";
import React, { useRef, useEffect } from "react";

const Layout = ({
  children,
  isHome,
  isFooter,
  isAbout,
  isWorks,
  isWorksCategory,
}) => {
  const scrollWrapRef = useRef(null);
  const speed = 0.04;
  let offset = 0;
  let callScroll;

  useEffect(() => {
    const body = document.body;
    const scrollWrap = scrollWrapRef.current;
    const height = scrollWrap.getBoundingClientRect().height;

    body.style.height = Math.floor(height) + "px";

    function smoothScroll() {
      offset += (window.pageYOffset - offset) * speed;
      const scroll = `translateY(-${offset}px) translateZ(0)`;
      scrollWrap.style.transform = scroll;
      callScroll = requestAnimationFrame(smoothScroll);
    }

    smoothScroll();

    return () => cancelAnimationFrame(callScroll);
  }, [scrollWrapRef]);
  return (
    <>
      <Header
        isHome={isHome}
        isAbout={isAbout}
        isWorks={isWorks}
        isWorksCategory={isWorksCategory}
      />
      <div className="smooth-scroll-wrapper" ref={scrollWrapRef}>
        <main>{children}</main>
        {isFooter && <Footer />}
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
