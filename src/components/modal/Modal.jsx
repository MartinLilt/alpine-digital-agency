import Link from "next/link";
import s from "./modal.module.css";
import { useRouter } from "next/router";
import PropTypes from "prop-types";

const Modal = ({ toggleModal }) => {
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
                href={pageUrlAbout}
                className="hover"
                onClick={isPageUrl !== pageUrlAbout ? null : toggleModal}
              >
                About
              </Link>
            </li>
            <li className={s.page_link}>
              <Link
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
              className={`${s.link} hover`}
              href="mailto:studio@alpineldn.com?subject = Feedback&body = Message"
            >
              studio@alpineldn.com
            </a>
            <Link href="/" className={`${s.link} hover`}>
              privacy
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

Modal.propTypes = {
  toggleModal: PropTypes.func.isRequired,
};

export default Modal;
