import { cursorTypes } from "../../../vars";
import s from "./footer.module.css";
import React from "react";
import { CursorContext } from "../cursorProvider/CursorProvider";
import { useContext } from "react";

const Footer = () => {
  const { textEnter, textLeave } = useContext(CursorContext);
  return (
    <footer className="container" scroll-content="true">
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

export default React.memo(Footer);
