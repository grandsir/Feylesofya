import 'flowbite-react'
import React from "react";
import {Post, toLocalizedAuthor} from "./Models";
import moment from "moment";
import Link from "next/link";

const gradients = [
    "from-pink-500 to-orange-400",
    "from-purple-500 to-pink-500",
    "from-green-400 to-blue-600",
    "from-cyan-500 to-blue-500",
    "from-purple-600 to-blue-500",
    "from-teal-300 to-lime-300",
    "from-red-200 via-red-300 to-yellow-200"
]
const PostCard = (post: Post) => {
    console.log(post)
    return (
        <div className="bg-white shadow-lg rounded-lg max-w-2xl mx-auto mb-4">
            <div className="lg:pl-4 lg:pr-4 p-1">
                <div className="flex justify-between text-sm pb-1">
                    <div className="text-sm">
                        <span className="text-blue-700">Yazar Önerisi</span>
                    </div>
                </div>
                <div className="grid justify-center relative mb-7 mt-3 mx-2 lg:mx-0 max-h-img min-w-img">
                    <img
                        src={post.node.featuredImage.url}
                        alt={post.node.title}
                        className="mx-auto shadow-lg rounded-lg max-h-img min-w-img"
                    />
                    <div className='relative ml-2'>
                        <div className="absolute bottom-0 left-0">
                            {
                                post.node.categories.map((category, index) =>
                                        <div
                                            className={`max-w-40 cursor-pointer hover:scale-105 relative ml-2 inline-flex shadow-xl p-0.5 mb-4 overflow-hidden text-sm font-medium text-gray-900 rounded-full group bg-gradient-to-br ${gradients[Math.floor(Math.random() * gradients.length)]}`}>
                        <Link href={`/kategori/${category.slug}`}>
                            <span className='category'>
                                <span
                                    className="transition-all ease-in duration-75 shadow-2xl rounded-full font-semibold ">
                                    {category.name}
                                </span>
                            </span>
                        </Link>
                            </div>
                                )
                            }
                        </div>
                    </div>
                </div>
                <h1 className="transition duration-100 text-center mb-4 cursor-pointer hover:text-blue-600 text-xl sm:text-2xl lg:text-3xl font-semibold">
                    <Link href={`/post/${post.node.slug}`}>
                        {`${post.node.title}`}
                    </Link>
                </h1>
                <p className="p-4 text-sm md:text-base lg:text-base">{post.node.excerpt}</p>
                <div id="container" className="flex pl-2 pb-4 justify-end w-full">
                    <Link href={post.node.slug}>
                        <button className="read-more glow-on-hover">
                    <span className="circle" aria-hidden="true">
                    <span className="icon arrow"></span>
                    </span>
                            <span className="button-text">Okumaya Devam Et</span>
                        </button>
                    </Link>
                </div>
            </div>
            <div
                className="bg-[#ededed] hidden sm:flex justify-between md:justify-left lg:mb-3 w-full rounded-b-lg px-5 pt-3 lg:p-5">
                {
                    post.node.authors.map((author, index) => (
                            <div>
                                <button id="dropdownTopButton" data-dropdown-toggle="dropdownTop"
                                        data-dropdown-placement="top"
                                        className="mr-3 mb-3 md:mb-0 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                        type="button">Dropdown top <svg class="ml-2 w-4 h-4" aria-hidden="true"
                                                                        fill="currentColor" viewBox="0 0 20 20"
                                                                        xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd"
                                          d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
                                          clip-rule="evenodd"></path>
                                </svg></button>
                                <div id="dropdownTop"
                                     className="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700">
                                    <ul className="py-1 text-sm text-gray-700 dark:text-gray-200"
                                        aria-labelledby="dropdownTopButton">
                                        <div id="container" className="flex pl-2 pb-4 justify-end w-full">
                                            <Link href={post.node.slug}>
                                                <button className="read-more glow-on-hover">
                        <span className="circle" aria-hidden="true">
                        <span className="icon arrow"></span>
                        </span>
                                                    <span className="button-text">Okumaya Devam Et</span>
                                                </button>
                                            </Link>
                                        </div>
                                    </ul>
                                </div>
                                <Link href={author.slug}>
                                    <div
                                        className="peer cursor-pointer flex lg:justify-center md:justify-left w-full w-auto sm:mb-0 sm:p-1 lg:mb-0 lg:p-0 lg:mr-8 text-sm md:text-base lg:text-base">
                                        <img
                                            alt={author.bio}
                                            width="50"
                                            height="50"
                                            className="align-middle max-h-sm hidden sm:block rounded-full mb-4 lg:mb-0 mr-4"
                                            src={author.photo.url}
                                        />
                                        <p className="flex flex-col">
                    <span className="font-semibold">
                        {author.name}
                    </span>
                                            <span className="text-left font-thin">
                        {toLocalizedAuthor(post.node.roles[index])}
                    </span>
                                        </p>
                                    </div>
                                </Link>

                                <div className="absolute bottom-12 z-50 hidden peer-hover:flex hover:flex
            w-[200px]
            flex-col bg-white drop-shadow-lg">
                                    <p> ecem mükemmel birisi </p>
                                </div>
                            </div>
                        )
                    )
                }
            </div>
        </div>
    )
}

export default PostCard 
