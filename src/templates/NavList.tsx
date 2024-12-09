import React from "react";
import Header from "./Header";

export default function NavList({
    listsData,
}: {
    listsData: { id: string; title: string }[];
}) {
    const listItem = listsData.map((listData, index: number) => {
        return (
            <li key={index} className="font-[alternate-gothic-condensed-a] text-[85px]">
                <a
                    href={`#${listData.id}`}
                    className={`
                        block
                        leading-[1em]
                        w-[fit-content]
                        font-[700]
                        text-mainColor
                        hover:opacity-[0.25]
                        transition-all
                        duration-[0.25s]
                        ease-in-out 
                        [text-shadow:1px_1px_0_#FFF,-1px_-1px_0_#FFF,-1px_1px_0_#FFF,1px_-1px_0_#FFF,0px_1px_0_#FFF,_0_-1px_0_#FFF,-1px_0_0_#FFF,1px_0_0_#FFF]
                    `}
                >
                    {listData.title}
                </a>
                <div className="hidden ">
                    <div className="flex opacity-0 pointer-events-none font-[#fff] mix-blend-overlay" aria-hidden="true">
                        {Array.from({ length: 4 }, (_, index) => (
                            <span key={index} className="font-[700] text-[150px]">{listData.title}</span>
                        ))}
                    </div>
                </div>
            </li>
        );
    });

    return <ul>{listItem}</ul>;
}
