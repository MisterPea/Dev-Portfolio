import '../styles/main.scss';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Mister Pea - Developer; Aspiring Raconteur</title>
        <meta property='og:title' content='Mister Pea - Developer, Aspiring Raconteur' key="title" />
        <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1, viewport-fit=cover" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
