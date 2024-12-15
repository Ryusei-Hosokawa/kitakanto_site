import React from "react";
import ImageComponent from "../components/ImageComponent";
import TitleComponent from "../components/TitleComponent";
import MainTextComponent from "../components/MainTextComponent";
import SubTextComponent from "../components/SubTextComponent";
import ReadMoreButtonComponent from "../components/ReadMoreButtonComponent";

export default function SectionCourse() {
    const textBaseColor = "text-[#eaeef1]";
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

    return (
        <section
            className="
                pt-[150vh]
                bg-mainColor
                "
        >
            <div
                className="
                    inner
                    pb-[300px]
                    relative 
                    before:absolute
                    before:bottom-0
                    before:left-[50%]
                    before:translate-x-[-50%]
                    before:w-full
                    before:h-[2px]
                    before:bg-[#d4dde9]
                "
            >
                <TitleComponent
                    EnglishText="COURSE"
                    JapaneseText="コースの種類"
                    color={textBaseColor}
                />
                <div
                    className="
                        flex
                        gap-x-[70px]
                        w-full
                    "
                >
                    <div
                        className="
                            w-full 
                            max-w-[718px]
                            ml-[-20px]
                            pt-[200px]
                        "
                    >
                        <ImageComponent imageName={"lesson_time"} />
                    </div>
                    <div className="">
                        <div className="mb-[50px]">
                            <MainTextComponent
                                text={mainTextData}
                                baseColor={textBaseColor}
                            />
                        </div>
                        <div 
                            className="
                                mb-[30px]
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
                            <ReadMoreButtonComponent url={"#"}/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
