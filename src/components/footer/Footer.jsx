import s from "./footer.module.css";

const Footer = () => {
  return (
    <footer className="container">
      <div className={s.footer}>
        <div>
          <p className={s.title}>Select clients_</p>
          <p className={s.text}>
            HSBC, Feefo, ASOS, Matter, HTC, Havas, Turkish Airlines, Schweppes
          </p>
        </div>
        <div>
          <p>Get in touch_</p>
          <a
            className={`${s.mail} hover`}
            href="mailto:studio@alpineldn.com?subject = Feedback&body = Message"
          >
            studio@alpineldn.com
          </a>
          <p className={s.born}>Born in London, working globally</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
