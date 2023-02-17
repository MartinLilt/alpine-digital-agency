import Modal from "../modal";
import s from "./header.module.css";
import Link from "next/link";
import styled from "styled-components";
import { useRouter } from "next/router";
import React, { useCallback, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { motion, useScroll, useTransform } from "framer-motion";
import { cursorTypes } from "../../../vars";

const Header = ({
  isHome = false,
  isAbout = false,
  isWorks = false,
  isWorksCategory = false,
  textEnter,
  textLeave,
}) => {
  let [modalState, setModalState] = useState(false);
  let [height, setHeight] = useState(0);
  const router = useRouter();
  const url = router.asPath;
  const isOpen = modalState || isAbout || isWorks ? "#d12245" : "#fff";
  const isPageActive = isAbout || isWorks || isWorksCategory ? url : "/";
  const isModalOpenOnWorksCategory = isWorksCategory && !modalState;
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 100], ["100%", "0%"]);
  const stroke = useTransform(scrollY, [0, height], ["#fff", "#d12245"]);

  const isLogoAnimation = useCallback(
    (obj) => {
      if (isHome && !modalState) {
        return stroke;
      } else {
        return "inherit";
      }
    },
    [modalState]
  );

  useEffect(() => {
    setHeight(window.innerHeight);
  }, []);

  useEffect(() => {
    modalState
      ? document.body.classList.add("modal-open")
      : document.body.classList.remove("modal-open");
  }, [modalState]);

  const toggleModal = () => {
    setModalState((state) => !state);
  };

  return (
    <div>
      <header className={s.header}>
        <div className={s.container}>
          <div className={s.flex}>
            <button
              type="button"
              onClick={modalState ? toggleModal : null}
              onMouseEnter={() =>
                textEnter(
                  modalState || isWorks || isAbout
                    ? cursorTypes.accentCursor
                    : cursorTypes.whiteCursor
                )
              }
              onMouseLeave={textLeave}
            >
              <Link
                href={isWorksCategory ? "/works" : "/"}
                className={s.logo}
                style={{ color: isOpen, stroke: isOpen }}
              >
                {isModalOpenOnWorksCategory ? (
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    className={s.arrow}
                    xmlns="http://www.w3.org/2000/svg"
                    style={{
                      stroke: "inherit",
                    }}
                  >
                    <path d="M13.4142 18.7842L28.1985 33.5685L26.7843 34.9827L12 20.1984L13.4142 18.7842Z" />
                    <path d="M12.0021 20.1974L27.1995 5L28.6137 6.41421L13.4163 21.6116L12.0021 20.1974Z" />
                  </svg>
                ) : (
                  <motion.svg
                    width="60"
                    height="22"
                    viewBox="0 0 60 22"
                    style={{ stroke: isLogoAnimation() }}
                  >
                    <StyledPath
                      d="M4.8125 20.1795L18.4668 6.38222L25.3795 13.3235L36.8346 1.84033L55.0879 20.0937"
                      className={s.stroke}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{
                        delay: 0.5,
                        ease: "easeInOut",
                      }}
                    ></StyledPath>
                    <StyledPath
                      initial={{ translateX: "-100%", opacity: 0 }}
                      animate={{ translateX: "0%", opacity: 1 }}
                      transition={{
                        delay: 1,
                        ease: "easeInOut",
                      }}
                      d="M0.242188 20.0938H59.7465"
                      className={s.stroke_small}
                    ></StyledPath>
                  </motion.svg>
                )}
                {isHome && !modalState && (
                  <StyledText
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                      delay: 0.5,
                      ease: "easeInOut",
                    }}
                    className={s.text}
                    style={{ opacity, color: "inherit" }}
                  >
                    ALPINE
                  </StyledText>
                )}
              </Link>
            </button>
            <Link
              href={isPageActive}
              className={s.menu}
              onClick={toggleModal}
              onMouseEnter={() =>
                textEnter(
                  modalState || isWorks || isAbout
                    ? cursorTypes.accentCursor
                    : cursorTypes.whiteCursor
                )
              }
              onMouseLeave={textLeave}
            >
              <motion.svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{ fill: isLogoAnimation() }}
              >
                <StyledMenu
                  className={s.rect}
                  x={modalState ? "6" : null}
                  y={modalState ? "5" : "12"}
                  width="40"
                  height="2"
                  transform={modalState ? "rotate(45 6 5)" : null}
                />
                <StyledMenu
                  className={s.rect}
                  x={modalState ? "5" : null}
                  y={modalState ? "33" : "26"}
                  width="40"
                  height="2"
                  transform={modalState ? "rotate(-45 5 33)" : null}
                />
              </motion.svg>
            </Link>
          </div>
        </div>
      </header>
      {modalState ? (
        <Modal
          toggleModal={toggleModal}
          textEnter={textEnter}
          textLeave={textLeave}
        />
      ) : null}
    </div>
  );
};

const StyledMenu = styled.rect`
  fill: ${(props) => props.fill || "inherit"};
`;

const StyledPath = styled(motion.path)`
  fill: ${(props) => props.fill || "transparent"};
`;

const StyledText = styled(motion.p)``;

Header.propTypes = {
  isAbout: PropTypes.bool,
  isWorks: PropTypes.bool,
  isWorksCategory: PropTypes.bool,
  textEnter: PropTypes.func.isRequired,
  textLeave: PropTypes.func.isRequired,
};

export default React.memo(Header);
