import React from "react";
import { baseColorManager } from "../baseColorManager.ts";
import TitleComponent from "../components/TitleComponent";
import SubTextComponent from "../components/SubTextComponent";

export default function SectionContact() {
    const textBaseColor = "b-w";
    const subTextData = [
        {
            character: "月10万円給付",
            break: true,
        },
        {
            character: "求職者支援制度に関して",
            break: true,
        },
        { 
            character: "の詳しい情報は",
            break: true },
        {
            character: "厚生労働省 公式サイトを",
            break: true,
        },
        {
            character: "ご覧ください。",
            break: false,
        },
    ];
    return (
        <section 
            className="
                relative
                flex
                flex-col
                align-center
                md:sm:pt-[100px]
                pt-[30vw]
                md:sm:pb-[0]
                pb-[25vw]
                md:sm:w-[50%]
                w-full
                md:sm:h-[min(50vw,650px)]
                before:w-[100vw]
                before:h-full
                before:bg-bgColor2
                before:absolute
                before:z-[0]
                before:top-0
                before:left-0
            "
        >
            <h2
                className="
                    relative
                    z-[1]
                "
            >
                <TitleComponent
                    EnglishText={"BENEFIT"}
                    JapaneseText={"給付金"}
                    color={textBaseColor}
                    marginBottom={"mb-[50px]"}
                />
            </h2>
            <div className="w-fit mx-auto mb-[30px]">
                <SubTextComponent
                    text={subTextData}
                    baseColor={baseColorManager(textBaseColor)}
                />
            </div>
        </section>
    );
}