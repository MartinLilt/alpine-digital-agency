import s from "./portfolio.module.css";
import PropTypes from "prop-types";
import CardTemplate from "../card";
import { motion } from "framer-motion";

const Portfolio = ({ options }) => {
  return (
    <>
      <section>
        <ul>
          <div className="container">
            <div>
              <motion.h2 className={s.title}>Works</motion.h2>
              <div className={s.container}>
                <ul className={s.list}>
                  {options?.map((item, id) => {
                    return <CardTemplate options={item} key={id} />;
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
};

export default Portfolio;
