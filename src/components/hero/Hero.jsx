import s from "./hero.module.css";
import Link from "next/link";
import Image from "next/image";
import { Fragment } from "react";
import { motion as m } from "framer-motion";
import { defaultAnimation, cardAnimation } from "../../../motion/vars";
import { useRouter } from "next/router";

const Hero = ({ options }) => {
  const router = useRouter();
  console.log(router.route);
  return (
    <m.section
      key={router.route}
      initial="initState"
      animate="animateState"
      exit="exitState"
      transition={{
        duration: 1,
      }}
      variants={defaultAnimation}
    >
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
          <h2 className={s.brand_title}>
            Building brands & digital experiences for over twenty years
          </h2>
          <div className={s.container}>
            <h3 className={s.sup_title}>Featured Works_</h3>
            <ul className={s.list}>
              {options?.map((item, id) => {
                return (
                  <Fragment key={id}>
                    {id > 3 ? (
                      <></>
                    ) : (
                      <li
                        className={s.img}
                        title={`Tap to see more about "${item.title}" case.`}
                      >
                        <Link href={`/works/${item.tag}`}>
                          <m.span
                            key={`/works/${item.tag}`}
                            variants={cardAnimation}
                            className={s.content}
                          >
                            <Image
                              fill
                              sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
                              src={item.img}
                              alt={item.desc}
                              className={s.content_img}
                            />
                          </m.span>
                          <span>
                            <p className={s.name}>{item.title}</p>
                            <p className={s.tag}>{item.category}</p>
                          </span>
                        </Link>
                      </li>
                    )}
                  </Fragment>
                );
              })}
            </ul>
            <Link href="/works" className={`${s.link} hover`}>
              See more work
            </Link>
          </div>
        </div>
      </div>
    </m.section>
  );
};

export default Hero;
