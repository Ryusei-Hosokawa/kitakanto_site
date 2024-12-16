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
                    w-[min(28vw,300px)]
                    h-[min(28vw,300px)]
                    group
                    overflow-hidden
                    rounded-[30px]
                    "
            >
                <div
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
                        brightness-50
                        group-hover:scale-[1.2]
                        duration-[250ms]
                "
                >
                    <ImageComponent 
                        imageName={data.image} 
                    />
                </div>
                <div 
                    className="
                        absolute
                        top-[50%]
                        left-[50%]
                        z-[100]
                        translate-x-[-50%]
                        translate-y-[-50%]
                        w-full
                        text-[#e5e7eb]
                        group-hover:text-accentColor
                        text-[40px]
                    "
                >
                    {data.title}<br />コース
                </div>
            </button>
        );
    });
    return <>{courseItem}</>;
}
