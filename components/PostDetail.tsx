import React, {useEffect, useState} from 'react';

import moment from 'moment';
import {Post} from "../services/models";
import {RichText} from '@graphcms/rich-text-react-renderer';
import Link from "next/link";
import {shuffle, toLocalizedAuthor} from "../scripts";
import Image from 'next/image';
import Sidebar from "./Sidebar";
import {useReadingProgress} from '../pages/yazi/scrollProgress'

interface gradientColors {
    gradient: string,
    glowColor: string,
    selectionColor: string
    hoverColor: string
    textColor: string
    backgroundColor: string
}

const gradients : gradientColors[] = shuffle([
    {
        gradient: "bg-gradient-to-br from-[#734b6d] to-[#2b173d] text-slate-100",
        textColor: "text-[#bf54af]",
        hoverColor: "hover:text-[#734b6d]",
        selectionColor: "selection:bg-[#734b6d]",
        glowColor: "drop-shadow-[0_0_1px_rgb(191,84,175)]",
        backgroundColor: "bg-[#bf54af]"
    },
    {
        gradient:  "bg-gradient-to-br from-[#4c719c] to-[#172640] text-slate-200",
        textColor: "text-[#488cdb]",
        hoverColor: "hover:text-[#058ced]",
        selectionColor: "selection:bg-[#1d3754]",
        glowColor: "drop-shadow-[0_0_1px_rgb(29,117,219)] bg-none",
        backgroundColor: "bg-[#488cdb]"


    },
    {
        gradient:   "bg-gradient-to-br from-[#038f6c] to-[#013025] text-slate-200",
        textColor: "text-emerald-500",
        hoverColor: "hover:text-emerald-300",
        selectionColor: "selection:bg-emerald-800",
        glowColor: "drop-shadow-[0_0_1px_rgb(1,101,47)]",
        backgroundColor: "bg-emerald-500"
    },
    {
        gradient: "bg-gradient-to-br from-[#555e69] to-[#181d24] text-slate-200",
        textColor: "text-[#4a668a]",
        hoverColor: "hover:text-[#555e69]",
        selectionColor: "selection:bg-[#3a414a]",
        glowColor: "drop-shadow-[0_0_1px_rgb(88,98,110)]",
        backgroundColor: "bg-[#4a668a]"
    },
    {
        gradient:   "bg-gradient-to-br from-[#7a1625] to-[#360b0f] text-slate-200",
        textColor: "text-[#c43d51]",
        hoverColor: "hover:text-[#d16474]",
        selectionColor: "selection:bg-[#4d121b]",
        glowColor: "drop-shadow-[0_0_1px_rgb(201,16,44)]",
        backgroundColor: "bg-[#c43d51]"
    },
    {
        gradient: "bg-gradient-to-br from-[#bf7f3f] to-[#5e2717] text-slate-200",
        textColor: "text-[#d4ae55]",
        hoverColor: "hover:text-[#edcd80]",
        selectionColor: "selection:bg-[#8a5b2c]",
        glowColor: "drop-shadow-[0_0_1px_rgb(212,174,85)]",
        backgroundColor: "bg-[#d4ae55]"
    },
])

const PostDetail = (post: Post) => {
    const [colors, setColors] = useState(gradients[1])
    useEffect(() => setColors(shuffle(gradients)[0]), [])
    const completion = useReadingProgress();
    return (
        <div className="flex flex-col">
          <span
              id="progress-bar"
              style={{
                  transform: `translateX(${completion - 100}%)`,
              }}
              className={`fixed top-[52px] z-50 w-full transition-transform duration-150 h-2 ${colors.backgroundColor} rounded-lg`}
          />
            <div
                className={`relative justify-end ${colors.gradient} ${colors.selectionColor} text-slate-200 font-thin w-full pt-20 pb-24 align-middle mb-16`}>
                <h1 className="text-7xl text-center mb-12">{post.title}</h1>
                <div
                    className="absolute bottom-0 sm:flex justify-center mx-auto gap-x-10 md:justify-left w-full rounded-b-lg px-5 pt-3 lg:p-5 my-auto">
                    {post.feylesoflar.map((feylesof, index) => (
                        <div>
                            <Link
                                href={{
                                    pathname: "/feylesof/[slug]",
                                    query: {slug: feylesof.slug},
                                }}
                            >
                                <div
                                    className="cursor-pointer flex lg:justify-center md:justify-left w-full w-auto sm:mb-0 sm:p-1 lg:mb-0 lg:p-0 lg:mr-8 text-sm md:text-base lg:text-base">
                                    <img
                                        alt={feylesof.bio}
                                        width="50"
                                        height="50"
                                        className="align-middle max-h-sm sm:block rounded-full mb-4 lg:mb-0 mr-4"
                                        src={feylesof.photo.url}
                                    />
                                    <p className="flex flex-col">
                                            <span
                                                className={`font-semibold ${colors.hoverColor} text-white`}>{feylesof.name}</span>
                                        <span
                                            className="text-left font-thin"> {toLocalizedAuthor(post.roles[index])}</span>
                                    </p>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
                <div className="flex flex-row gap-x-20 mt-">
                    <div
                        className={"absolute flex flex-row mt-6 gap-x-12 top-0 justify-center mx-auto w-full text-center align-middle justify-center"}>
                        <div className="flex flex-row gap-x-6">
                            <div className="flex flex-row">
                                <svg xmlns="http://www.w3.org/2000/svg" className="text-amber-300 h-6 w-6 mr-1.5"
                                     fill="none"
                                     viewBox="0 0 24 24"
                                     stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                                </svg>
                                <p className="text-black">
                                    <span className={"font-semibold text-amber-300"}>4 dk</span>
                                </p>
                            </div>
                            <div className="flex flex-row">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-cyan-300 mr-1.5"
                                     fill="none" viewBox="0 0 24 24"
                                     stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                                </svg>
                                <p className="text-cyan-300 text-center align-center mt-0.5">18 Ağustos 2022</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-row mx-auto">
                <Sidebar></Sidebar>
                <div className={`mx-auto text-white shadow-lg rounded-lg lg:p-4 pb-12 mb-8 bg-none ${colors.selectionColor}`}>
                    <div className="max-w-3xl mx-auto">
                        <div className="px-4 lg:px-0 mx-auto">
                            {/*<img src={post.featuredImage.url} alt="" className="mx-auto object-top h-full object-cover shadow-lg rounded-t-lg lg:rounded-lg mb-8" />*/}
                            <RichText
                                content={post.content.raw}
                                renderers={
                                    {
                                        p: ({children}) => <p
                                            className={`mb-8 bg-none`}> {children} </p>,
                                        bold: ({children}) => <span
                                            className={`${colors.textColor} ${colors.glowColor}  font-semibold`}>{children}</span>,
                                        h2: ({children}) => <h2 className="text-center my-8 text-2xl">{children}</h2>,
                                        img: ({src, altText, height, width}) =>
                                            <div className="my-8 flex mx-auto">
                                                <Image className="rounded-xl shadow-2xl"
                                                       src={src ?? ""}
                                                       alt={altText}
                                                       height={height}
                                                       width={width}
                                                       objectFit="cover"
                                                />
                                            </div>,
                                        ul: ({children}) => <ul
                                            className="space-y-4 max-w-md list-disc list-inside marker:text-yellow-500 mt-8"> {children}</ul>,
                                        li: ({children}) => <li
                                            className="text-indigo-300 hover:text-yellow-500 cursor-pointer"> {children}</li>,
                                        h3: ({children}) => <h3 className="text-xl text-center mt-6">{children}</h3>
                                    }
                                }
                            />
                        </div>
                    </div>
                </div>
                <Sidebar></Sidebar>

            </div>
        </div>

    );
};

export default PostDetail;