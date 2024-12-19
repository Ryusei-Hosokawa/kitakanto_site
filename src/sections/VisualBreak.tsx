import React from "react";
import MainTextComponent from "../components/MainTextComponent";
import ImageComponent from "../components/ImageComponent";
import { useScrollTrigger } from "../hooks/useScrollTrigger";

export default function VisualBreak() {
    const mainTextData1 = [
        { character: "今後に繋がる", accent: false, break: false },
        { character: "自信", accent: true, break: false },
        { character: "と", accent: false, break: false },
        { character: "スキル", accent: true, break: false },
        { character: "を", accent: false, break: false },
    ];
    const mainTextData2 = [
        { character: "楽しく", accent: true, break: false },
        { character: "学習", accent: false, break: false },
        { character: "しっかり", accent: true, break: false },
        { character: "学習", accent: false, break: false },
    ];

    const { ref, inView } = useScrollTrigger({
        threshold: 0.4,
    });

    const imgHeight = "md:sm:h-[732.85px]";
    return (
        <section
            className={`
                md:sm:pt-[100vh]
                pt-[30vh]
                ${inView ? "bg-baseColor" : "bg-mainColor"}
            `}
        >
            <div>
                <div
                    className="
                        relative
                        inner
                        pb-[80px]
                        flex
                        md:sm:flex-col
                        md:sm:gap-x-[0]
                        gap-x-[3%]
                        flex-row
                        md:sm:justify-start
                        justify-between
                        md:sm:items-start
                        items-end
                    "
                >
                    <div
                        className={`
                            relative
                            w-full
                            ${imgHeight}
                        `}
                    >
                        <div
                            className={`
                                md:sm:absolute
                                top-0
                                w-full
                                max-w-[513px]
                                ${
                                    inView
                                        ? "md:sm:left-[100%] md:sm:translate-x-[-100%]"
                                        : "md:sm:left-0"
                                }
                            `}
                        >
                            <ImageComponent
                                imageName={"corridor"}
                                classText={"overflow-hidden rounded-[30px]"}
                            />
                        </div>
                    </div>
                    <p
                        className={`
                            block
                            md:sm:absolute
                            bottom-0
                            md:sm:whitespace-nowrap
                            md:sm:[writing-mode:horizontal-tb]
                            [writing-mode:vertical-lr]
                            ${
                                inView
                                    ? "md:sm:right-[100%] md:sm:translate-x-[calc(100%+20px)]"
                                    : "md:sm:right-0px"
                            }
                        `}
                    >
                        <MainTextComponent
                            text={mainTextData1}
                            baseColor={inView ? "b-w" : "w-b"}
                        />
                    </p>
                </div>
            </div>
            <div
                ref={ref}
                className={`
                    pb-[150px]
                    ${inView ? "bg-mainColor" : "bg-baseColor"}
                `}
            >
                <div
                    className="
                        relative
                        inner
                        pt-[80px]
                        flex
                        md:sm:flex-col
                        flex-row
                        md:sm:gap-x-[0]
                        gap-x-[3%]
                        md:sm:justify-start
                        justify-between
                        md:sm:items-start
                        items-start
                    "
                >
                    <div
                        className={`
                            
                        `}
                    >
                        <p
                            className={`
                                block
                                md:sm:absolute
                                top-[5px]
                                md:sm:whitespace-nowrap
                                md:sm:[writing-mode:horizontal-tb]
                                [writing-mode:vertical-lr]
                                ${
                                    inView
                                        ? "md:sm:left-[100%] md:sm:translate-x-[calc(-100%-20px)]"
                                        : "md:sm:left-0px"
                                }
                            `}
                        >
                            <MainTextComponent
                                text={mainTextData2}
                                baseColor={inView ? "w-b" : "b-w"}
                            />
                        </p>
                    </div>
                    <div
                        className={`
                            relative
                            top-0
                            w-full
                            ${imgHeight}
                        `}
                    >
                        <div
                            className={`
                                md:sm:absolute
                                top-0
                                w-full
                                max-w-[513px]
                                ${
                                    inView
                                        ? "md:sm:right-[100%] md:sm:translate-x-[100%]"
                                        : "md:sm:right-0"
                                }
                            `}
                        >
                            <ImageComponent
                                imageName={"book"}
                                classText={"overflow-hidden rounded-[30px]"}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
