import Layout from "../../src/components/layout";
import Portfolio from "../../src/components/portfolio";
import Head from "next/head";

import PropTypes from "prop-types";
import React from "react";

export default function Works({ cards }) {
  return (
    <>
      <Head>
        <title>Works - Alpine Design</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div data-scroll-section>
        <Layout isFooter isWorks>
          <Portfolio options={cards} />
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

Works.propTypes = {
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      img: PropTypes.string.isRequired,
      imgs: PropTypes.arrayOf(
        PropTypes.shape({
          img: PropTypes.string.isRequired,
          desc: PropTypes.string.isRequired,
        })
      ),
      title: PropTypes.string.isRequired,
      desc: PropTypes.string.isRequired,
      client: PropTypes.string,
      agency: PropTypes.string,
      link: PropTypes.string,
    })
  ),
};

Works.defaultProps = {
  cards: [],
};
