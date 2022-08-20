import React from 'react';

import moment from 'moment';
import {Post} from "../services/models";
import { RichText } from '@graphcms/rich-text-react-renderer';
import  Link from "next/link";
import {toLocalizedAuthor} from "../scripts";
import Image from 'next/image';

const PostDetail = ( post : Post) => {
    return (
    <div className="text-white shadow-lg rounded-lg lg:p-8 pb-12 mb-8 bg-none selection:bg-emerald-800">
       <div className = "max-w-3xl mx-auto">
        <img src={post.featuredImage.url} alt="" className="mx-auto object-top h-full object-cover shadow-lg rounded-t-lg lg:rounded-lg mb-8"/>
        <div className="px-4 lg:px-0 mx-auto">
            <div className="sm:flex justify-between mx-auto gap-x-10 md:justify-left lg:mb-3 w-full rounded-b-lg px-5 pt-3 lg:p-5">
                {post.feylesoflar.map((feylesof, index) => (
                    <div>
                        <Link
                            href={{
                                pathname: "/feylesof/[slug]",
                                query: { slug: feylesof.slug },
                            }}
                        >
                            <div className="cursor-pointer flex lg:justify-center md:justify-left w-full w-auto sm:mb-0 sm:p-1 lg:mb-0 lg:p-0 lg:mr-8 text-sm md:text-base lg:text-base">
                                <img
                                    alt={feylesof.bio}
                                    width="50"
                                    height="50"
                                    className="align-middle max-h-sm sm:block rounded-full mb-4 lg:mb-0 mr-4"
                                    src={feylesof.photo.url}
                                />
                                <p className="flex flex-col">
                                    <span className="font-semibold">{feylesof.name}</span>
                                    <span className="text-left font-thin">
              {toLocalizedAuthor(post.roles[index])}
            </span>
                                </p>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
            <hr/>
            <h1 className="mb-8 text-3xl font-bold mt-12 text-center">{post.title}</h1>

            <RichText
                content={post.content.raw}
                renderers={
                    {
                        p: ({children}) => <p className="mb-8 bg-none selection:bg-emerald-800"> {children} </p>,
                        bold: ({children}) => <span className = "text-emerald-600 selection:text-black font-semibold">{children}</span>,
                        h2: ({children}) => <h2 className = "text-center my-8 text-2xl">{children}</h2>,
                        img: ({ src, altText, height, width }) =>
                            <div className = "my-8 ">
                                <Image className= "shadow-2xl rounded-xl"
                                       src={src ?? ""}
                                       alt={altText}
                                       height={height}
                                       width={width}
                                       objectFit="cover"
                                />
                            </div>,
                        ul: ( {children}) => <ul className = "space-y-4 max-w-md list-disc list-inside marker:text-yellow-500 mt-8"> { children }</ul>,
                        li:  ( {children}) => <li className = "text-indigo-300 hover:text-yellow-500 cursor-pointer"> { children }</li>,
                        h3:  ( {children}) => <h3 className = "text-xl text-center mt-6">{ children }</h3>
                    }
                }
            />
         </div>
        </div>
    </div>
    );
};

export default PostDetail;