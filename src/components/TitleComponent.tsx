import React from "react";
import { baseColorManager } from "../baseColorManager";

type TitleTextProps = {
    EnglishText: string;
    JapaneseText: string;
    color?: string | undefined;
    marginBottom?: string | undefined;
};

export default function TitleComponent({
    EnglishText,
    JapaneseText,
    color = "b-w",
    marginBottom = "mb-[180px]",
}: TitleTextProps) {
    return (
        <h2 className={`block w-fit mx-auto ${marginBottom}`}>
            <strong className={`block en text-[135px] leading-[1em] ${baseColorManager(color)}`}>{EnglishText}</strong>
            <span className={`block text-[27px] opacity-[0.8] leading-[1em] text-center ${baseColorManager(color)}`}>{JapaneseText}</span>
        </h2>
    );
}
