import React from "react";
import { baseColorManager } from "../baseColorManager";

type TitleTextProps = {
    EnglishText: string;
    JapaneseText: string;
    color?: string | undefined;
    marginBottom?: string | undefined;
    textSize?: string;
};

export default function TitleComponent({
    EnglishText,
    JapaneseText,
    color = "b-w",
    marginBottom = "md:lg:mb-[180px] mb-[100px]",
    textSize =  "md:lg:text-[135px] md:sm:text-[12vw] text-[22vw]",
}: TitleTextProps) {
    return (
        <h2 
            className={`
                block
                w-fit
                mx-auto
                ${textSize}
                ${marginBottom}
            `}
        >
            <strong
                className={`
                    block
                    en
                    
                    leading-[1em]
                    ${baseColorManager(color)}
                `}
            >
                {EnglishText}
            </strong>
            <span
                className={`
                    block
                    md:sm:text-[27px]
                    text-[5vw]
                    opacity-[0.8]
                    leading-[1em]
                    text-center
                    ${baseColorManager(color)}
                `}
            >
                {JapaneseText}
            </span>
        </h2>
    );
}
