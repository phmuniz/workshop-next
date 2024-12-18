import "@/styles/globals.css";
import "tailwindcss/tailwind.css";
import 'animate.css';
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
