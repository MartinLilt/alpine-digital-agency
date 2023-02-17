import Head from "next/head";
import Layout from "../src/components/layout";
import Hero from "../src/components/hero";
import DATA from "../cards/cases.json";
import React from "react";

const Home = ({ cards, textEnter, textLeave }) => {
  return (
    <>
      <Head>
        <title>Home - Alpine Design</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout isHome isFooter textEnter={textEnter} textLeave={textLeave}>
        <Hero options={cards} textEnter={textEnter} textLeave={textLeave} />
      </Layout>
    </>
  );
};

export default React.memo(Home);

export async function getStaticProps() {
  const cards = DATA;
  return {
    props: {
      cards,
    }, // will be passed to the page component as props
    revalidate: 10,
  };
}
