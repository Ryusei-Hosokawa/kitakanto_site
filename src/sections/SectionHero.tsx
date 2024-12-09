import React from "react";

export default function SectionHero() {
    const titleText: Array<{ text: string; color?: string }> = [
        { text: "KITAKANTO" },
        { text: "SCHOOL" },
        { text: "SAPPORO", color: "orange" },
    ];
    const texts = titleText.map((textItem, index: number) => {
        return (
            <span
                key={textItem.text[index]}
                className={`${
                    textItem.color === "orange"
                        ? "text-titleColor2 text-[13vw] "
                        : "text-titleColor1"
                }
                block
                leading-[0.8em]
                tracking-[-0.01em]
                `}
            >
                {textItem.text}
            </span>
        );
    });

    return (
        <section
            className="
                grid
                place-items-center
                sticky
                top-0
                left-0
                z-[-100]
                w-[100wv]
                h-[100dvh]
                py-[100px]
                pl-[130px]
                pr-[50px]
                bg-mainColor
            "
        >
            <div className="w-full px-[20px] mx-auto grid place-items-center">
                <h1
                    className="
                        en
                        text-[19vw]

                        font-[700]
                    "
                >
                    {texts}
                </h1>
            </div>
        </section>
    );
}
