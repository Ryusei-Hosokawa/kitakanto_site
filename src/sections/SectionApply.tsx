import React from "react";
import ImageComponent from "../components/ImageComponent";
import TitleComponent from "../components/TitleComponent";
import MainTextComponent from "../components/MainTextComponent";
import SubTextComponent from "../components/SubTextComponent";

export default function SectionApply() {
    const textBaseColor = "b-w";
    const mainTextData1 = [
        { character: "訓練を受けたいと思ったら", accent: false, break: true },
        { character: "選考会", accent: true, break: false },
        { character: "に申し込みを", accent: false, break: false },
    ];
    const mainTextData2 = [
        { character: "共に", accent: true, break: false },
        { character: "学ぶ", accent: false, break: false },
        { character: "仲間", accent: true, break: false },
        { character: "もいます", accent: false, break: false },
    ];
    const subTextData = [
        [
            { character: "お住まいの地域担当の ハローワークで", break: true },
            { character: "職業訓練を 受けたい旨を伝える", break: false },
        ],
        [{ character: "受講申込書等の 書類をもらう", break: false }],
        [
            { character: "必要事項に記載し ハローワークに提出", break: true },
            { character: "受付印をもらい 当校に持参または郵便", break: false },
        ],
        [{ character: "選考会を受けます", break: false }],
        [
            { character: "後日合否発表の通知を", break: true },
            { character: "送らせていただきます", break: false },
        ],
    ];

    const subTextComponents = subTextData.map((data, index: number) => {
        return (
            <div className="mb-[10px]">
                <SubTextComponent
                    key={index}
                    text={data}
                    baseColor={textBaseColor}
                />
            </div>
        );
    });
    return (
        <div
            className="
            pt-[150vh]
        "
        >
            <div className="inner">
                <TitleComponent
                    EnglishText={"APPLY"}
                    JapaneseText={"申し込み手順"}
                    color={textBaseColor}
                />
                <div className="mb-[30px] ml-[-5px]">
                    <MainTextComponent
                        text={mainTextData1}
                        baseColor={textBaseColor}
                    />
                </div>
                <div
                    className="
                        mb-[180px]
                    "
                >
                    {subTextComponents}
                </div>
                <div
                    className="
                        w-full
                        max-w-[1000px]
                        ml-auto
                        mr-[-20px]
                        mb-[50px]
                    "
                >
                    <ImageComponent imageName={"study"} />
                </div>
                <MainTextComponent
                    text={mainTextData2}
                    baseColor={textBaseColor}
                />
            </div>
        </div>
    );
}
