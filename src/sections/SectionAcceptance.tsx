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
        <section className="pt-[150vh]">
            <TitleComponent
                EnglishText={"ACCEPTANCE"}
                JapaneseText={"受付情報"}
                color={textBaseColor}
            />
            <div className="grid place-items-center w-full mb-[150px] ">
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
                    w-full
                    max-w-[1000px]
                    mx-auto
                "
            >
                <CourseContents />
            </div>
        </section>
    );
}
