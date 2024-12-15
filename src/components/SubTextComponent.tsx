import React from "react";
import { baseColorManager } from "../baseColorManager";

type SubTextProps = {
    text: Array<{
        character: string;
        break: boolean;
    }>;
    baseColor: string | undefined;
};
export default function SubTextComponent({ text, baseColor }: SubTextProps) {
    const itemElement = text.map((textItem, index: number) => (
        <>
            <span key={index} className="inline-block">
                {textItem.character}
            </span>
            {textItem.break && <br />}
        </>
    ));
    return <p className={`text-[30px] ${baseColorManager(baseColor)}`}>{itemElement}</p>;
}
