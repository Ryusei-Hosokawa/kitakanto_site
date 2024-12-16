import React, { useState } from "react";
import { getBodyElement } from "../getBodyElement.ts";

export default function ThemeToggle() {
    const [theme, setTheme] = useState(false);
    const handleThemeClick = () => {
        const body = getBodyElement();
        theme ? body.classList.remove("isDark") : body.classList.add("isDark");
        setTheme(!theme);
    };

    return (
        <button
            className={`
                group
                block
                relative
                z-[999]
                w-[60px]
                h-[30px]
                border-[2px]
                rounded-[50px]
                transition-all
                duration-[0.25s]
                ease-in-out
                bg-baseColor
                hover:scale-[1.1]
                ${theme ? "border-[#d0d1d1]" : "border-[#525558]"}
            `}
            onClick={handleThemeClick}
        >
            <span
                className={`
                    block
                    w-[26px]
                    h-[26px]
                    rounded-[50%]
                    border-[2px]
                    border-baseColor
                    transition-all
                    duration-[0.25s]
                    ease-in-out
                    absolute
                    top-[50%]
                    translate-y-[-50%]
                    ${
                        theme
                            ? "left-[100%] translate-x-[-100%] bg-[#d0d1d1]"
                            : "left-0 bg-[#525558]"
                    }
                `}
            ></span>
        </button>
    );
}
