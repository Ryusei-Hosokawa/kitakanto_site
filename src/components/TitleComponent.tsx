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
    marginBottom = "md:sm:mb-[180px]",
    textSize =  "md:sm:text-[135px] text-[22vw]",
}: TitleTextProps) {
    return (
        <h2 
            className={`
                block
                w-fit
                mx-auto
                ${textSize}
                ${marginBottom}
                mb-[100px]
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
