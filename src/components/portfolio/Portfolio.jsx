import s from "./portfolio.module.css";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import CardTemplate from "../card";

export default function Portfolio({ options }) {
  return (
    <>
      <section>
        <ul>
          <div className="container">
            <div>
              <motion.h2 className={s.title}>Works</motion.h2>
              <div className={s.container}>
                <CardTemplate options={options} />
              </div>
            </div>
          </div>
        </ul>
      </section>
    </>
  );
}

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
