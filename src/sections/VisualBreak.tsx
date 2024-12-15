import React from "react";
import MainTextComponent from "../components/MainTextComponent";
import ImageComponent from "../components/ImageComponent";

export default function VisualBreak() {
    const mainTextData1 = [
        { character: "今後に繋がる", accent: true, break: false },
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
    return (
        <section
            className="
            pt-[150vh]
        "
        >
            <div className="">
                <div className="inner">
                    <div
                        className="
                            transition-all
                            duration-[250s]
                            ease-in-out
                            flex
                            justify-end
                    "
                    >
                        <div 
                            className="
                                w-full
                                max-w-[513px]
                                mb-[50px]
                                transition-all
                                duration-[250s]
                                ease-in-out
                            ">
                            <ImageComponent imageName={"corridor"} />
                        </div>
                    </div>
                    <div className="">
                        <MainTextComponent
                            text={mainTextData1}
                            baseColor={"b-w"}
                        />
                    </div>
                </div>
            </div>
            <div className="bg-mainColor">
                <div className="inner">
                    <div
                        className="
                            flex
                            justify-end
                            transition-all
                            duration-[250s]
                            ease-in-out
                        "
                    >
                        <MainTextComponent
                            text={mainTextData2}
                            baseColor={"w-b"}
                        />
                    </div>
                    <div className="">
                        <div 
                            className="
                                transition-all
                                duration-[250s]
                                ease-in-out
                                w-full
                                max-w-[513px]
                            ">
                            <ImageComponent imageName={"book"} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
