import React from "react";
import { baseColorManager } from "../baseColorManager";
import { useScrollTrigger } from "../hooks/useScrollTrigger";

type SubTextProps = {
    text: Array<{
        character: string;
        break: boolean;
    }>;
    baseColor: string | undefined;
};
export default function SubTextComponent({ text, baseColor }: SubTextProps) {
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
        <p className={`md:sm:text-[30px] text-[6vw] ${baseColorManager(baseColor)}`}>
            {itemElement}
        </p>
    );
}
