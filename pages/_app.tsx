import Head from "next/head";
import type { AppProps } from "next/app";
import "../styles/global.css";
import { Inter } from "next/font/google";
import { clsx } from "clsx";
import { useRef } from "react";
import * as React from "react";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export default function MyApp({ Component, pageProps }: AppProps) {
  const modalDiv = useRef();

  return (
    <div lang="en" className={clsx(inter.className, "text-slate-900")}>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Component {...pageProps} />
      <div id="modals"></div>
    </div>
  );
}
