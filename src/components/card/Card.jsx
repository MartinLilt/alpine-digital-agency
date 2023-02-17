import React, { useEffect } from "react";
import { cursorTypes } from "../../../vars";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Link from "next/link";
import s from "./card.module.css";
import PropTypes from "prop-types";

const Card = ({ options, textEnter, textLeave }) => {
  const { title, tag, img, category } = options;
  const { ref, inView } = useInView({
    threshold: 0.7,
  });
  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start({
        y: "0",
        opacity: "60%",
        transition: {
          type: "spring",
          duration: 3,
        },
      });
    }
    if (!inView) {
      animation.start({
        y: "100px",
        opacity: "0%",
      });
    }
  }, [inView]);

  return (
    <motion.li
      animate={animation}
      ref={ref}
      className={s.list}
      onMouseEnter={() => textEnter(cursorTypes.backgroundCursor)}
      onMouseLeave={textLeave}
    >
      <Link
        className={s.link}
        href={`/works/${tag}`}
        style={{
          backgroundImage: `url(${img})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100%",
        }}
      ></Link>
      <span className={s.desc}>
        <p className={s.name}>{title}</p>
        <p className={s.tag}>{category}</p>
      </span>
    </motion.li>
  );
};

Card.propTypes = {
  options: PropTypes.shape({
    title: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
  textEnter: PropTypes.func.isRequired,
  textLeave: PropTypes.func.isRequired,
};

export default React.memo(Card);
