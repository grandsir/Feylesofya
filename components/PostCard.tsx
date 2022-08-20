import "flowbite-react";
import React, { useEffect, useState } from "react";
import { Category, Post } from "../services/models";
import Link from "next/link";
import { getCategories } from "../services";
import { shuffle, toLocalizedAuthor } from "../scripts";

const gradients = shuffle([
  "bg-gradient-to-br from-[#734b6d] to-[#2b173d] text-slate-100",
  "bg-gradient-to-br from-[#4c719c] to-[#172640] text-slate-200",
  "bg-gradient-to-br from-[#038f6c] to-[#013025] text-slate-200",
  "bg-gradient-to-br from-[#555e69] to-[#181d24] text-slate-200",
  "bg-gradient-to-br from-[#7a1625] to-[#360b0f] text-slate-200",
  "bg-gradient-to-br from-[#bf7f3f] to-[#5e2717] text-slate-200",

]);

//  "bg-gradient-to-br from-[#ffffff] to-[#19547b] text-gray-800",
// "bg-gradient-to-br from-purple-500 to-pink-500 text-gray-800",
// "bg-gradient-to-br from-green-400 to-blue-600 text-gray-800",
// "bg-gradient-to-br from-cyan-500 to-blue-500 text-gray-800",
// "bg-gradient-to-br from-purple-600 to-blue-500 text-gray-800",
// "bg-gradient-to-br from-teal-300 to-lime-300 text-gray-800",
// "bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 text-gray-800",
const PostCard = (post: Post) => {
  const [gradient, setGradient] = useState<Map<string, string>>(
    new Map<string, string>()
  );

  useEffect(() => {
    getCategories().then((categories) => {
      const gradientDictionary = new Map<string, string>();
      categories.map((category: Category, index: number) => {
        gradientDictionary.set(
          category.slug,
          gradients[index % gradients.length]
        );
      });
      setGradient(gradientDictionary);
    });
  }, []);

  return (
    <div className="relative mx-auto">
      <div className="post-card sm:min-w-post max-w-2xl mb-4 mx-auto">
        <div className="lg:pl-4 lg:pr-4 p-1">
          <div className="flex justify-between text-sm pt-2 px-1">
            <div className="text-sm"></div>
          </div>
          <div className="grid justify-center relative mb-7 mt-3 mx-2 lg:mx-0 max-h-3xl min-w-img">
            <img
              src={post.featuredImage.url}
              alt={post.title}
              className="mx-auto shadow-lg rounded-lg max-h-3xl min-w-img"
            />
            <div className="hidden cg_post_disappear:block relative ml-2">
              <div className="absolute bottom-0 left-0">
                {post.categories.map((category) => (
                  <div
                    id={category.slug}
                    className={`max-w-40 cursor-pointer hover:scale-110 transition duration-300 relative ml-2 inline-flex shadow-xl p-0.5 mb-4 text-sm font-medium rounded-full group ${gradient.get(
                      category.slug
                    )}`}
                  >
                    <Link href={`/kategori/${category.slug}`}>
                      <span className="category">
                        <span className="transition-all ease-in duration-75 shadow-3xl rounded-full font-semibold ">
                          {category.name}
                        </span>
                      </span>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <h1 className="transition duration-100 text-center mb-4 cursor-pointer hover:text-indigo-600 text-3xl font-semibold ">
            <Link
              href={{
                pathname: "/yazi/[slug]",
                query: { slug: post.slug },
              }}
            >{`${post.title}`}</Link>
          </h1>
          <p className="p-4 text-sm md:text-base lg:text-base">
            {post.excerpt}
          </p>
          <div className="flex pl-2 pb-4 justify-end w-full">
            <Link
                href={{
                  pathname: "/yazi/[slug]",
                  query: { slug: post.slug },
                }}
            >
              <button className="read-more glow-on-hover">
                <span className="circle" aria-hidden="true">
                  <span className="icon arrow"></span>
                </span>
                <span className="button-text">Okumaya Devam Et</span>
              </button>
            </Link>
          </div>
        </div>
        <hr className={"border-gray-700 opacity-50"}></hr>
        <div className="sm:flex justify-between md:justify-left lg:mb-3 w-fullrounded-b-lg px-5 pt-3 lg:p-5">
          {post.feylesoflar.map((feylesof, index) => (
            <div>
              <Link
                href={{
                  pathname: "/feylesof/[slug]",
                  query: { slug: feylesof.slug },
                }}
              >
                <div className="peer cursor-pointer flex lg:justify-center md:justify-left w-full w-auto sm:mb-0 sm:p-1 lg:mb-0 lg:p-0 lg:mr-8 text-sm md:text-base lg:text-base">
                  <img
                    alt={feylesof.bio}
                    width="50"
                    height="50"
                    className="align-middle max-h-sm sm:block rounded-full shadow-2xl mb-4 lg:mb-0 mr-4"
                    src={feylesof.photo.url}
                  />
                  <p className="flex flex-col">
                    <span className="font-semibold hover:text-indigo-500">{feylesof.name}</span>
                    <span className="text-left font-thin">
                      {toLocalizedAuthor(post.roles[index])}
                    </span>
                  </p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PostCard;
