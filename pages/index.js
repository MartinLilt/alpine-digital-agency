import Head from "next/head";
import Layout from "../src/components/layout";
import Hero from "../src/components/hero";
import React from "react";

export default function Home({ cards }) {
  return (
    <>
      <Head>
        <title>Home - Alpine Design</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div data-scroll-section>
        <Layout isHome isFooter>
          <Hero options={cards} />
        </Layout>
      </div>
    </>
  );
}

export async function getStaticProps() {
  const res = await fetch(`http://${process.env.NEXT_PUBLIC_API}/api`);
  const cards = await res.json();
  return {
    props: {
      cards,
    }, // will be passed to the page component as props
    revalidate: 10,
  };
}
