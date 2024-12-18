import React from "react";
import ImageComponent from "../components/ImageComponent";
import TitleComponent from "../components/TitleComponent";
import MainTextComponent from "../components/MainTextComponent";
import SubTextComponent from "../components/SubTextComponent";
import ReadMoreButtonComponent from "../components/ReadMoreButtonComponent";
import { useScrollTrigger } from "../hooks/useScrollTrigger";

export default function SectionCourse() {
    const mainTextData = [
        { character: "”なりたい”に応じて", accent: false, break: true },
        { character: "選べる3つ", accent: true, break: false },
        { character: "のコース", accent: false, break: false },
    ];
    const subTextData = [
        { character: "あなたやりたい仕事 にあったスキルを", break: true },
        { character: "身に付けられるコースを 選べます。", break: true },
        { character: "あなたの興味が 向く職業は 何ですか？", break: false },
    ];
    const { ref: ref1, inView: inView1 } = useScrollTrigger({
        threshold: 0.45,

    });
    const { ref: ref2, inView: inView2 } = useScrollTrigger({
        threshold: 0.4,

    });
    const textBaseColor = inView2 ? "text-[#eaeef1]" : "text-[#272829]";

    return (
        <section
            className={`
                md:sm:pt-[100vh]
                pt-[30vh]
                ${inView1 ? "bg-mainColor" : "bg-baseColor"}
                `}
        >
            <div
                className="
                    inner
                    md:sm:pb-[300px]
                    pb-[150px]
                    relative 
                "
            >
                <h2 ref={(node) => {
                    ref1(node);
                    ref2(node);
                }}>
                    <TitleComponent
                        EnglishText="COURSE"
                        JapaneseText="コースの種類"
                        color={textBaseColor}
                    />
                </h2>
                <div
                    className="
                        flex
                        md:sm:flex-row-reverse
                        flex-col-reverse
                        gap-x-[70px]
                        w-full
                    "
                >
                    <div
                        className="
                            w-full 
                            max-w-[718px]
                            ml-[-20px]
                            md:sm:pt-[200px]
                            pt-[70px]
                        "
                    >
                        <ImageComponent
                            imageName={"lesson_time"}
                            classText={"overflow-hidden rounded-[30px]"}
                        />
                    </div>
                    <div className="">
                        <div
                            className="mb-[50px]
                                md:sm:text-left
                                text-center
                            "
                        >
                            <MainTextComponent
                                text={mainTextData}
                                baseColor={textBaseColor}
                            />
                        </div>
                        <div
                            className="
                                mb-[30px]
                                md:sm:text-left
                                text-center
                            "
                        >
                            <SubTextComponent
                                text={subTextData}
                                baseColor={textBaseColor}
                            />
                        </div>
                        <div
                            className="
                                flex
                                justify-end
                                align-center
                                w-full
                            "
                        >
                            <ReadMoreButtonComponent url={"http://www.kitakanto-gakuin.net/"} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
