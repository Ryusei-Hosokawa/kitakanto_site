import React from "react";
import TitleComponent from "../components/TitleComponent";
import MainTextComponent from "../components/MainTextComponent";
import SubTextComponent from "../components/SubTextComponent";
import { baseColorManager } from "../baseColorManager";
import { useScrollTrigger } from "../hooks/useScrollTrigger";

export default function SectionAddress() {
    const textBaseColor = "w-b";
    const subTextData = [
        { character: "〒060-0001", break: true },
        { character: "北海道札幌市中央区 南9条西3丁目", break: true },
        { character: "2-10 札幌K.Sビル 6F", break: false },
    ];
    const mainTextData = [{ character: "営業月曜 月曜〜金曜", break: false }];
    const { ref, inView } = useScrollTrigger({ threshold: 0.2 });

    return (
        <section
            className="
                relative
                z-[0]
                pt-[50vh]
                pb-[100px]
                mt-[-50px]
                overflow-y-clip
            "
        >
            <div
                className="
                    absolute
                    scroll-animation_bg
                    top-0
                    left-0
                    z-[1]
                    bg-mainColor
                    w-full
                    h-full
                "
            ></div>
            <div className="inner relative z-[10]">
                <TitleComponent
                    EnglishText={"ADDRESS"}
                    JapaneseText={"住所"}
                    color={textBaseColor}
                />
                <div
                    ref={ref}
                    className={`
                        flex
                        justify-center
                        items-center
                        md:sm:flex-row
                        flex-col-reverse
                        gap-x-[100px]
                        md:sm:gap-y-[0]
                        gap-y-[30px]
                        delay-[150ms]
                        duration-[400ms]
                        ${
                            inView
                                ? "opacity-1 scale-[1]"
                                : "opacity-0 scale-[0.6]"
                        }
                    `}
                >
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2915.63696260811!2d141.35333286547825!3d43.049069329146604!2m3!
                                    1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5f0b2a27ee23ea55%3A0xdedc877edeaf642!2z5YyX6Zai5p2x5a2m6Zmi!5e0!3m2!1sja!2sjp!4v1665207063239!5m2!1sja!2sjp"
                        style={{ border: 0 }}
                        loading="lazy"
                        className="
                                overflow-hidden
                                rounded-[20px]
                                w-full
                                max-w-[500px]
                                md:sm:h-[max(500px,45vw)]
                                h-[25vh]
                            "
                    ></iframe>
                    <div className="">
                        <h3
                            className="
                            block
                            mb-[30px]
                        "
                        >
                            <SubTextComponent
                                text={subTextData}
                                baseColor={textBaseColor}
                            />
                        </h3>
                        <h2
                            className="
                            block
                            ml-[-10px]
                            mb-[20px]
                        "
                        >
                            <MainTextComponent
                                text={mainTextData}
                                baseColor={textBaseColor}
                            />
                        </h2>
                        <p
                            className={`text-[60px] leading-[1em] ${baseColorManager(
                                textBaseColor
                            )}`}
                        >
                            9:00〜18:00
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}