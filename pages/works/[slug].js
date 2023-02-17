import Layout from "../../src/components/layout";
import Image from "next/image";
import styled from "styled-components";
import DATA from "../../cards/cases.json";
import PropTypes from "prop-types";
import React, { useEffect } from "react";
import { motion } from "framer-motion";

import NextProject from "../../src/components/nextProject";
import { cursorTypes } from "../../vars";

const WorkCase = ({ card, textEnter, textLeave }) => {
  const { img, imgs, title, desc, client, agency, link } = card;
  const options = imgs || [];

  useEffect(() => {
    textEnter("default");
  }, []);

  return (
    <>
      <Layout
        isWorks
        isWorksCategory
        isFooterCategory
        textEnter={textEnter}
        textLeave={textLeave}
      >
        <section>
          <div
            style={{
              backgroundImage: `linear-gradient(0deg, rgba(34, 34, 34, 0), #22222285), linear-gradient(180deg, rgba(34, 34, 34, 0), #222), url(${img})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
              width: "100%",
              height: "100vh",
            }}
          ></div>
          <div className="container">
            <StyledTitle
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, translateY: "-10rem" }}
              transition={{
                delay: 0.5,
                ease: "easeInOut",
              }}
            >
              {title}
            </StyledTitle>
            <StyledContent>
              {client && <li>Client: {client}</li>}
              {agency && <li>Agency: {agency}</li>}
              {desc && <li>{desc}</li>}
              {link && (
                <li
                  className="hover"
                  onMouseEnter={() => textEnter(cursorTypes.whiteCursor)}
                  onMouseLeave={textLeave}
                >
                  <a href={link} target="_blank" rel="noopener noreferrer">
                    {link}
                  </a>
                </li>
              )}
            </StyledContent>
            <ul>
              {options?.map((item, id) => {
                return (
                  <StyledImage
                    key={id}
                    style={{
                      backgroundImage: `url(${item.img})`,
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      width: "100%",
                      aspectRatio: "16/9",
                    }}
                  ></StyledImage>
                );
              })}
            </ul>
            <NextProject textEnter={textEnter} textLeave={textLeave} />
          </div>
        </section>
      </Layout>
    </>
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

const StyledImage = styled.li`
  &:not(:last-child) {
    margin: 0 0 3rem 0;
  }
`;

const StyledTitle = styled(motion.h2)`
  font-size: 2.25rem;
  line-height: 2.5rem;
  color: #fff;

  @media only screen and (min-width: 768px) {
    & {
      font-size: 4.5rem;
      line-height: 1;
    }
  }
`;

const StyledContent = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin: 0 0 3rem 0;
  font-size: 1.125rem;
  line-height: 1.75rem;
  color: #fff;

  & li:not(:last-child) {
    margin: 0 0 2rem 0;
  }

  @media only screen and (min-width: 768px) {
    & {
      font-size: 1.5rem;
      line-height: 2rem;
    }
  }
`;

WorkCase.propTypes = {
  card: PropTypes.shape({
    img: PropTypes.string.isRequired,
    imgs: PropTypes.arrayOf(
      PropTypes.shape({
        img: PropTypes.string.isRequired,
        desc: PropTypes.string,
      })
    ),
    title: PropTypes.string.isRequired,
    desc: PropTypes.string,
    client: PropTypes.string,
    agency: PropTypes.string,
    link: PropTypes.string,
  }).isRequired,
};

export default React.memo(WorkCase);
