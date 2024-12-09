import React from "react";

type TitleTextProps = {
    EnglishText: string;
    JapaneseText: string;
    color?: string;
};

export default function TitleComponent({
    EnglishText,
    JapaneseText,
    color,
}: TitleTextProps) {
    
    const textColor = () => {
        if (color === "b-w") {
            return "text-titleColor3";
        } else if (color === "w-b") {
            return "text-titleColor4";
        } else {
            return "";
        }
    };

    return (
        <h2 className="block w-fit mx-auto mb-[200px]">
            <strong className={`block en text-[135px] leading-[1em] ${textColor()}`}>{EnglishText}</strong>
            <span className={`block text-[27px] opacity-[0.8] leading-[1em] text-center ${textColor()}`}>{JapaneseText}</span>
        </h2>
    );
}
