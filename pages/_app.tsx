import type { AppProps } from "next/app";
import React from "react";

import { Layout } from "../components/";
import "tailwindcss/tailwind.css";
import "../styles/globals.scss";
import "../styles/FeylesofPage/background.scss"
<<<<<<< HEAD
=======
import "../styles/FeylesofPage/feylesofCard.scss"

>>>>>>> 361ec7c629aa82c91e1978a4bd517e188c761c47
import "flowbite-react";


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
