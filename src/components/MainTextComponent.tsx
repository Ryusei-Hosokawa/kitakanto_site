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
};

export default function MainTextComponent({ text, baseColor }: MainTextProps) {
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
                    ${textItem.accent && "text-accentColor"}
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
            className={`text-[70px] leading-[1em] tracking-[-0.07em] ${baseColorManager(
                baseColor
            )}`}
        >
            {itemElement}
        </p>
    );
}
