import Modal from "../modal";
import s from "./header.module.css";
import Link from "next/link";
import styled from "styled-components";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useLocomotiveScroll } from "react-locomotive-scroll";

const Header = ({
  isAbout = false,
  isWorks = false,
  isWorksCategory = false,
}) => {
  let [modalState, setModalState] = useState(false);
  const router = useRouter();
  const url = router.asPath;
  const isOpen = modalState || isAbout || isWorks ? "#d12245" : "#fff";
  const isPageActive = isAbout || isWorks || isWorksCategory ? url : "/";
  const isModalOpenOnWorksCategory = isWorksCategory && !modalState;
  const { scroll } = useLocomotiveScroll();

  useEffect(() => {
    modalState
      ? document.body.classList.add("modal-open")
      : document.body.classList.remove("modal-open");
  }, [modalState]);

  const toggleModal = () => {
    setModalState((state) => !state);
  };

  return (
    <div data-scroll-section>
      <header className={s.header}>
        <div className={s.container}>
          <div className={s.flex}>
            <button type="button" onClick={modalState ? toggleModal : null}>
              <Link href={isWorksCategory ? "/works" : "/"} className={s.logo}>
                {isModalOpenOnWorksCategory ? (
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    className={s.arrow}
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M13.4142 18.7842L28.1985 33.5685L26.7843 34.9827L12 20.1984L13.4142 18.7842Z" />
                    <path d="M12.0021 20.1974L27.1995 5L28.6137 6.41421L13.4163 21.6116L12.0021 20.1974Z" />
                  </svg>
                ) : (
                  <svg width="60" height="22" viewBox="0 0 60 22">
                    <StyledPath
                      d="M4.8125 20.1795L18.4668 6.38222L25.3795 13.3235L36.8346 1.84033L55.0879 20.0937"
                      className={s.stroke}
                      fill={isAbout ? "var(--accent-color)" : null}
                      stroke={isOpen}
                    ></StyledPath>
                    <StyledPath
                      d="M0.242188 20.0938H59.7465"
                      className={s.stroke_small}
                      stroke={isOpen}
                    ></StyledPath>
                  </svg>
                )}
                {!isWorks ? (
                  <StyledText className={s.text} color={isOpen}>
                    ALPINE
                  </StyledText>
                ) : null}
              </Link>
            </button>
            <Link href={isPageActive} className={s.menu} onClick={toggleModal}>
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <StyledMenu
                  className={s.rect}
                  x={modalState ? "6" : null}
                  y={modalState ? "5" : "12"}
                  width="40"
                  height="2"
                  fill={isOpen}
                  transform={modalState ? "rotate(45 6 5)" : null}
                />
                <StyledMenu
                  className={s.rect}
                  x={modalState ? "5" : null}
                  y={modalState ? "33" : "26"}
                  width="40"
                  height="2"
                  fill={isOpen}
                  transform={modalState ? "rotate(-45 5 33)" : null}
                />
              </svg>
            </Link>
          </div>
        </div>
      </header>
      {modalState ? <Modal toggleModal={toggleModal} /> : null}
    </div>
  );
};

const StyledMenu = styled.rect`
  fill: ${(props) => props.fill || "inherit"};
`;

const StyledPath = styled.path`
  stroke: ${(props) => props.stroke || "inherit"};
  fill: ${(props) => props.fill || "transparent"};
`;

const StyledText = styled.p`
  color: ${(props) => props.color || "#fff"};
  transition: all 0.3s;
`;

Header.propTypes = {
  isAbout: PropTypes.bool,
  isWorks: PropTypes.bool,
  isWorksCategory: PropTypes.bool,
};

export default Header;
