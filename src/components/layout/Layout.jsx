import Header from "../header";
import Footer from "../footer";
import s from "./layout.module.css";
import React, { useRef } from "react";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";

export default function Layout({
  children,
  isHome,
  isFooter,
  isAbout,
  isWorks,
  isWorksCategory,
}) {
  const containerRef = useRef(null);
  return (
    <>
      <Header />
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
        <div data-scroll-container ref={containerRef}>
          <main>{children}</main>
          {isFooter && <Footer />}
        </div>
      </LocomotiveScrollProvider>
    </>
  );
}
