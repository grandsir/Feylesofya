import React, {useState} from "react";
import {CommentType} from "../services/models";
import {shuffle} from "../scripts";
import categories from "./Categories";
import {getFeylesofBadge, toLocalizedFeylesof} from "../scripts/scripts";

export interface gradientColors {
    gradient: string,
    glowColor: string,
    selectionColor: string
    hoverColor: string
    textColor: string
    iconGlowColor: string
    backgroundColor: string
    borderColor: string
}

export const gradients: gradientColors[] = shuffle([
    {
        gradient: "bg-gradient-to-br from-[#734b6d] to-[#2b173d] text-slate-100",
        textColor: "text-[#bf54af]",
        hoverColor: "hover:text-[#734b6d]",
        selectionColor: "selection:bg-[#734b6d]",
        glowColor: "drop-shadow-[0_0_1px_rgb(191,84,175)]",
        iconGlowColor: "drop-shadow-[0_0_6px_rgb(191,84,175)]",
        backgroundColor: "bg-[#bf54af]",
        borderColor: "border-[#bf54af]"
    },
    {
        gradient: "bg-gradient-to-br from-[#4c719c] to-[#172640] text-slate-200",
        textColor: "text-[#488cdb]",
        hoverColor: "hover:text-[#058ced]",
        selectionColor: "selection:bg-[#1d3754]",
        glowColor: "drop-shadow-[0_0_1px_rgb(29,117,219)]",
        iconGlowColor: "drop-shadow-[0_0_6px_rgb(29,117,219)]",
        backgroundColor: "bg-[#488cdb]",
        borderColor: "border-[#488cdb]"
    },
    {
        gradient: "bg-gradient-to-br from-[#038f6c] to-[#013025] text-slate-200",
        textColor: "text-emerald-500",
        hoverColor: "hover:text-emerald-300",
        selectionColor: "selection:bg-emerald-800",
        glowColor: "drop-shadow-[0_0_1px_rgb(1,101,47)]",
        iconGlowColor: "drop-shadow-[0_0_6px_rgb(1,101,47)]",
        backgroundColor: "bg-emerald-500",
        borderColor: "border-emerald-500"

    },
    {
        gradient: "bg-gradient-to-br from-[#555e69] to-[#181d24] text-slate-200",
        textColor: "text-[#4a668a]",
        hoverColor: "hover:text-[#555e69]",
        selectionColor: "selection:bg-[#3a414a]",
        glowColor: "drop-shadow-[0_0_1px_rgb(88,98,110)]",
        iconGlowColor: "drop-shadow-[0_0_6px_rgb(88,98,110)]",
        backgroundColor: "bg-[#4a668a]",
        borderColor: "border-[#4a668a]"
    },
    {
        gradient: "bg-gradient-to-br from-[#7a1625] to-[#360b0f] text-slate-200",
        textColor: "text-[#c43d51]",
        hoverColor: "hover:text-[#d16474]",
        selectionColor: "selection:bg-[#4d121b]",
        glowColor: "drop-shadow-[0_0_1px_rgb(201,16,44)]",
        iconGlowColor: "drop-shadow-[0_0_6px_rgb(201,16,44)]",
        backgroundColor: "bg-[#c43d51]",
        borderColor: "border-[#c43d51]"
    },
    {
        gradient: "bg-gradient-to-br from-[#bf7f3f] to-[#5e2717] text-slate-200",
        textColor: "text-[#d4ae55]",
        hoverColor: "hover:text-[#edcd80]",
        selectionColor: "selection:bg-[#8a5b2c]",
        glowColor: "drop-shadow-[0_0_1px_rgb(212,174,85)]",
        iconGlowColor: "drop-shadow-[0_0_6px_rgb(212,174,85)]",
        backgroundColor: "bg-[#d4ae55]",
        borderColor: "border-[#d4ae55]"


    },
])

interface IComments {
    comments: CommentType[]
}

const colors = gradients[0]
const Comments = ({comments}: IComments) => {
    const [openComment, setOpenComment] = useState("")
    return (
        <div className="antialiased mx-auto max-w-screen-sm mb-32">
            <div className="space-y-4 mt-6">
                {comments.map((comment) =>
                    <div className="flex">
                        <div className="flex-shrink-0 mr-3">
                            <img className="mt-2 rounded-full w-8 h-8 sm:w-10 sm:h-10"
                                 src={comment.feylesof.photo.url}
                                 alt=""/>
                        </div>
                        <div className={`flex-1 ${colors.borderColor} border rounded-lg px-4 py-2 sm:px-6 sm:py-4 leading-relaxed`}>
                            <span className={`${colors.textColor} ${colors.glowColor}`}>{comment.feylesof.name}</span>
                            <div className="w-full justify-between">
                                <span className={`text-xs`}>Bugün 15.34</span>
                                <span className={`${getFeylesofBadge(comment.feylesof.feylesofType)} text-xs font-semibold mr-2 px-2.5 py-0.5`}>
                                    { toLocalizedFeylesof(comment.feylesof.feylesofType) }
                                </span>
                            </div>

                            <p className="text-sm">
                                {comment.comment}
                            </p>
                            <div className="mt-4 flex items-center">
                                <div className="flex -space-x-2 mr-2">
                                    {comment.replies.map((reply) =>
                                        <img className={"rounded-full w-6 h-6 "} src={reply.feylesof.photo.url} alt={reply.feylesof.id}/>
                                    )}
                                </div>
                                <div className = {` flex flex-row justify-between items-center w-full`}>
                                    <div className={`ml-2 flex flex-row items-center text-sm text-gray-500 font-semibold cursor-pointer`} onClick={() => { setOpenComment( openComment === comment.slug ? "" :  comment.slug)} }>
                                        <span className ={`${comment.replies.length === 0 ? "hidden" : ""}`}>{comment.replies.length} Yanıt</span>
                                        <svg className={`w-6 h-6 ${openComment == comment.slug ? "rotate-180":""} ${comment.replies.length === 0 ? "hidden" : ""} transition-transform duration-300`} aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7">
                                            </path>
                                        </svg>
                                    </div>
                                    <div className="flex flex-row align-middle items-center justify-center cursor-pointer">
                                        <svg className={`w-8 h-8 text-white bg-gray-700 rounded-full p-2 mr-2`} fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                                  d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6"></path>
                                        </svg>
                                        <span className="text-slate-200">Yanıt Ver</span>
                                    </div>
                                </div>
                            </div>
                            <div className="my-4 space-y-4">
                                <div className={`${openComment === comment.slug ? "" : "hidden"} flex flex-col`}>
                                    {comment.replies.map((reply) =>
                                        <div>
                                            <div className="flex-shrink-0 mr-3 flex flex-row space-y-6">
                                                <img className="mt-8 rounded-full w-7 h-7 mr-3 sm:w-8 sm:h-8"
                                                     src={reply.feylesof.photo.url}
                                                     alt=""/>
                                                <div
                                                    className="flex-1 bg-gray-800 rounded-lg px-4 py-2 sm:px-6 sm:py-4 leading-relaxed">
                                                    <span className={`${colors.textColor}`}>{reply.feylesof.name}</span> <span className="text-xs text-gray-400">10 dk önce</span>
                                                    <p className="text-xs sm:text-sm">
                                                        {reply.reply}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
)
}

export default Comments