import React, { useContext, useState } from "react";
import { cursorTypes } from "../../../vars";
import { CursorContext } from "../../../context/cursorContext";
import { ImageContext } from "../../../context/imageContext";

import s from "./card.module.css";
// import PropTypes from "prop-types";
import Link from "next/link";

export default function Card({ options }) {
  const [cursorVariant, setCursorVariant] = useContext(CursorContext);
  const [animateImage, setAnimateImage] = useContext(ImageContext);

  return (
    <>
      <ul className={s.list}>
        {options?.map((item, index) => {
          return (
            <Link
              href={`/works/${item.tag}`}
              key={index}
              className={s.animation_default_init}
              data-scroll-repeat="true"
              data-scroll
              data-scroll-offset="10%, 5%"
              data-scroll-class={s.animation_default_start}
              onClick={() => setAnimateImage(item.img)}
              onMouseEnter={() =>
                setCursorVariant(cursorTypes.backgroundCursor)
              }
              onMouseLeave={() => setCursorVariant(cursorTypes.default)}
              style={{
                backgroundImage: `url(${item.img})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
                position: "relative",
              }}
            >
              <li>
                <span className={s.desc}>
                  <p className={s.name}>{item.title}</p>
                  <p className={s.tag}>{item.category}</p>
                </span>
              </li>
            </Link>
          );
        })}
      </ul>
    </>
  );
}
