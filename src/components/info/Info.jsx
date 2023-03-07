import s from "./info.module.css";
import { motion } from "framer-motion";
import { cursorTypes } from "../../../vars";
import { useContext } from "react";
import { CursorContext } from "../../../context/cursorContext";

export default function Info({ options }) {
  const [cursorVariant, setCursorVariant] = useContext(CursorContext);

  return (
    <>
      <section>
        <div className="container">
          <div className={s.padding}>
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1, ease: "easeInOut" }}
              className={s.title}
            >
              About
            </motion.h1>
            <motion.ul
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1, ease: "easeInOut" }}
            >
              {options?.map(({ title, description }, id) => {
                return (
                  <li key={id} className={s.content}>
                    <h2 className={s.sup_title}>{title}</h2>
                    <p className={s.text}>{description}</p>
                  </li>
                );
              })}
            </motion.ul>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1, ease: "easeInOut" }}
              className={s.text_container}
            >
              <p className={s.text}>Get in touch_</p>
              <a
                onMouseEnter={() => setCursorVariant(cursorTypes.accentCursor)}
                onMouseLeave={() => setCursorVariant(cursorTypes.default)}
                className={`${s.mail} hover`}
                href="mailto:studio@alpineldn.com?subject = Feedback&body = Message"
              >
                studio@alpineldn.com
              </a>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
