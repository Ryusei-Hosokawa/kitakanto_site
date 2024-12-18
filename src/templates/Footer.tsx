import React from "react";
import FooterItemsComponent from "../components/FooterItemsComponent";
import ImageComponent from "../components/ImageComponent";

export default function Footer() {
    return (
        <footer
            className="
                w-full
                md:sm:pt-[200px]
                pt-[30vw]
                pb-[100px]
                bg-baseColor
            "
        >
            <div className="inner">
                <FooterItemsComponent />
                <button
                    className="
                        block
                        w-fit
                        leading-[1em]
                        font-[alternate-gothic-condensed-a]
                        text-[25px]
                        text-textColor3
                        border-[2px]
                        border-textColor3
                        mx-auto
                        mb-[100px]
                        group
                        hover:scale-[1.05]
                        hover:border-accentColor
                    "
                >
                    <a
                        href="https://www.facebook.com/people/%E5%8C%97%E9%96%A2%E6%9D%B1%E5%AD%A6%E9%99%A2/100052487361007/"
                        className="block relative inset-0 px-[7px] py-[6px] group-hover:text-accentColor"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Facebook →
                    </a>
                </button>
                <div className="w-[195px] h-[48px] mx-auto">
                    <ImageComponent imageName="school_icon" />
                </div>
            </div>
        </footer>
    );
}
