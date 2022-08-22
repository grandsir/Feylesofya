import {useEffect, useState} from "react";

export function useReadingProgress() {
    const [completion, setCompletion] = useState(0);
    useEffect(() => {
        function updateScrollCompletion() {
            // see how much we have scrolled
            const currentProgress = window.scrollY;
            // see how much total scroll is available
            let scrollHeight = document.body.scrollHeight - window.innerHeight;
            if (scrollHeight) {
                setCompletion(
                    Number((currentProgress / scrollHeight).toFixed(2)) * 100
                );
            }
        }
        // add scroll event listener
        window.addEventListener("scroll", updateScrollCompletion);

        // remove scroll event listener on umount
        return () => {
            window.removeEventListener("scroll", updateScrollCompletion);
        };
    }, []);
    return completion;
}
