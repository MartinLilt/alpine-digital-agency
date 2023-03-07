import s from "./hero.module.css";
import Link from "next/link";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import React, { useContext } from "react";
import CardTemplate from "../card";
import { cursorTypes } from "../../../vars";
import { CursorContext } from "../../../context/cursorContext";

const SPECIFIC_CARD_IDS = [1, 2, 3, 4];

export default function Hero({ options }) {
  const [cursorVariant, setCursorVariant] = useContext(CursorContext);
  const newArray = options
    .filter((obj) => SPECIFIC_CARD_IDS.includes(obj.id))
    .reverse();

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
            <h2
              className={`${s.brand_title} animation-default-init`}
              data-scroll-repeat="true"
              data-scroll
              data-scroll-offset="25%, 25%"
              data-scroll-class="animation-default-start"
            >
              Building brands & digital experiences for over twenty years
            </h2>
            <p className={s.sup_title}>Featured Works_</p>
          </div>
          <div className={s.container}>
            <CardTemplate options={newArray} />
            <Link
              href="/works"
              className={`${s.link} hover`}
              onMouseEnter={() => setCursorVariant(cursorTypes.accentCursor)}
              onMouseLeave={() => setCursorVariant(cursorTypes.default)}
            >
              See more work
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

Hero.propTypes = {
  options: PropTypes.array.isRequired,
};
