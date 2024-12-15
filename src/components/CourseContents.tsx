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
                    overflow-hidden
                    group
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
                "
                >
                    <ImageComponent 
                        imageName={data.image} 
                        classText={"group-hover:scale-[110] transition-all duration-[250s] ease-in-out"}
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
                        text-[40px]
                    "
                >
                    {data.title}<br /><span>コース</span>
                </div>
            </button>
        );
    });
    return <>{courseItem}</>;
}
