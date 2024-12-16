import React from "react";
import ImageComponent from "../components/ImageComponent.tsx";
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
    const subTextData = [
        {
            character: "パソコンの初基礎から 専門的なプログラミングまで 様々な",
            accent: true,
            break: true,
        },
        {
            character: "コースがあります",
            accent: false,
            break: true,
        },
        {
            character: "就職に関してお悩みの方 興味があった職種に 就きたい方",
            accent: false,
            break: true,
        },
        {
            character: "などを 全力でサポート します",
            accent: false,
            break: false,
        },
    ];
    
    return (
        <section className="pt-[500px] overflow-clip">
            <div className="inner">
                <TitleComponent
                    EnglishText={"ABOUT"}
                    JapaneseText={"北関東学院は"}
                    color={textBaseColor}
                />
                <div className={`mb-[30px]`}>
                    <MainTextComponent
                        text={mainTextData}
                        baseColor={textBaseColor}
                    />
                </div>
                <div
                    className="
                        relative
                        z-[100]
                        w-full
                        max-w-[920px]
                        ml-[-20px]
                        mb-[60px]
                        before:absolute
                        before:top-[130px]
                        before:left-0
                        before:z-[-1]
                        before:w-[150vw]
                        before:h-[100vh]
                        before:bg-mainColor
                        before:translate-x-[-30%]
                    "
                >
                    <ImageComponent
                        imageName={"lesson_desk"}
                        classText={"overflow-hidden rounded-[20px]"}
                    />
                </div>
                <div
                    className={`
                        relative 
                        z-[100] 
                        grid 
                        place-items-end 
                        pr-[30px]
                    `}
                >
                    <SubTextComponent
                        text={subTextData}
                        baseColor={baseColorManager("text-[#e2eeff]")}
                    />
                </div>
            </div>
        </section>
    );
}
