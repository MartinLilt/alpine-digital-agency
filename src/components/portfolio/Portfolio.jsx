import s from "./portfolio.module.css";
import Image from "next/image";
import Link from "next/link";
import PropTypes from "prop-types";
import { motion, AnimatePresence } from "framer-motion";

const transition = {
  duration: 120,
};

const Portfolio = ({ options }) => {
  return (
    <AnimatePresence>
      <motion.section
        transition={transition}
        initial="initial"
        animate="animate"
        exit="exit"
        data-scroll
        data-scroll-section
      >
        <ul>
          <div className="container">
            <div>
              <h2
                className={s.title}
                data-scroll
                data-scroll-class={s.title_scroll}
                data-scroll-repeat="true"
                data-scroll-speed="1"
              >
                Works
              </h2>
              <div className={s.container}>
                <ul className={s.list}>
                  {options?.map((item, id) => {
                    return (
                      <li
                        key={id}
                        className={s.img}
                        title={item.title}
                        data-scroll
                        data-scroll-class={s.img_scroll}
                        data-scroll-repeat="true"
                        data-scroll-offset={`${45 + id}%, 25%`}
                      >
                        <Link
                          transition={transition}
                          initial="false"
                          href={{
                            pathname: `/works/${item.tag}`,
                          }}
                        >
                          <span className={s.content}>
                            <Image
                              src={item.img}
                              fill
                              sizes="(max-width: 768px) 100vw,
            (max-width: 1200px) 50vw,
            33vw"
                              alt={item.title}
                              className={s.content_img}
                            />
                          </span>
                          <span>
                            <p className={s.name}>{item.title}</p>
                            <p className={s.tag}>{item.category}</p>
                          </span>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </ul>
      </motion.section>
    </AnimatePresence>
  );
};

Portfolio.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      img: PropTypes.string.isRequired,
      tag: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Portfolio;
