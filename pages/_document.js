import Document, { Html, Head, Main, NextScript } from "next/document";

class MainDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head />
        <body id="scroll-container">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MainDocument;
