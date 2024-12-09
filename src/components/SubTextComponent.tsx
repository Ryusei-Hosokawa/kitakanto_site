import React from "react";

type SubTextProps = {
    text: Array<{
        character: string;
        break: boolean;
    }>,
    baseColor: () => void;
};
export default function SubTextComponent({ text, baseColor }: SubTextProps) {
    const itemElement = text.map((textItem, index: number) => (
        <span
            key={index}
            className="inline-block"
        >
            {textItem.character}{textItem.break ? <br /> : null}
        </span>
    ));
    return <p className={`text-[16px] ${baseColor}`}>{itemElement}</p>;
}