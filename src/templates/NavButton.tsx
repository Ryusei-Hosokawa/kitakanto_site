import React from "react";

export default function NavButton({ toggle, onNavButtonClick }: { toggle:boolean , onNavButtonClick: () => void }) {
    return (
        <button
            className="
                group
                block
                relative
                cursor-pointer
                z-[100]
                w-[60px]
                h-[60px]
            "
            onClick={onNavButtonClick}
            >
            <span
                className={`
                    group-hover:scale-[1.1]
                    block
                    absolute
                    left-[50%]
                    translate-x-[-50%]
                    ${toggle ? 
                        "top-[50%] translate-y-[-50%] rotate-[45deg] bg-[#fefefe]":
                         "top-[43%] translate-y-[0%] rotate-[0deg] bg-navButtonColor2 group-hover:bg-navButtonColor3"
                    }
                    w-[60px]
                    h-[1.5px]
                    rounded-[50px]
                    transition-all
                    duration-[0.25s]
                    ease-in-out
                    translate(-50%,5px)
                `}
            ></span>
            <span
                className={`
                    group-hover:scale-[1.1]
                    block
                    absolute
                    left-[50%]
                    translate-x-[-50%]
                    ${toggle ? 
                        "bottom-initial top-[50%] translate-y-[-50%] rotate-[-45deg] bg-[#fefefe]":
                         "top-initial bottom-[43%] translate-y-[0%] rotate-[0deg] bg-navButtonColor2 group-hover:bg-navButtonColor3"
                    }
                    rotate-[-45deg]
                    w-[60px]
                    h-[1.5px]
                    rounded-[50px]
                    transition-all
                    duration-[0.25s]
                    ease-in-out translate(-50%,-5px)
                `}
            ></span>
        </button>
    );
}
