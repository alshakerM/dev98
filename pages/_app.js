import '../styles/globals.css';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, viewport-fit=cover"
        ></meta>
        <title>Dev98</title>
        <link
          rel="shortcut icon"
          href="https://dev98.de/wp-content/uploads/2017/03/cropped-logo_50px.png"
        />
      </Head>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
