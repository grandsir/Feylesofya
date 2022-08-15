import type { NextPage } from "next";
import React, { useEffect, useState, useMemo } from "react";
import Head from "next/head";
import { PostCard, PostWidget, Categories } from "../components";
import { Feylesof, Post } from "../components/Models";
import Sidebar from "../components/Sidebar";
import { getQuery, getFeylesof } from "../services";
import { postQuery, feylesofQuery } from "../services";
import Script from "next/script";
import feylesof from "./feylesof";

type HomeProps = {
  posts: Post[];
  children: JSX.Element;
};

// @ts-ignore
const Home: NextPage = ({ posts }: HomeProps) => {
  const [postList, setPostList] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState();

  useEffect(() => {
    getQuery(postQuery).then((posts) => setPostList(posts));
  }, []);

  function filterPosts(post) {
    var filtered = false;
    post.node.categories.map((category) => {
      console.log(selectedCategory);
      console.log(category);
      if (category.name === selectedCategory.name) {
        filtered = true;
        return;
      }
    });
    return filtered;
  }

  function getFilteredPosts() {
    if (!selectedCategory) {
      return postList;
    }
    const filteredPosts = postList.filter((post) => filterPosts(post));
    return filteredPosts;
  }

  var filteredPostList = useMemo(getFilteredPosts, [
    selectedCategory,
    postList,
  ]);

  function changeCategory(category) {
    setSelectedCategory(category);
  }

  return (
    <div className="flex self-start container px-10 h-max">
      <Head>
        <link
          rel="stylesheet"
          href="https://unpkg.com/flowbite@1.3.3/dist/flowbite.min.css"
        />
        <link rel="icon" href="/favicon.ico" />
        <title>Feylesofya</title>
        <script src="https://unpkg.com/@themesberg/flowbite@1.3.0/dist/datepicker.bundle.js" />
        <script src="https://unpkg.com/@themesberg/flowbite@1.3.0/dist/flowbite.bundle.js" />
        <script src="https://kit.fontawesome.com/95a02bd20d.js"></script>
      </Head>
      <div className="flex self-start mt-9 min-h-screen">
        <Sidebar></Sidebar>
        <div className="lg:col-span-8 col-span-1">
          {filteredPostList.map((post: Post) => (
            <PostCard {...post}></PostCard>
          ))}
        </div>
        <Categories changeCategory={changeCategory} />
      </div>
    </div>
  );
};

export default Home;
