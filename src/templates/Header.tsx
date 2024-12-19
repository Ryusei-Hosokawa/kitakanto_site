import React, { useState } from "react";
import NavButton from "./NavButton";
import ThemeToggle from "./ThemeToggle";
import NavList from "./NavList";
import { getBodyElement } from "../getBodyElement";

export default function Header() {
    const [toggle, setToggle] = useState(false);
    const handleClick = () => {
        setToggle(!toggle);
        const body = getBodyElement();
        toggle
            ? body.classList.remove("overflow-hidden")
            : body.classList.add("overflow-hidden");
    };

    const sections: { id: string; title: string }[] = [
        { id: "TOP", title: "TOP" },
        { id: "ABOUT", title: "ABOUT" },
        { id: "JOB", title: "JOB" },
        { id: "COURSE", title: "COURSE" },
        { id: "APPLY", title: "APPLY" },
        { id: "ACCEPTANCE", title: "ACCEPTANCE" },
        { id: "ADDRESS", title: "ADDRESS" },
        { id: "CONTRACT", title: "CONTRACT" },
        { id: "BENEFIT", title: "BENEFIT" },
    ];

    return (
        <header
            className={`
                fixed
                z-[999]
                pt-[50px]
                px-[50px]
                w-full
                h-[80px]
                ${
                    toggle &&
                    "before:w-[120vw] before:h-[120vh] before:bg-[#999] before:opacity-[0.6] before:absolute before:top-[50%] before:left-[50%] before:z-[-10] before:translate-x-[-50%] before:translate-y-[-5%]"
                }
                
            `}
        >
            <div className="flex justify-between items-center w-full">
                <NavButton
                    toggle={toggle}
                    onNavButtonClick={() => handleClick()}
                />
                <ThemeToggle />
            </div>
            <div
                className={`
                    w-[98vw]
                    h-[95dvh]
                    p-[75px_130px_50px_130px]
                    rounded-[20px]
                    bg-mainColor
                    opacity-[0.96]
                    transition-all
                    duration-[0.25s]
                    ease-in-out
                    absolute
                    top-[50%]
                    left-[50%]
                    z-[1]
                    translate-x-[-50%]
                    translate-y-[-2%]
                    ${
                        toggle
                            ? "opacity-[1] visible pointer-events-auto scale-[1]"
                            : "opacity-[0] invisible pointer-events-none scale-[0.4]"
                    }
                `}
            >
                <NavList 
                    listsData={sections}
                    onListClick={() => handleClick()}
                />
            </div>
        </header>
    );
}
