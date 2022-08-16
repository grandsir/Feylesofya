import type {NextPage} from "next";
import React, {useEffect, useMemo, useState} from "react";
import Head from "next/head";
import {Categories, PostCard} from "../components";
import {Category, Post} from "../components/Models";
import Sidebar from "../components/Sidebar";
import {getCategories, getQuery, postQuery} from "../services";
import {categoryQuery} from "../services/query";
import {shuffle} from "../scripts";

type HomeProps = {
  posts: Post[];
  children: JSX.Element;
};

const gradients = [
  "from-pink-500 to-orange-400",
  "from-purple-500 to-pink-500",
  "from-green-400 to-blue-600",
  "from-cyan-500 to-blue-500",
  "from-purple-600 to-blue-500",
  "from-teal-300 to-lime-300",
  "from-red-200 via-red-300 to-yellow-200",
];

// @ts-ignore
const Home: NextPage = ({ posts }: HomeProps) => {

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories(categoryQuery).then((newCategories) =>
        setCategories(newCategories)
    );
  }, []);

  const shuffledGradients = shuffle(gradients)

  const [postList, setPostList] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState();

  useEffect(() => {
    getQuery(postQuery).then((posts) => setPostList(posts));
  }, []);

  function filterPosts(post: Post) {
    var filtered = false;
    post.node.categories.map((category) => {
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
    return postList.filter((post) => filterPosts(post));
  }

  var filteredPostList = useMemo(getFilteredPosts, [
    selectedCategory,
    postList,
  ]);

  function changeCategory(category : Category) {
    // @ts-ignore
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
