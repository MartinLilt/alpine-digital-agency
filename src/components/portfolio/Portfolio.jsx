import s from "./portfolio.module.css";
import Image from "next/image";
import Link from "next/link";

const Portfolio = ({ options }) => {
  return (
    <>
      <section>
        <ul>
          <div className="container">
            <div>
              <h2 className={s.title}>Works</h2>
              <div className={s.container}>
                <ul className={s.list}>
                  {options?.map((item, id) => {
                    return (
                      <li key={id} className={s.img} title={item.title}>
                        <Link
                          href={{
                            pathname: `/works/${item.tag}`,
                          }}
                        >
                          <span className={s.content}>
                            <Image
                              src={item.img}
                              fill
                              sizes="(max-width: 768px) 100vw,
            (max-width: 1200px) 50vw,
            33vw"
                              alt={item.title}
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
              </div>
            </div>
          </div>
        </ul>
      </section>
    </>
  );
};

export default Portfolio;
