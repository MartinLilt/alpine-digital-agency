import s from "./portfolio.module.css";
import PropTypes from "prop-types";
import CardTemplate from "../card";
import { motion } from "framer-motion";
import React from "react";

const Portfolio = ({ options, textEnter, textLeave }) => {
  return (
    <>
      <section>
        <ul>
          <div className="container">
            <div>
              <motion.h2
                className={s.title}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 1, ease: "easeInOut" }}
              >
                Works
              </motion.h2>
              <div className={s.container}>
                <ul className={s.list}>
                  {options?.map((item, id) => {
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
              </div>
            </div>
          </div>
        </ul>
      </section>
    </>
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
  textEnter: PropTypes.func.isRequired,
  textLeave: PropTypes.func.isRequired,
};

export default React.memo(Portfolio);
