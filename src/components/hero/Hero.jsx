import s from "./hero.module.css";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";

const Hero = ({ options }) => {
  const [data, setData] = useState(null);
  const optionCardsAmout = 4;

  useEffect(() => {
    if (options.length >= optionCardsAmout)
      setData(options.splice(0, optionCardsAmout));
  }, [options]);

  return (
    <section data-scroll data-scroll-section>
      <div className={s.hero}>
        <div className="container">
          <div className={s.flex}>
            <h1
              className={s.title}
              data-scroll
              data-scroll-class={s.title_scroll}
              data-scroll-repeat="true"
              data-scroll-speed="6"
            >
              Brand+Digital <br />
              Design Studio
            </h1>
          </div>
        </div>
      </div>

      <div className="container">
        <div>
          <div
            className={s.title_container}
            data-scroll
            data-scroll-class={s.title_container_scroll}
            data-scroll-speed="1"
            data-scroll-repeat="true"
            data-scroll-offset="45%, 25%"
          >
            <h2 className={s.brand_title}>
              Building brands & digital experiences for over twenty years
            </h2>
            <p className={s.sup_title}>Featured Works_</p>
          </div>
          <div className={s.container}>
            <ul className={s.list}>
              {data?.map((item, id) => {
                return (
                  <li
                    key={id}
                    className={s.img}
                    title={`Tap to see more about "${item.title}" case.`}
                    data-scroll
                    data-scroll-class={s.img_scroll}
                    data-scroll-repeat="true"
                    data-scroll-offset={`${45 + id}%, 25%`}
                  >
                    <Link href={`/works/${item.tag}`}>
                      <span className={s.content}>
                        <Image
                          fill
                          sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
                          src={item.img}
                          alt={item.desc}
                          className={s.content_img}
                        />
                      </span>
                      <span>
                        <p className={s.name}>{item.title}</p>
                        <p className={s.tag}>{item.category}</p>
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ul>
            <Link href="/works" className={`${s.link} hover`}>
              See more work
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

Hero.propTypes = {
  options: PropTypes.array.isRequired,
};

export default Hero;
