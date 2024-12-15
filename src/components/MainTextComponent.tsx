import React from "react";
import { baseColorManager } from "../baseColorManager";

type MainTextProps = {
    text: Array<{
        character: string;
        accent?: boolean;
        break: boolean;
    }>;
    baseColor: string | undefined;
};
export default function MainTextComponent({ text, baseColor }: MainTextProps) {
    const itemElement = text.map((textItem, index: number) => (
        <>
            <span
                key={index}
                className={`inline-block ${
                    textItem.accent && "text-accentColor"
                }`}
            >
                {textItem.character}
            </span>{textItem.break && <br />}
        </>
    ));
    return <p className={`text-[70px] leading-[1em] tracking-[-0.07em] ${baseColorManager(baseColor)}`}>{itemElement}</p>;
}
