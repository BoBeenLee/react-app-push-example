import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  public render() {
    const metaTitle = "Henesis Wallet";
    const metaDescription = `Welcome to Henesis Wallet!`;

    return (
      <Html lang="en">
        <Head>
          <meta name="theme-color" content={"#000"} />
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="width=device-width, height=device-height, initial-scale=1.0, minimum-scale=1.0, user-scalable=no"
          />
          <meta name="title" content={metaTitle} />
          <meta name="description" content={metaDescription} />
          <meta property="og:type" content="website" />
          <meta property="og:title" content={metaTitle} />
          <meta property="og:site_name" content={metaTitle} />
          <meta property="og:description" content={metaDescription} />
          <meta
            property="og:image"
            content="/static/wallet_user_dashboard_og.png"
          />
          <meta name="keywords" content="blockchain,haechilabs" />
          <link rel="icon" href="/static/favicon.ico" />
          <link rel="icon" href="/static/favicon-16x16.png" sizes="16x16" />
          <link rel="icon" href="/static/favicon-32x32.png" sizes="32x32" />
          <link rel="icon" href="/static/favicon-64x64.png" sizes="64x64" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}