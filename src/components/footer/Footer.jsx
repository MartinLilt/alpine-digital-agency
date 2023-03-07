import { cursorTypes } from "../../../vars";
import s from "./footer.module.css";
import React from "react";
import { CursorContext } from "../../../context/cursorContext";
import { useContext } from "react";

export default function Footer() {
  const [cursorVariant, setCursorVariant] = useContext(CursorContext);
  return (
    <footer
      className="container animation-default-init"
      data-scroll-repeat="true"
      data-scroll
      data-scroll-offset="25%, 25%"
      data-scroll-class="animation-default-start"
    >
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
            onMouseEnter={() => setCursorVariant(cursorTypes.accentCursor)}
            onMouseLeave={() => setCursorVariant(cursorTypes.default)}
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
}
