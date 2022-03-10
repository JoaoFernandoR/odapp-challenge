import type { AppProps } from "next/app";
import Head from "next/head";
// Styles
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <title>Avaliação Odapp</title>
                <meta name="description" content="Homepage of icarros" />
                <link rel="icon" href="/autismo-fita.jpg" />
            </Head>
            <Component {...pageProps} />
        </>
    );
}

export default MyApp;
