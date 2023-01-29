import s from "./info.module.css";
import options from "../../../cards/about.json";

const Info = () => {
  return (
    <>
      <section>
        <div className="container">
          <div className={s.padding}>
            <h1 className={s.title}>About</h1>
            <ul>
              {options.map(({ title, description }, id) => {
                return (
                  <li key={id} className={s.content}>
                    <h2 className={s.sup_title}>{title}</h2>
                    <p className={s.text}>{description}</p>
                  </li>
                );
              })}
            </ul>
            <p className={s.text}>Get in touch_</p>
            <a
              className={`${s.mail} hover`}
              href="mailto:studio@alpineldn.com?subject = Feedback&body = Message"
            >
              studio@alpineldn.com
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Info;
