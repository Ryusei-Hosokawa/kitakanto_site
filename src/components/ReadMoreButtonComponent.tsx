import React from "react";
import { useScrollTrigger } from "../hooks/useScrollTrigger";

type ReadMoreButtonData = {
    url: string;
    characters?: Array<string>;
};

export default function ReadMoreButtonContent({
    url,
    characters = ["ReadMore", "詳しく見る"],
}: ReadMoreButtonData) {
    const { ref, inView } = useScrollTrigger({ threshold: 0.2 });

    const textBaseColor = "text-textColor3";
    const textData = characters;

    const textElements = textData.map((text, index: number) => {
        return (
            <span
                key={index}
                ref={ref}
                className={`
                    block
                    text-center
                    font-[500]
                    md:sm:group-hover:text-accentColor
                    transition-all
                    delay-[150ms]
                    duration-[400ms]
                    ease-in-out
                    leading-[1.2em]
                    ${textBaseColor}
                    ${
                        inView
                            ? "opacity-1 translate-y-[0]"
                            : "opacity-0 translate-y-[20px]"
                    }
                    ${
                        index % 2 === 0
                            ? "md:sm:text-[24px] text-[5.6vw] border-b-[1px] border-textColor3 group-hover:md:sm:border-accentColor"
                            : "md:sm:text-[20px] text-[4.5vw]"
                    }
                `}
            >
                {text}
            </span>
        );
    });

    return (
        <button
            className="
            group
            block
            w-full
            md:sm:max-w-[180px]
            max-w-[32vw]
            relative
            z-[99]
            before:absolute
            before:top-[50%]
            before:left-0
            before:translate-y-[-50%]
            before:w-full
            before:h-2px
            before:bg-textColor3
            group-hover:before:md:sm:bg-accentColor
        "
        >
            <a
                href={url}
                className={`
                inset-0
            `}
            >
                {textElements}
            </a>
        </button>
    );
}
