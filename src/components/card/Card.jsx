import React, {
  useEffect,
  useLayoutEffect,
  useRef,
  useContext,
  useState,
} from "react";
import { CursorContext } from "../cursorProvider/CursorProvider";
import { cursorTypes } from "../../../vars";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Link from "next/link";
import s from "./card.module.css";
import PropTypes from "prop-types";
// import { gsap } from "gsap";
// import { Flip } from "gsap/dist/Flip";

// gsap.registerPlugin(Flip);

const Card = ({ options }) => {
  // const flipRef = useRef();
  // const q = gsap.utils.selector(flipRef);
  // const [toggle, setToggle] = useState(false);
  // const [layoutState, setLayoutState] = useState();
  const currentCardRef = useRef(null);
  const { textEnter, textLeave } = useContext(CursorContext);
  const { title, tag, img, category } = options;
  const { ref, inView } = useInView({
    threshold: 0.2,
  });
  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start({
        y: "-5rem",

        opacity: 0.6,
        transition: {
          type: "spring",
          duration: 3,
        },
      });
    }
    if (!inView) {
      animation.start({
        opacity: 0,
        y: "0",
      });
    }
  }, [inView]);

  // useLayoutEffect(() => {
  //   if (!layoutState) return;

  //   console.log(layoutState);

  //   const flip = Flip.from(layoutState, {
  //     duration: 0.6,
  //     // fade: true,
  //     absolute: true,
  //     targets: q(".thumbnail"),
  //   });

  //   return () => {
  //     flip.kill();
  //   };
  // }, [layoutState]);

  // const handleOnClick = () => {
  //   setToggle(!toggle);
  //   setLayoutState(Flip.getState(q(".thumbnail")));
  // };

  return (
    <>
      <motion.li
        // data-flip-id="img"
        // onClick={handleOnClick}
        initial={false}
        animate={animation}
        ref={ref}
        className={`${s.list} thumbnail`}
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
    </>
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
