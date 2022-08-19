import type { NextPage } from "next";
import React, { useEffect, useMemo, useState } from "react";
import Head from "next/head";
import { Categories, PostCard } from "../components";
import { Category, Post } from "../services/models";
import Sidebar from "../components/Sidebar";
import { getPosts } from "../services";

type HomeProps = {
  posts: Post[];
  children: JSX.Element;
};

const Home: NextPage<HomeProps> = (posts) => {
  const [postList, setPostList] = useState<[{node: Post}] | []>([]);
  const [selectedCategory, setSelectedCategory] = useState<Category>();

  useEffect(() => {
    getPosts().then((posts) => {
      console.log(posts)

      if (posts) {
        setPostList(posts)
        return
      }
    });
  }, []);

  function getFilteredPosts() {
    if (!selectedCategory) {
      return postList;
    }
    return postList.filter((post) => {
      var filtered = false;
      post.node.categories.map((category) => {
        if (selectedCategory != undefined) {
          if (category.name === selectedCategory.name) {
            filtered = true;
            return;
          }
        }
      });
      return filtered;
    });
  }

  var filteredPostList = useMemo(getFilteredPosts, [
    selectedCategory,
    postList,
  ]);

  function changeCategory(category: Category | undefined) {
    setSelectedCategory(category);
  }

  return (
    <div className="self-start h-max w-full">
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
        <div className="grow lg:col-span-8 col-span-1">
          {
            filteredPostList.map((post) => (
            <PostCard {...post.node}></PostCard>
          ))}
        </div>
        <Categories changeCategory={changeCategory} />
      </div>
    </div>
  );
};

export default Home;
