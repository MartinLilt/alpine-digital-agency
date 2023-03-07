import s from "./nextProject.module.css";
import React, { useEffect, useState } from "react";
import Link from "next/link";

export default function NextProject({ currentTagName }) {
  const [options, setOptions] = useState({ name: "", img: "", id: null });

  useEffect(() => {
    const callAPI = async () => {
      try {
        const res = await fetch(
          `http://${process.env.NEXT_PUBLIC_API}/api/next/${currentTagName}`
        );
        const data = await res.json();
        setOptions({ name: data.title, img: data.img, id: data.tag });
      } catch (err) {
        console.log(err);
      }
    };

    callAPI();
  }, [currentTagName]);
  // We send the current case id to get the next case after that.

  const { name, img, id } = options;

  return (
    <Link
      href={`/works/${id}`}
      style={{
        backgroundImage: `url(${img})`,
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
        <p className={s.project_title}>{name}</p>
      </div>
    </Link>
  );
}
