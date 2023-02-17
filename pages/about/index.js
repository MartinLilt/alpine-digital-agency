import Layout from "../../src/components/layout";
import Info from "../../src/components/info";
import Head from "next/head";
import React from "react";

const About = ({ textEnter, textLeave }) => {
  return (
    <>
      <Head>
        <title>About - Alpine Design</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout isAbout textEnter={textEnter} textLeave={textLeave}>
        <Info textEnter={textEnter} textLeave={textLeave} />
      </Layout>
      ;
    </>
  );
};
export default React.memo(About);

// About
// We do
// Brand Identity, Design Systems, Creative, Artwork, User Experience, User Interface, Websites, Applications

// For people like
// HSBC, Feefo, ASOS, Matter, HTC, Havas, Turkish Airlines, Schweppes

// How we do it
// Value through quality. Lean & Agile.

// Less of the agency, more results.

// Get in touch
// studio@alpineldn.com
