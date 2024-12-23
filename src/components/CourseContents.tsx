import React from "react";
import ImageComponent from "../components/ImageComponent";

export default function CourseContents() {
    const ContentsData = [
        {
            title: "Webデザイン",
            ulr: "http://www.kitakanto-gakuin.net/flyer/web_2023_04.pdf",
            image: "photo_design",
        },
        {
            title: "パソコン基礎",
            ulr: "http://www.kitakanto-gakuin.net",
            image: "photo_base",
        },
        {
            title: "ITプログラミング",
            ulr: "http://www.kitakanto-gakuin.net",
            image: "photo_programming",
        },
    ];
    const courseItem = ContentsData.map((data, index: number) => {
        return (
            <button
                key={index}
                className="
                    relative
                    md:sm:w-[min(29vw,310px)]
                    md:sm:h-[min(29vw,310px)]
                    w-full
                    h-[min(40vw,335px)]
                    group
                    overflow-hidden
                    rounded-[30px]
                "
            >
                <a
                    href={data.ulr}
                    className="
                        absolute
                        top-[50%]
                        left-[50%]
                        z-[10]
                        origin-center
                        translate-x-[-50%]
                        translate-y-[-50%]
                        w-full
                        h-full
                        brightness-[0.7]
                        group-hover:scale-[1.2]
                        duration-[250ms]
                    "
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <ImageComponent 
                        imageName={data.image} 
                    />
                </a>
                <p
                    className="
                        absolute
                        top-[50%]
                        left-[50%]
                        z-[10]
                        translate-x-[-50%]
                        translate-y-[-50%]
                        w-full
                        text-[#e5e7eb]
                        group-hover:text-accentColor
                        md:lg:text-[40px]
                        md:sm:text-[4vw]
                        text-[8vw]
                        pointer-events-none
                    "
                >
                    {data.title}<br />コース
                </p>
            </button>
        );
    });
    return <>{courseItem}</>;
}
