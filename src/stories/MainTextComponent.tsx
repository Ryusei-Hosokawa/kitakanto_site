import React from "react";
import { baseColorManager } from "../baseColorManager";
import { useScrollTrigger } from "../hooks/useScrollTrigger";

type MainTextProps = {
    text: Array<{
        character: string;
        accent?: boolean;
        break: boolean;
    }>;
    baseColor: string | undefined;
    textSize?: string;
};

export default function MainTextComponent({ 
    text = [
        {character: "メインテキスト", accent: true, break: true},
        {character: "メインテキスト", accent: false, break: false},
    ],
    baseColor = "w-b",
    textSize = "md:sm:text-[70px] text-[13vw]" }: MainTextProps) {
    const { ref, inView } = useScrollTrigger({ threshold: 0.2 });
    const itemElement = text.map((textItem, index: number) => (
        <>
            <span
                key={index}
                ref={ref}
                className={`
                    inline-block 
                    delay-[150ms]
                    duration-[400ms]
                    ${ textItem.accent && "text-accentColor" }
                    ${
                        inView
                            ? "opacity-100 translate-x-[0]"
                            : "opacity-0 translate-x-[-20px]"
                    }
                `}
            >
                {textItem.character}
            </span>
            {textItem.break && <br />}
        </>
    ));

    return (
        <p
            className={`${textSize} leading-[1em] tracking-[-0.07em] ${baseColorManager(
                baseColor
            )}`}
        >
            {itemElement}
        </p>
    );
}
