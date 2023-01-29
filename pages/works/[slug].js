import Layout from "../../src/components/layout";
import Image from "next/image";
import styled from "styled-components";
import DATA from "../../cards/cases.json";

const WorkCase = ({ card }) => {
  const { img, imgs, title, desc, client, agency, link } = card;
  const options = imgs || [];

  return (
    <Layout isWorks isWorksCategory>
      <section>
        <StyledCard>
          <StyledImage width={1600} height={1600} src={img} alt={title} />
        </StyledCard>
        <div className="container">
          <StyledTitle>{title}</StyledTitle>
          <StyledList>
            {desc && (
              <StyledCategory>
                <p>{desc}</p>
              </StyledCategory>
            )}
            {client && (
              <StyledCategory>
                <p>Client: {client}</p>
              </StyledCategory>
            )}
            {agency && (
              <StyledCategory>
                <p>Agency: {agency}</p>
              </StyledCategory>
            )}
            {link && (
              <StyledCategory>
                <a href={link} target="_blank" className="hover">
                  {link}
                </a>
              </StyledCategory>
            )}
          </StyledList>
          <ul>
            {options.map((item, id) => {
              return (
                <StyledPicture key={id}>
                  <StyledImage
                    width={1600}
                    height={1600}
                    src={item.img}
                    alt={item.desc}
                  />
                </StyledPicture>
              );
            })}
          </ul>
        </div>
      </section>
    </Layout>
  );
};

export const getStaticPaths = async () => {
  const cards = DATA;
  const paths = cards.map((c) => ({ params: { slug: c.tag } }));

  return { paths, fallback: "blocking" };
};

export const getStaticProps = async ({ params }) => {
  const cards = DATA;
  const card = cards.find((el) => el.tag === params.slug);

  return {
    props: {
      card,
    },
    revalidate: 10,
  };
};

export default WorkCase;

const StyledImage = styled(Image)`
  width: auto;
  height: inherit;
`;

const StyledCard = styled.div`
  position: relative;
  height: 100vh;
  width: max-content;

  &::after {
    position: absolute;
    content: "";
    left: 0;
    bottom: 0;
    width: 100vw;
    pointer-events: none;
    height: 50%;
    background: linear-gradient(180deg, rgba(34, 34, 34, 0), #222);
  }

  &::before {
    position: absolute;
    content: "";
    left: 0;
    bottom: 0;
    top: 0;
    width: 100vw;
    pointer-events: none;
    height: 70%;
    opacity: 80%;
    background: linear-gradient(0deg, rgba(34, 34, 34, 0), #222);
  }
`;

const StyledList = styled.ul`
  margin: 0 0 6rem 0;
  padding: 4rem 0 0 0;
`;

const StyledTitle = styled.h1`
  transform: translateY(-400%);
  font-size: 2.25rem;
  line-height: 2.5rem;
  color: var(--main-color);
  margin: 0;

  @media only screen and (min-width: 768px) {
    & {
      font-size: 4.5rem;
      line-height: 1;
    }
  }
`;

const StyledCategory = styled.li`
  font-size: 1.125rem;
  line-height: 1.75rem;
  color: var(--main-color);

  @media only screen and (min-width: 768px) {
    & {
      font-size: 1.5rem;
      line-height: 2rem;
    }
  }

  &:first-child {
    margin: 0 0 6rem 0;

    @media only screen and (min-width: 768px) {
      & {
        margin: 0 0 2rem 0;
      }
    }

    @media only screen and (min-width: 1280px) {
      & {
        margin: 0 0 4rem 0;
      }
    }
  }

  &:nth-child(n + 2) {
    margin: 0 0 2rem 0;
  }
`;

const StyledPicture = styled.li`
  &:not(:last-child) {
    margin: 0 0 4rem 0;
  }
`;
