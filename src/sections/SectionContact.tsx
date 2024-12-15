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
            break: true },
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
            className="
                pt-[100px]
                w-[50%]
                h-[min(50vw,650px)]
                bg-bgColor1
            "
        >
            <TitleComponent
                EnglishText={"CONTRACT"}
                JapaneseText={"連絡"}
                color={textBaseColor}
                marginBottom={"mb-[50px]"}
            />
            <div className="w-fit mx-auto mb-[30px]">
                <SubTextComponent
                    text={subTextData}
                    baseColor={baseColorManager(textBaseColor)}
                />
            </div>
            <p className={`block text-center leading-[1em] text-[68px] ${baseColorManager(textBaseColor)}`}>
                011−232−5508
            </p>
        </section>
    );
}

