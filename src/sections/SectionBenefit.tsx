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
                flex
                flex-col
                align-center
                pt-[100px]
                w-[50%]
                h-[min(50vw,650px)]
                bg-bgColor2
            "
        >
            <TitleComponent
                EnglishText={"BENEFIT"}
                JapaneseText={"給付金"}
                color={textBaseColor}
                marginBottom={"mb-[50px]"}
            />
            <div className="w-fit mx-auto mb-[30px]">
                <SubTextComponent
                    text={subTextData}
                    baseColor={baseColorManager(textBaseColor)}
                />
            </div>
        </section>
    );
}

