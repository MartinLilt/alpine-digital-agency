import { cursorTypes } from "../../../vars";
import s from "./nextProject.module.css";
import React from "react";

const NextProject = ({ options, textEnter, textLeave }) => {
  return (
    <div
      className={s.background}
      onMouseEnter={() => textEnter(cursorTypes.whiteCursor)}
      onMouseLeave={textLeave}
    >
      <p className={s.title}>Next Project_</p>
      <p className={s.project_title}></p>
    </div>
  );
};

export default React.memo(NextProject);
