import React, { useEffect, useState, Transition } from 'react';
import moment from 'moment';
import { Post } from "../services/models";
import { RichText } from '@graphcms/rich-text-react-renderer';
import Link from "next/link";
import { shuffle, toLocalizedAuthor } from "../scripts";
import Image from 'next/image';
import { SidebarProps } from "./Sidebar";
import { useReadingProgress } from '../pages/yazi/scrollProgress'
import 'flowbite-react'

export const sidebarMenu: SidebarProps[] = [
    {
        name: "Ana Sayfa",
        iconPath:
            "M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z",
        slug: "",
    },
    {
        name: "Profilim",
        iconPath: "M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z",
        slug: "/feylesof/demirhan",
    },
    {
        name: "Ara",
        iconPath:
            "M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z",
        slug: "",
    },
    {
        name: "Felsefe Kapsülü",
        iconPath:
            "M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2",
        slug: "felsefe-kapsulu",
    },
    {
        name: "Tartışma",
        iconPath:
            "M18 13V5a2 2 0 00-2-2H4a2 2 0 00-2 2v8a2 2 0 002 2h3l3 3 3-3h3a2 2 0 002-2zM5 7a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm1 3a1 1 0 100 2h3a1 1 0 100-2H6z",
        slug: "tartisma",
    },
    {
        name: "Tavsiye Eserler",
        iconPath:
            "M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z",
        slug: "tavsiye-eserler",
    },
    {
        name: "Gizli Yazı",
        iconPath:
            "M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z",
        slug: "makale",
    },
    {
        name: "Academia",
        iconPath: "M7 2a1 1 0 00-.707 1.707L7 4.414v3.758a1 1 0 01-.293.707l-4 4C.817 14.769 2.156 18 4.828 18h10.343c2.673 0 4.012-3.231 2.122-5.121l-4-4A1 1 0 0113 8.172V4.414l.707-.707A1 1 0 0013 2H7zm2 6.172V4h2v4.172a3 3 0 00.879 2.12l1.027 1.028a4 4 0 00-2.171.102l-.47.156a4 4 0 01-2.53 0l-.563-.187a1.993 1.993 0 00-.114-.035l1.063-1.063A3 3 0 009 8.172z",
        slug: "akademi",
    },
];

interface gradientColors {
    gradient: string,
    glowColor: string,
    selectionColor: string
    hoverColor: string
    textColor: string
    iconGlowColor: string
    backgroundColor: string
}

const gradients: gradientColors[] = shuffle([
    {
        gradient: "bg-gradient-to-br from-[#734b6d] to-[#2b173d] text-slate-100",
        textColor: "text-[#bf54af]",
        hoverColor: "hover:text-[#734b6d]",
        selectionColor: "selection:bg-[#734b6d]",
        glowColor: "drop-shadow-[0_0_1px_rgb(191,84,175)]",
        iconGlowColor: "drop-shadow-[0_0_6px_rgb(191,84,175)]",
        backgroundColor: "bg-[#bf54af]"
    },
    {
        gradient: "bg-gradient-to-br from-[#4c719c] to-[#172640] text-slate-200",
        textColor: "text-[#488cdb]",
        hoverColor: "hover:text-[#058ced]",
        selectionColor: "selection:bg-[#1d3754]",
        glowColor: "drop-shadow-[0_0_1px_rgb(29,117,219)]",
        iconGlowColor: "drop-shadow-[0_0_6px_rgb(29,117,219)]",
        backgroundColor: "bg-[#488cdb]"
    },
    {
        gradient: "bg-gradient-to-br from-[#038f6c] to-[#013025] text-slate-200",
        textColor: "text-emerald-500",
        hoverColor: "hover:text-emerald-300",
        selectionColor: "selection:bg-emerald-800",
        glowColor: "drop-shadow-[0_0_1px_rgb(1,101,47)]",
        iconGlowColor: "drop-shadow-[0_0_6px_rgb(1,101,47)]",
        backgroundColor: "bg-emerald-500"
    },
    {
        gradient: "bg-gradient-to-br from-[#555e69] to-[#181d24] text-slate-200",
        textColor: "text-[#4a668a]",
        hoverColor: "hover:text-[#555e69]",
        selectionColor: "selection:bg-[#3a414a]",
        glowColor: "drop-shadow-[0_0_1px_rgb(88,98,110)]",
        iconGlowColor: "drop-shadow-[0_0_6px_rgb(88,98,110)]",
        backgroundColor: "bg-[#4a668a]"
    },
    {
        gradient: "bg-gradient-to-br from-[#7a1625] to-[#360b0f] text-slate-200",
        textColor: "text-[#c43d51]",
        hoverColor: "hover:text-[#d16474]",
        selectionColor: "selection:bg-[#4d121b]",
        glowColor: "drop-shadow-[0_0_1px_rgb(201,16,44)]",
        iconGlowColor: "drop-shadow-[0_0_6px_rgb(201,16,44)]",
        backgroundColor: "bg-[#c43d51]"
    },
    {
        gradient: "bg-gradient-to-br from-[#bf7f3f] to-[#5e2717] text-slate-200",
        textColor: "text-[#d4ae55]",
        hoverColor: "hover:text-[#edcd80]",
        selectionColor: "selection:bg-[#8a5b2c]",
        glowColor: "drop-shadow-[0_0_1px_rgb(212,174,85)]",
        iconGlowColor: "drop-shadow-[0_0_6px_rgb(212,174,85)]",
        backgroundColor: "bg-[#d4ae55]"
    },
])

const PostDetail = (post: Post) => {
    const [colors, setColors] = useState(gradients[1])
    const [showMenu, setShowMenu] = useState(true)



    useEffect(() => setColors(shuffle(gradients)[0]), [])
    const completion = useReadingProgress();
    return (
        <div className="flex flex-col">
            <span
                id="progress-bar"
                style={{
                    transform: `translateX(${completion - 100}%)`,
                }}
                className={`fixed top-[52px] z-50 ${colors.iconGlowColor} w-full transition-transform duration-150 h-1 ${colors.backgroundColor} rounded-md`}
            />
            <div
                className={`relative justify-end ${colors.gradient} ${colors.selectionColor} text-slate-200 font-thin w-full pt-20 pb-24 align-middle mb-16 mx-auto`}>
                <h1 className="text-7xl text-center mb-12">{post.title}</h1>
                <div
                    className="absolute bottom-0 sm:flex justify-center mx-auto gap-x-10 md:justify-left w-full rounded-b-lg px-5 pt-3 lg:p-5 my-auto">
                    {post.feylesoflar.map((feylesof, index) => (
                        <div>
                            <Link
                                href={{
                                    pathname: "/feylesof/[slug]",
                                    query: { slug: feylesof.slug },
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
                <div className="flex flex-row gap-x-20">
                    <div
                        className={"absolute flex flex-row mt-6 gap-x-12 top-0 justify-center mx-auto w-full text-center align-middle justify-center"}>
                        <div className="flex flex-row gap-x-6">
                            <div className="flex flex-row">
                                <svg xmlns="http://www.w3.org/2000/svg" className="text-amber-300 h-6 w-6 mr-1.5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
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
                                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                                <p className="text-cyan-300 text-center align-center mt-0.5">18 Ağustos 2022</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex mx-auto">
                <div className="hidden menu_disappear:block sticky self-start top-32 cg_single:ml-20 mr-20">
                    <ol className={`relative ${showMenu ? "border-l" : ""} border-gray-700`}>
                        <button className={`${showMenu ? "rotate-180" : ""} transition-transform duration-300 ease-in-out -left-[28px] bg-gray-800 ring-[12px] ring-[#0e0a1a]  rounded-full w-14 h-14 mb-10 inline-flex items-center`}
                            onClick={() => setShowMenu(!showMenu)}>
                            <svg className={`ml-[8px] mt-[3px] w-10 h-10 ${colors.textColor} ${colors.iconGlowColor}`} aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7">
                                </path>
                            </svg>
                        </button>
                        <div className={`${showMenu ? "" : "opacity-0"} transition-opacity duration-300`}>
                            {sidebarMenu.map((sidebarItem: SidebarProps, index: number) => {
                                return (
                                    <li className={`mb-10 ml-5 items-center justify-center align-middle`}>
                                        <a
                                            href={sidebarItem.slug}
                                            className={`flex items-center p-2 text-base font-normal text-[#DBD8E3] rounded-lg ${colors.hoverColor}`}>
                                            <span className='flex absolute -left-[18px] justify-center items-center align-middle w-9 h-9 bg-gray-800 rounded-full ring-[12px] ring-[#0e0a1a]'>
                                                <svg
                                                    aria-hidden="true"
                                                    className={`${colors.iconGlowColor} w-6 h-6 ${colors.textColor} transition duration-75 dark:text-gray-400 group-hover:text-gray-50 dark:group-hover:text-white m-auto`}
                                                    fill="currentColor"
                                                    viewBox="0 0 20 20"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d={sidebarItem.iconPath}
                                                        clipRule="evenodd"
                                                    ></path>
                                                </svg>
                                            </span>

                                            <span className="flex-1 ml-3 whitespace-nowrap">
                                                {sidebarItem.name}
                                            </span>
                                        </a>
                                    </li>
                                );
                            })}
                        </div>
                    </ol>
                </div>
                <div className={`text-white shadow-lg rounded-lg lg:p-4 pb-12 mb-8 bg-none ${colors.selectionColor}`}>
                    <div className="max-w-3xl mx-auto">
                        <div className="px-4 lg:px-0 mx-auto">
                            {/*<img src={post.featuredImage.url} alt="" className="mx-auto object-top h-full object-cover shadow-lg rounded-t-lg lg:rounded-lg mb-8" />*/}
                            <RichText
                                content={post.content.raw}
                                renderers={
                                    {
                                        p: ({ children }) => <p
                                            className={`mb-8 bg-none`}> {children} </p>,
                                        bold: ({ children }) => <span
                                            className={`${colors.textColor} ${colors.glowColor}  font-semibold`}>{children}</span>,
                                        h2: ({ children }) => <h2 className="text-center my-8 text-2xl">{children}</h2>,
                                        img: ({ src, altText, height, width }) =>
                                            <div className="my-8 flex mx-auto">
                                                <Image className="rounded-xl shadow-2xl"
                                                    src={src ?? ""}
                                                    alt={altText}
                                                    height={height}
                                                    width={width}
                                                    objectFit="cover"
                                                />
                                            </div>,
                                        ul: ({ children }) => <ul
                                            className="space-y-4 max-w-md list-disc list-inside marker:text-yellow-500 mt-8"> {children}</ul>,
                                        li: ({ children }) => <li
                                            className="text-indigo-300 hover:text-yellow-500 cursor-pointer"> {children}</li>,
                                        h3: ({ children }) => <h3 className="text-xl text-center mt-6">{children}</h3>
                                    }
                                }
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default PostDetail;