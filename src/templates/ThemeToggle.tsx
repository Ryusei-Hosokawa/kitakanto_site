import React, { useState } from "react";
import ImageComponent from "../components/ImageComponent";
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
                border-[#f9fafa]
                rounded-[50px]
                transition-all
                duration-[0.25s]
                ease-in-out
                bg-mainColor
                hover:scale-[1.1]
            `}
            onClick={handleThemeClick}
        >
            <span
                className={`
                    grid
                    place-items-center
                    w-[26px]
                    h-[26px]
                    rounded-[50%]
                    border-[2px]
                    border-mainColor
                    transition-all
                    duration-[0.25s]
                    ease-in-out
                    absolute
                    top-[50%]
                    translate-y-[-50%]
                    overflow-clip
                    bg-[#f9fafa]
                    ${
                        theme
                            ? "left-[100%] translate-x-[-100%] "
                            : "left-0"
                    }
                `}
            >
                {theme ? (
                    <div
                        className={`
                            w-[70%]
                            transition-all
                            ${
                                theme
                                    ? "animationMoveIconRight"
                                    : ""
                            }
                        `}
                    >
                        <ImageComponent
                            imageName={"icon_dark"}
                            extensionName={"svg"}
                        />
                    </div>
                ) : (
                    <div
                        className={`
                            w-[70%]
                            ${
                                theme
                                    ? ""
                                    : "animationMoveIconLeft"
                            }
                        `}
                    >
                        <ImageComponent
                            imageName={"icon_light"}
                            extensionName={"svg"}
                        />
                    </div>
                )}
            </span>
        </button>
    );
}
