import Head from "next/head";
import Layout from "../src/components/layout";
import Hero from "../src/components/hero";
import DATA from "../cards/cases.json";
import React from "react";

const Home = ({ cards }) => {
  return (
    <>
      <Head>
        <title>Home - Alpine Design</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout isFooter>
        <Hero options={cards} />
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
