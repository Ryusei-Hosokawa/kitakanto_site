import React from "react";
import Header from "./Header";

export default function NavList({
    listsData,
    onListClick,
}: {
    listsData: { id: string; title: string }[];
    onListClick: () => void;
}) {
    const listItem = listsData.map((listData, index: number) => {
        return (
            <li
                key={index}
                className="
                    grid
                    place-items-center
                    font-[alternate-gothic-condensed-a]
                    md:sm:text-[85px]
                    text-[max(13vw,70px)]
                "
            >
                <a
                    href={`#${listData.id}`}
                    className={`
                        group
                        block
                        leading-[1em]
                        w-fit
                        h-[1em]
                        font-[700]
                        text-mainColor
                        transition-all
                        duration-[0.25s]
                        ease-in-out 
                        overflow-y-clip
                    `}
                    onClick={onListClick}
                >
                    {Array.from({ length: 2 }, (_, index) => (
                        <span
                            key={index}
                            className={`
                                block
                                group-hover:translate-y-[-100%]
                                ${
                                    index === 1
                                        ? "text-accentColor"
                                        : "[text-shadow:1px_1px_0_#FFF,-1px_-1px_0_#FFF,-1px_1px_0_#FFF,1px_-1px_0_#FFF,0px_1px_0_#FFF,_0_-1px_0_#FFF,-1px_0_0_#FFF,1px_0_0_#FFF]"
                                }
                            `}
                        >
                            {listData.title}
                        </span>
                    ))}
                </a>
            </li>
        );
    });

    return <ul>{listItem}</ul>;
}
