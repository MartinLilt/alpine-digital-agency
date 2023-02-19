import s from "./nextProject.module.css";
import React from "react";
import { useRouter } from "next/router";

const NextProject = () => {
  const { query } = useRouter();

  return (
    <div
      style={{
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100%",
        height: "inherit",
      }}
    >
      <div
        className="container"
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <p className={s.title}>Next Project_</p>
        <p className={s.project_title}></p>
      </div>
    </div>
  );
};

export default React.memo(NextProject);
