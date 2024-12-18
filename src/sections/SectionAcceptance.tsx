import React from "react";
import CourseContents from "../components/CourseContents";
import TitleComponent from "../components/TitleComponent";
import MainTextComponent from "../components/MainTextComponent";

export default function SectionAcceptance() {
    const textBaseColor = "b-w";
    const mainTextData = [
        { character: "現在受け付けている", accent: false, break: false },
        { character: "コース", accent: true, break: false },
    ];

    return (
        <section className="pt-[100vh]">
            <div className="inner">
                <h2>
                    <TitleComponent
                        EnglishText={"ACCEPTANCE"}
                        JapaneseText={"受付情報"}
                        color={textBaseColor}
                    />
                </h2>
                <div className="grid place-items-center w-full md:sm:mb-[150px] mb-[50px] md:sm:text-left text-center">
                    <MainTextComponent
                        text={mainTextData}
                        baseColor={textBaseColor}
                    />
                </div>
                <div
                    className="
                    flex
                    justify-between
                    align-center
                    md:sm:flex-row
                    flex-col
                    md:sm:gap-y-[0]
                    gap-y-[20px]
                    w-full
                    max-w-[1000px]
                    mx-auto
                "
                >
                    <CourseContents />
                </div>
            </div>
        </section>
    );
}
