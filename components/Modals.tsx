import Link from "next/link";
import React, { MutableRefObject, useEffect, useRef, useState } from "react";
import { useOnClickOutside } from "usehooks-ts";
import { Feylesof } from "../services/models";

interface ModalProps {
    visible: boolean
    feylesofInfo: Feylesof
    changeModalVisibility: (visible: boolean) => void
}

const FollowerModal = ({ visible, feylesofInfo, changeModalVisibility }: ModalProps) => {
    const followers = feylesofInfo.followers

    const followerRef = useRef(null)

    const handleClickOutside = () => {
        if (followerRef!.current) {
            changeModalVisibility(false);
        }
    }
    useOnClickOutside(followerRef, handleClickOutside)
    return (
        <div className={`z-20 fixed inset-0 ${visible ? '' : 'hidden'} bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center`}>
            <div ref={followerRef} className="max-w-full shadow-purple shadow-2xl h-auto bg-white h-[500px] w-[500px] p-2 rounded">
                <h1 className="text-center text-2xl font-bold p-16">Takipçiler</h1>
                {followers.map((follower) =>
                    <ul>
                        <div className="max-w-full h-auto h-16 divide-y-reverse divide-y-4 ">
                            <img className="max-w-full h-auto inline-block align-text-top" src={follower.photo.url} height={50} width={50} />
                            <a href={`/feylesof/${follower.slug}`} className="mb-4">{follower.name}</a>
                        </div>

                    </ul>)
                }
            </div>
        </div>
    );
}


export default FollowerModal
