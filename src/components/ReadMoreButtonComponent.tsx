import React from "react";

type ReadMoreButtonData = {
    url: string;
    characters?: Array<string>;
};

export default function ReadMoreButtonContent({
    url,
    characters = [ "ReadMore", "詳しく見る" ],
}: ReadMoreButtonData) {
    const textBaseColor = "text-textColor3";
    const textData = characters;

    const textElements = textData.map((text, index: number) => {
        return (
            <span
                key={index}
                className={`
                    block
                    text-center
                    font-[500]
                    group-hover:text-accentColor
                    transition-all
                    duration-[250s]
                    ease-in-out
                    leading-[1.2em]
                    ${textBaseColor}
                    ${
                        index % 2 === 0
                            ? "text-[24px] border-b-[1px] border-textColor3 group-hover:border-accentColor"
                            : "text-[20px]"
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
            max-w-[180px]
            relative
            z-[999]
            transition-all
            duration-[250s]
            before:absolute
            before:top-[50%]
            before:left-0
            before:translate-y-[-50%]
            before:w-full
            before:h-2px
            before:bg-textColor3
            group-hover:before:bg-accentColor
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
