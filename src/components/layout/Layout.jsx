import Header from "../header";
import Footer from "../footer";
import Link from "next/link";
import Image from "next/image";
import s from "./layout.module.css";

const Layout = ({
  children,
  isFooter,
  isAbout,
  isWorks,
  isWorksCategory,
  isFooterCategory,
}) => {
  return (
    <>
      <Header
        isAbout={isAbout}
        isWorks={isWorks}
        isWorksCategory={isWorksCategory}
      />
      <main>{children}</main>
      {isFooter ? <Footer /> : null}
      {isFooterCategory ? (
        <footer className={s.footer}>
          <div className={`${s.flex} container`}>
            <Link href={`/works`}>Next project_</Link>
          </div>
        </footer>
      ) : null}
    </>
  );
};

export default Layout;
