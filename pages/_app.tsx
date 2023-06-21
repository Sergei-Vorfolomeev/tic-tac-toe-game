import Head from "next/head";
import type { AppProps } from "next/app";
import "../styles/global.css";
import { Inter } from "next/font/google";
import { clsx } from "clsx";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div lang="en" className={clsx(inter.className, "text-slate-900")}>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Component {...pageProps} />
    </div>
  );
}
