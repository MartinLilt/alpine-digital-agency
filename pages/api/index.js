export async function getStaticProps() {
  const cards = DATA;
  return {
    props: {
      cards,
    }, // will be passed to the page component as props
    revalidate: 10,
  };
}
