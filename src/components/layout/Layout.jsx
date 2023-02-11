import Header from "../header";
import Footer from "../footer";
import Link from "next/link";
import s from "./layout.module.css";
import PropTypes from "prop-types";
import { useRef } from "react";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";

const Layout = ({
  children,
  isFooter,
  isAbout,
  isWorks,
  isWorksCategory,
  isFooterCategory,
}) => {
  const containerRef = useRef(null);

  return (
    <>
      <LocomotiveScrollProvider
        options={{
          smooth: true,
          // ... all available Locomotive Scroll instance options
        }}
        watch={
          [
            //..all the dependencies you want to watch to update the scroll.
            //  Basicaly, you would want to watch page/location changes
            //  For exemple, on Next.js you would want to watch properties like `router.asPath` (you may want to add more criterias if the instance should be update on locations with query parameters)
          ]
        }
        containerRef={containerRef}
      >
        <Header
          isAbout={isAbout}
          isWorks={isWorks}
          isWorksCategory={isWorksCategory}
        />
        <div data-scroll-container ref={containerRef}>
          <main>{children}</main>
          {isFooter ? <Footer /> : null}
          {isFooterCategory ? (
            <footer className={s.footer}>
              <div className={`${s.flex} container`}>
                <Link href={`/works`}>Next project_</Link>
              </div>
            </footer>
          ) : null}
        </div>
      </LocomotiveScrollProvider>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  isFooter: PropTypes.bool,
  isAbout: PropTypes.bool,
  isWorks: PropTypes.bool,
  isWorksCategory: PropTypes.bool,
  isFooterCategory: PropTypes.bool,
};

Layout.defaultProps = {
  isFooter: false,
  isAbout: false,
  isWorks: false,
  isWorksCategory: false,
  isFooterCategory: false,
};

export default Layout;
