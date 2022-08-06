import React from "react";
import { Post, toLocalizedAuthor } from "./Models";
import moment from "moment";
import Link from "next/link";

  
const PostCard = (post : Post) => {
    return ( 
        <div className="bg-white shadow-lg rounded-lg p-1 lg:pl-4 lg:pr-4 max-w-2xl">
            <div className="flex justify-between text-sm pb-1">
                <div className="text-sm"> 
                    <span className="text-blue-700">Yazar Önerisi</span> 
                </div>
            </div>
            <div className="relative overflow-hidden shadow-md pb-80 mb-2 object-fit">
                <img
                    src={post.node.featuredImage.url}
                    alt={post.node.title}
                    className="object-fit absolute w-full shadow-lg rounded-t-lg lg:rounded-lg"
                />
            </div>
            <span className="font-post_title px-4"> { post.node.categories[0].name } </span>
            <h1 className="transition duration-500 text-center mb-8 cursor-pointer hover:text-blue-600 text-3xl font-semibold">
                <Link href={`/post/${post.node.slug}`}>
                    {`${post.node.title}dir?` /* dir? ne diye sorma */ } 
                </Link>
            </h1>
            <div className="block lg:flex text-center items-center justify-between px-4 mb-3 w-full">
                    {
                    post.node.authors.map((author, index) => (
                        <div className="flex justify-center mb-7 lg:mb-0 w-full lg:w-auto mr-8">
                            <img
                                alt={author.bio}
                                width= {"50"}
                                height={"50"}
                                className="align-middle rounded-full object-scale-down mr-4"
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
            <p className="p-4">{post.node.excerpt}</p>
            <div id="container" className="pl-2">
                <button className="read-more glow-on-hover">
                    <span className="circle" aria-hidden="true">
                    <span className="icon arrow"></span>
                    </span>
                    <span className="button-text">Okumaya Devam Et</span>
                </button>
                </div>
            </div>
    )
}

export default PostCard 
