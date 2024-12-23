import React from "react";

export default function SectionHello() {
    const titleText: Array<{ text: string }> = [
        { text: "Hello," },
        { text: "World!" },
    ];
    
    return (
        <section className="md:sm:h-[430dvh] h-[100dvh] bg-baseColor overflow-x-clip">
            <div className="inner sticky top-0 left-0 grid place-items-center h-[100dvh]">
                <h2 className="en scroll-animation_scale font-[700] text-titleColor3 text-center">
                    {titleText.map((textItem, index: number) => {
                        return (
                            <span
                                key={textItem.text[index]}
                                className={`
                                    block
                                    ${
                                        textItem.text === "Hello,"
                                            ? "leading-[1em] md:sm:text-[350px] text-[40vw]"
                                            : "leading-[0.8em] md:sm:text-[300px] text-[35vw]"
                                    }`}
                            >
                                {textItem.text}
                            </span>
                        );
                    })}
                </h2>
            </div>
        </section>
    );
}
