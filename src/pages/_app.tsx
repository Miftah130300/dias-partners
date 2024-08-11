import "src/styles/globals.css";
import type { AppProps } from "next/app";
import { arial } from "src/font/font";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={arial}>
      <Component {...pageProps} />
    </main>
  )
}
