import React from "react";
import { Post, toLocalizedAuthor } from "./Models";
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
const PostCard = (post : Post) => {
    console.log(post)
    return ( 
        <div className= "bg-white shadow-lg rounded-lg max-w-2xl">
        <div className="lg:pl-4 lg:pr-4 p-1">
            <div className="flex justify-between text-sm pb-1">
                <div className="text-sm"> 
                    <span className="text-blue-700">Yazar Önerisi</span> 
                </div>
            </div>
            <div className="relative mb-7 mt-3 mx-2 lg:mx-0">
                <img
                    src={post.node.featuredImage.url}
                    alt={post.node.title}
                    height={"440"}
                    width={"900"}
                    className="shadow-lg rounded-lg"
                />
                <div className="absolute bottom-0 left-0 ml-1">
                    { 
                    post.node.categories.map((category, index) => 
                    <div className={`cursor-pointer hover:scale-105 relative ml-2 inline-flex shadow-xl p-0.5 mb-4 overflow-hidden text-sm font-medium text-gray-900 rounded-full group bg-gradient-to-br ${gradients[Math.floor(Math.random()*gradients.length)]}`}>                    
                    <Link href={`/kategori/${category.slug}`}>
                        <span className="relative px-3 py-2.5 transition-all ease-in duration-75 shadow-2xl rounded-full font-semibold">
                            {category.name}
                        </span>
                    </Link>
                    </div>
                    )
                    }
                    </div>
            </div>
            <h1 className="transition duration-100 text-center mb-4 cursor-pointer hover:text-blue-600 text-3xl font-semibold">
                <Link href={`/post/${post.node.slug}`}>
                    {`${post.node.title}`} 
                </Link>
            </h1>
            <p className="p-4">{post.node.excerpt}</p>
            <div id="container" className="flex pl-2 pb-4 justify-end w-full">
                <button className="read-more glow-on-hover">
                    <span className="circle" aria-hidden="true">
                    <span className="icon arrow"></span>
                    </span>
                    <span className="button-text">Okumaya Devam Et</span>
                </button>
            </div>
        </div>
        <div className="bg-[#ededed] block lg:flex lg:justify-between md:justify-left lg:mb-3 w-full rounded-b-lg px-5 pt-3 lg:p-5">
        {
        post.node.authors.map((author, index) => (
            <div className="flex lg:justify-center md:justify-left w-full lg:w-auto lg:mr-8">
                <img
                    alt={author.bio}
                    width= {"50"}
                    height={"50"}
                    className="align-middle rounded-full object-scale-down mb-4 lg:mb-0 mr-4"
                    src= {author.photo.url}
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
        )
    )
}
</div>
</div>
)
}

export default PostCard 
