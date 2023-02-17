import Layout from "../../src/components/layout";
import Portfolio from "../../src/components/portfolio";
import Head from "next/head";
import DATA from "../../cards/cases.json";
import PropTypes from "prop-types";
import React from "react";

const Works = ({ cards, textEnter, textLeave }) => {
  return (
    <>
      <Head>
        <title>Works - Alpine Design</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout isFooter isWorks textEnter={textEnter} textLeave={textLeave}>
        <Portfolio
          options={cards}
          textEnter={textEnter}
          textLeave={textLeave}
        />
      </Layout>
    </>
  );
};

export async function getStaticProps() {
  const cards = DATA;
  // const randomCard = cards.find((card) => card.id === 22);

  return {
    props: {
      cards,
      // randomCard,
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

export default React.memo(Works);
