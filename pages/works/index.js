import Layout from "../../src/components/layout";
import Portfolio from "../../src/components/portfolio";
import Head from "next/head";
import DATA from "../../cards/cases.json";

const Works = ({ cards }) => {
  return (
    <>
      <Head>
        <title>Works - Alpine Design</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout isFooter isWorks>
        <Portfolio options={cards} />
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

export default Works;
