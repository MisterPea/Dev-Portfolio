import '../styles/main.scss';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Perry Angelora :: Developer; polymath; autodidact; user of ostentatious word</title>
        <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1, viewport-fit=cover" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
