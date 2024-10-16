import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Averia+Sans+Libre:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&family=Kaushan+Script&display=swap"
          rel="stylesheet"
        />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#FFFFFF" />
        <link rel="apple-touch-icon" href="/icon-192x192.png" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
      </Head>
      <body className=" bg-gradient-to-r from-greenn to-blue-400 dark:from-dark-500 dark:to-dark-700 dark:text-white">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
