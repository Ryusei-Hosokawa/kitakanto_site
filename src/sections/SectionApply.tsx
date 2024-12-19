import React from "react";
import ImageComponent from "../components/ImageComponent";
import TitleComponent from "../components/TitleComponent";
import MainTextComponent from "../components/MainTextComponent";
import SubTextComponent from "../components/SubTextComponent";
import { useScrollTrigger } from "../hooks/useScrollTrigger";

export default function SectionApply() {
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

    const { ref: ref1, inView: inView1 } = useScrollTrigger({
        threshold: 0.45,
    });
    const { ref: ref2, inView: inView2 } = useScrollTrigger({
        threshold: 0.4,
    });
    const textBaseColor = inView2 ? "b-w" : "w-b";

    const subTextComponents = subTextData.map((data, index: number) => {
        return (
            <div className="md:sm:mb-[10px] mb-[2vw] md:sm:text-left text-center md:sm:leading-[1.8em] leading-[2.8em]">
                <SubTextComponent
                    key={index}
                    text={data}
                    baseColor={textBaseColor}
                />
            </div>
        );
    });
    return (
        <section
            id="APPLY"
            className={`
                md:sm:pt-[100vh]
                pt-[30vw]
                md:sm:pb-0
                pb-[30vw]
                ${inView1 ? "bg-baseColor" : "bg-mainColor"}
            `}
        >
            <div className="inner">
                <h2 
                    ref = {(node) => {
                        ref1(node);
                        ref2(node);
                    }}
                >
                    <TitleComponent
                        EnglishText={"APPLY"}
                        JapaneseText={"申し込み手順"}
                        color={textBaseColor}
                    />
                </h2>
                <p className="block mb-[30px] md:sm:ml-[-5px] md:sm:text-left text-center md:sm:w-full w-[90%] mx-auto">
                    <MainTextComponent
                        text={mainTextData1}
                        baseColor={textBaseColor}
                    />
                </p>
                <div
                    className="
                        md:sm:mb-[180px]
                        mb-[100px]
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
                        md:sm:mb-[50px]
                        mb-[30px]
                    "
                >
                    <ImageComponent
                        imageName={"study"}
                        classText={
                            "overflow-hidden rounded-[30px_0px_0px_30px]"
                        }
                    />
                </div>
                <MainTextComponent
                    text={mainTextData2}
                    baseColor={textBaseColor}
                />
            </div>
        </section>
    );
}
