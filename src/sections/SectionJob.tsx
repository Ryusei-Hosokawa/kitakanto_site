import React from "react";
import ImageComponent from "../components/ImageComponent";
import TitleComponent from "../components/TitleComponent";
import MainTextComponent from "../components/MainTextComponent";
import SubTextComponent from "../components/SubTextComponent";
import ReadMoreButtonContent from "../components/ReadMoreButtonComponent";
import { useScrollTrigger } from "../hooks/useScrollTrigger";

export default function SectionJob() {
    const mainTextData = [
        { character: "システムエンジニア", accent: false, break: false },
        { character: "WEBデザイナー", accent: false, break: true },
        { character: "一般事務", accent: false, break: true },
        { character: "他にも", accent: false, break: false },
        { character: "いろいろ", accent: true, break: false },
    ];
    const subTextData = [
        { character: "この職業訓練校で 得られるスキルで", break: true },
        { character: "パソコンを使用するような", break: true },
        { character: "業務に就くことが 出来るようになれます", break: true },
        { character: "あなたも目指しませんか？", break: false },
    ];
    const { ref: ref1, inView: inView1 } = useScrollTrigger({
        threshold: 0.2,
        triggerOnce: false,
    });
    const { ref: ref2, inView: inView2 } = useScrollTrigger({
        threshold: 0.2,
        triggerOnce: false,
    });
    const textBaseColor = inView2 ? "b-w" : "w-b";

    return (
        <section
            className={`
                pt-[100vh]
                pb-[150px]
                scroll-animation_change-color
                ${inView1 ? " " : "bg-mainColor"}
            `}
        >
            <TitleComponent
                EnglishText="JOB"
                JapaneseText="目指せる職業"
                color={textBaseColor}
            />
            <div className="flex gap-x-[130px] w-full max-w-[1114px] mx-auto">
                <div>
                    <div
                        ref={(node) => {
                            ref1(node);
                            ref2(node);
                        }}
                        className="mb-[80px]"
                    >
                        <div className={`mb-[30px]`}>
                            <MainTextComponent
                                text={mainTextData}
                                baseColor={textBaseColor}
                            />
                        </div>
                    </div>
                    <div
                        className={`
                            mb-[30px]
                        `}
                    >
                        <SubTextComponent
                            text={subTextData}
                            baseColor={textBaseColor}
                        />
                    </div>
                    <div
                        className="
                            w-full
                            flex
                            justify-end
                            align-center
                        "
                    >
                        <ReadMoreButtonContent url={"http://www.kitakanto-gakuin.net/"} />
                    </div>
                </div>
                <div
                    className="
                    w-full 
                    max-w-[523px]
                "
                >
                    <ImageComponent
                        imageName={"w_pc"}
                        classText={"overflow-hidden rounded-[30px]"}
                    />
                </div>
            </div>
        </section>
    );
}
