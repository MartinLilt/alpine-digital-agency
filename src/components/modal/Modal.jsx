import Link from "next/link";
import s from "./modal.module.css";
import { useRouter } from "next/router";
import PropTypes from "prop-types";
import { cursorTypes } from "../../../vars";
import React from "react";
import { useContext } from "react";
import { CursorContext } from "../../../context/cursorContext";

export default function Modal({ toggleModal }) {
  const [cursorVariant, setCursorVariant] = useContext(CursorContext);
  const router = useRouter();
  const isPageUrl = router.pathname;
  const pageUrlAbout = "/about";
  const pageUrlWorks = "/works";
  return (
    <div className={s.modal}>
      <div className="container">
        <div className={s.flex}>
          <ul className={s.list}>
            <li className={s.page_link}>
              <Link
                onMouseEnter={() => setCursorVariant(cursorTypes.accentCursor)}
                onMouseLeave={() => setCursorVariant(cursorTypes.default)}
                href={pageUrlAbout}
                className="hover"
                onClick={isPageUrl !== pageUrlAbout ? null : toggleModal}
              >
                About
              </Link>
            </li>
            <li className={s.page_link}>
              <Link
                onMouseEnter={() => setCursorVariant(cursorTypes.accentCursor)}
                onMouseLeave={() => setCursorVariant(cursorTypes.default)}
                href={pageUrlWorks}
                className="hover"
                onClick={isPageUrl !== pageUrlWorks ? null : toggleModal}
              >
                Works
              </Link>
            </li>
          </ul>
          <div className={s.flex_link}>
            <a
              onMouseEnter={() => setCursorVariant(cursorTypes.accentCursor)}
              onMouseLeave={() => setCursorVariant(cursorTypes.default)}
              className={`${s.link} hover`}
              href="mailto:studio@alpineldn.com?subject = Feedback&body = Message"
            >
              studio@alpineldn.com
            </a>
            <Link
              href="/"
              className={`${s.link} hover`}
              onMouseEnter={() => setCursorVariant(cursorTypes.accentCursor)}
              onMouseLeave={() => setCursorVariant(cursorTypes.default)}
            >
              privacy
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

Modal.propTypes = {
  toggleModal: PropTypes.func.isRequired,
};
