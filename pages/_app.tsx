import type { AppProps } from "next/app";
import React, { useEffect, useState } from "react";

import { Layout } from "../components/";
import "tailwindcss/tailwind.css";
import "../styles/globals.scss";
import "flowbite-react";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
