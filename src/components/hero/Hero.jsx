import s from "./hero.module.css";
import Link from "next/link";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useRef, useEffect, useState } from "react";
gsap.registerPlugin(ScrollTrigger);

const Hero = ({ options }) => {
  const [data, setData] = useState(null);
  const ref = useRef(null);
  const optionCardsAmout = 4;

  useEffect(() => {
    const el = ref.current;
    gsap.to(el, {});
  }, []);

  useEffect(() => {
    if (options.length >= optionCardsAmout)
      setData(options.splice(0, optionCardsAmout));
  }, [options]);

  return (
    <section>
      <div className={s.hero}>
        <div className="container">
          <div className={s.flex}>
            <h1 className={s.title}>
              Brand+Digital <br />
              Design Studio
            </h1>
          </div>
        </div>
      </div>

      <div className="container">
        <div>
          <h2 className={s.brand_title} ref={ref}>
            Building brands & digital experiences for over twenty years
          </h2>
          <div className={s.container}>
            <h3 className={s.sup_title}>Featured Works_</h3>
            <ul className={s.list}>
              {data?.map((item, id) => {
                return (
                  <li
                    key={id}
                    className={s.img}
                    title={`Tap to see more about "${item.title}" case.`}
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

export default Hero;
