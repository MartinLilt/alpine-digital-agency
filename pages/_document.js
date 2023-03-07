import Document, { Html, Head, Main, NextScript } from "next/document";

export default function MainDocument() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

MainDocument.getInitialProps = async (ctx) => {
  const initialProps = await Document.getInitialProps(ctx);
  return { ...initialProps };
};
