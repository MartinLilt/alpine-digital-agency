import React, { useEffect, useRef, useContext } from "react";
import { CursorContext } from "../cursorProvider/CursorProvider";
import { cursorTypes } from "../../../vars";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Link from "next/link";
import s from "./card.module.css";
import PropTypes from "prop-types";

const Card = ({ options }) => {
  const currentCardRef = useRef(null);
  const { textEnter, textLeave } = useContext(CursorContext);
  const { title, tag, img, category } = options;
  const { ref, inView } = useInView({
    threshold: 0.2,
  });
  const animation = useAnimation();

  useEffect(() => {}, []);

  useEffect(() => {
    if (inView) {
      animation.start({
        y: "-5rem",

        opacity: "60%",
        transition: {
          type: "spring",
          duration: 3,
        },
      });
    }
    if (!inView) {
      animation.start({
        opacity: "0%",
        y: "0",
      });
    }
  }, [inView]);

  const handleClick = () => {};

  return (
    <motion.li
      onClick={handleClick}
      initial={false}
      animate={animation}
      exit={{
        scale: "265%",
        translateX: "20%",
        translateY: "0%",
        zIndex: "99999",
      }}
      ref={ref}
      className={s.list}
      onMouseEnter={() => textEnter(cursorTypes.backgroundCursor)}
      onMouseLeave={textLeave}
    >
      <Link
        ref={currentCardRef}
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
};

export default React.memo(Card);
