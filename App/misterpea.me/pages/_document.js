import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet='utf-8' />
        <meta name="description" content="Developer portfolio for Perry Angelora. Specializing in ReactJS, Redux, SCSS, JavaScript ES6, NodeJS and NoSQL" />
        <link rel="stylesheet" href="https://use.typekit.net/kyx7smg.css" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}