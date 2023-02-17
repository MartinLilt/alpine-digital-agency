import s from "./hero.module.css";
import Link from "next/link";
import PropTypes from "prop-types";
import { motion, useAnimation } from "framer-motion";
import React, { useEffect } from "react";
import CardTemplate from "../card";
import { useInView } from "react-intersection-observer";
import { cursorTypes } from "../../../vars";

const SPECIFIC_CARD_IDS = [1, 2, 3, 4];

const Hero = ({ options, textEnter, textLeave }) => {
  const { ref, inView } = useInView({
    threshold: 0.2,
  });
  const animation = useAnimation();
  const newArray = options
    .filter((obj) => SPECIFIC_CARD_IDS.includes(obj.id))
    .reverse();

  useEffect(() => {
    if (inView) {
      animation.start({
        y: "0",
        opacity: 1,
        transition: {
          type: "spring",
          duration: 3,
        },
      });
    }
    if (!inView) {
      animation.start({
        y: "100px",
        opacity: 0,
      });
    }
  }, [inView]);

  return (
    <section>
      <motion.div
        className={s.hero}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1, ease: "easeInOut" }}
      >
        <div className="container">
          <div className={s.flex}>
            <motion.h1 className={s.title}>
              Brand+Digital <br />
              Design Studio
            </motion.h1>
          </div>
        </div>
      </motion.div>
      <div className="container">
        <div>
          <div>
            <motion.h2 ref={ref} className={s.brand_title} animate={animation}>
              Building brands & digital experiences for over twenty years
            </motion.h2>
            <p className={s.sup_title}>Featured Works_</p>
          </div>
          <div className={s.container}>
            <ul className={s.list}>
              {newArray?.map((item, id) => {
                return (
                  <CardTemplate
                    options={item}
                    key={id}
                    textEnter={textEnter}
                    textLeave={textLeave}
                  />
                );
              })}
            </ul>
            <Link
              href="/works"
              className={`${s.link} hover`}
              onMouseEnter={() => textEnter(cursorTypes.accentCursor)}
              onMouseLeave={textLeave}
            >
              See more work
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

Hero.propTypes = {
  options: PropTypes.array.isRequired,
  textEnter: PropTypes.func.isRequired,
  textLeave: PropTypes.func.isRequired,
};

export default React.memo(Hero);
