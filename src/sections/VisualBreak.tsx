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
                pt-[30vw]
                ${inView ? "bg-baseColor" : "bg-mainColor"}
            `}
        >
            <div>
                <div
                    className="
                        relative
                        inner
                        md:sm:pb-[80px]
                        gap-x-[3%]
                    "
                >
                    <div
                        className={`
                            relative
                            w-full
                            md:sm:block
                            grid
                            place-items-center
                            ${imgHeight}
                        `}
                    >
                        <div
                            className={`
                                md:sm:absolute
                                top-0
                                w-full
                                max-w-[513px]
                                md:sm:mb-0
                                mb-[10vw]
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
                            md:sm:w-initial
                            w-[75%]
                            md:sm:mx-initial
                            mx-auto
                            block
                            md:sm:absolute
                            bottom-0
                            md:sm:whitespace-nowrap
                            text-center
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
                    md:sm:pb-[150px]
                    pb-[30vw]
                    ${inView ? "bg-mainColor" : "bg-baseColor"}
                `}
            >
                <div
                    className="
                        relative
                        inner
                        md:sm:pt-[80px]
                        gap-x-[3%]
                    "
                >
                    <div
                        className={`
                            
                        `}
                    >
                        <p
                            className={`
                                md:sm:w-initial
                                w-[75%]
                                md:sm:mx-initial
                                mx-auto
                                block
                                md:sm:absolute
                                top-[5px]
                                md:sm:whitespace-nowrap
                                text-center
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
                            w-full
                            md:sm:block
                            grid
                            place-items-center
                            ${imgHeight}
                        `}
                    >
                        <div
                            className={`
                                md:sm:absolute
                                top-0
                                w-full
                                max-w-[513px]
                                md:sm:mt-0
                                mt-[10vw]
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
