import Header from "../header";
import Footer from "../footer";

const Layout = ({ children, isFooter, isAbout, isWorks, isWorksCategory }) => {
  return (
    <>
      <Header
        isAbout={isAbout}
        isWorks={isWorks}
        isWorksCategory={isWorksCategory}
      />
      <main>{children}</main>
      {isFooter ? <Footer /> : null}
    </>
  );
};

export default Layout;
