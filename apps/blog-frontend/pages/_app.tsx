import {AppProps} from 'next/app';
import Head from 'next/head';
import './styles.css';
import {Layout} from "../components/Layout";

function CustomApp({Component, pageProps}: AppProps) {
  return (
    <>
      <Head>
        <title>Welcome to blog-frontend!</title>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default CustomApp;
