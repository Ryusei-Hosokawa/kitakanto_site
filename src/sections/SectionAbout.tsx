import React from "react";
import { baseColorManager } from "../baseColorManager.ts";
import TitleComponent from "../components/TitleComponent";
import MainTextComponent from "../components/MainTextComponent";
import SubTextComponent from "../components/SubTextComponent";

export default function SectionAbout() {
    const textBaseColor = "b-w";

    const mainTextData = [
        { character: "北関東学院", accent: true, break: false },
        { character: "は", accent: false, break: true },
        { character: "パソコン関連の仕事を目指す", accent: false, break: true },
        { character: "職業訓練校です", accent: false, break: false },
    ];
    const subTextData = [];

    return (
        <section className="py-[500px]">
            <div className="inner">
                <TitleComponent
                    EnglishText={"ABOUT"}
                    JapaneseText={"北関東学院は"}
                    color={textBaseColor}
                />
                <MainTextComponent 
                    text={mainTextData} 
                    baseColor={baseColorManager(textBaseColor)} 
                />
            </div>
        </section>
    );
}
