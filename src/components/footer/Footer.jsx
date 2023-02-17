import { cursorTypes } from "../../../vars";
import s from "./footer.module.css";
import React from "react";
import PropTypes from "prop-types";

const Footer = ({ textEnter, textLeave }) => {
  return (
    <footer className="container" data-scroll-section>
      <div className={s.footer}>
        <div>
          <p className={s.title}>Select clients_</p>
          <p className={s.text}>
            HSBC, Feefo, ASOS, Matter, HTC, Havas, Turkish Airlines, Schweppes
          </p>
        </div>
        <div>
          <p>Get in touch_</p>
          <a
            onMouseEnter={() => textEnter(cursorTypes.accentCursor)}
            onMouseLeave={textLeave}
            className={`${s.mail} hover`}
            href="mailto:studio@alpineldn.com?subject = Feedback&body = Message"
          >
            studio@alpineldn.com
          </a>
          <p className={s.born}>Born in London, working globally</p>
        </div>
      </div>
    </footer>
  );
};

Footer.propTypes = {
  textEnter: PropTypes.func.isRequired,
  textLeave: PropTypes.func.isRequired,
};

export default React.memo(Footer);
