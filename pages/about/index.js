import Layout from "../../src/components/layout";
import Info from "../../src/components/info";
import Head from "next/head";
import React from "react";

export default function About({ content }) {
  return (
    <>
      <Head>
        <title>About - Alpine Design</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div data-scroll-section>
        <Layout isAbout>
          <Info options={content} />
        </Layout>
      </div>
      ;
    </>
  );
}

export async function getStaticProps() {
  const res = await fetch(`http://${process.env.NEXT_PUBLIC_API}/api/about`);
  const content = await res.json();
  return {
    props: {
      content,
    }, // will be passed to the page component as props
    revalidate: 10,
  };
}
