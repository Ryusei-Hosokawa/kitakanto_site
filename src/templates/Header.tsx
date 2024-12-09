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
        toggle ? body.classList.remove("overflow-hidden") : body.classList.add("overflow-hidden");
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
        <header className="flex fixed z-[999] justify-between items-center px-[15px] w-full h-[80px]">
            <NavButton toggle={toggle} onNavButtonClick={() => handleClick()} />
            <ThemeToggle/>
            <div
                className={`
                    w-[100vw]
                    h-[100dvh]
                    p-[75px_130px_50px_130px]
                    bg-[#0f487a]
                    opacity-[0.96]
                    transition-all
                    duration-[0.25s]
                    ease-in-out
                    absolute
                    top-0
                    left-0
                    ${toggle ? 
                        "translate-x-[-0]" :
                        "translate-x-[-100%]"
                    }
                `}
            >
                <NavList listsData={sections} />
            </div>
        </header>
    );
}
