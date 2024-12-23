import React from "react";
import { baseColorManager } from "../baseColorManager.ts";
import TitleComponent from "../components/TitleComponent";
import SubTextComponent from "../components/SubTextComponent";

export default function SectionContact() {
    const textBaseColor = "b-w";
    const subTextData = [
        {
            character: "説明会の予約 や その他",
            break: true,
        },
        {
            character: "お問合せを",
            break: true,
        },
        {
            character: "承っておりますので",
            break: true,
        },
        {
            character: "お気軽にご連絡下さい。",
            break: false,
        },
    ];
    return (
        <section
            id="CONTACT"
            className="
                relative
                flex
                flex-col
                justify-center
                md:sm:pb-[0]
                py-[25vw]
                md:sm:py-0
                md:sm:w-[50%]
                w-full
                md:sm:h-[min(50vw,650px)]
                before:w-[100vw]
                before:h-full
                before:bg-bgColor1
                before:absolute
                before:z-[0]
                before:top-0
                before:right-0
            "
        >
            <h2 className="relative z-[1]">
                <TitleComponent
                    EnglishText={"CONTRACT"}
                    JapaneseText={"連絡"}
                    color={textBaseColor}
                    marginBottom={"md:lg:mb-[50px] mb-[3vw]"}
                />
            </h2>
            <div className="w-fit mx-auto mb-[30px] md:sm:text-left text-center">
                <SubTextComponent
                    text={subTextData}
                    baseColor={baseColorManager(textBaseColor)}
                />
            </div>
            <p
                className={`
                    relative
                    z-[1]
                    block
                    text-center
                    leading-[1em]
                    text-[12vw]
                    md:sm:text-[68px]
                    ${baseColorManager(textBaseColor)}
                `}
            >
                011−232−5508
            </p>
        </section>
    );
}
