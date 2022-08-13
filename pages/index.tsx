import type { NextPage } from "next";
import Head from "next/head";
import React from "react";
import { PostCard, PostWidget, Categories } from "../components";
import { Feylesof, Post } from "../components/Models";
import Sidebar from "../components/Sidebar";
import { getQuery, getFeylesof } from "../services";
import { postQuery, feylesofQuery } from "../services";

import feylesof from "./feylesof";

type HomeProps = {
  posts: Post[];
  children: JSX.Element;
};

// @ts-ignore
const Home: NextPage = ({ posts }: HomeProps) => {
  return (
    <div className="container mx-auto px-10 mb-8 mt-5">
      <Head>
        <link
          rel="stylesheet"
          href="https://unpkg.com/flowbite@1.3.3/dist/flowbite.min.css"
        />

        <title>Feylesofya</title>
        <link rel="icon" href="/favicon.ico" />
        <script src="https://unpkg.com/@themesberg/flowbite@1.3.0/dist/datepicker.bundle.js" />
        <script src="https://unpkg.com/@themesberg/flowbite@1.3.0/dist/flowbite.bundle.js" />
        <script src="https://kit.fontawesome.com/95a02bd20d.js"></script>
      </Head>
      <div className="flex flex-nowrap mx-auto mt-24 ">
        <Sidebar></Sidebar>
        <div className="lg:col-span-8 col-span-1">
          {posts.map((post: Post) => (
            <PostCard {...post}></PostCard>
          ))}
        </div>
        <Categories />
      </div>
    </div>
  );
};

export async function getStaticProps() {
  const posts = (await getQuery(postQuery)) || [];

  return {
    props: { posts },
  };
}

export default Home;
