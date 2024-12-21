import React from 'react'
import { getImageUrl } from '../pathHelper.ts'
import { useScrollTrigger } from "../hooks/useScrollTrigger";

type imageProps = {
    imageName: string;
    extensionName?: string;
    classText?: string;
}

export default function imgLessonDesk({ imageName = "w_pc", extensionName = "jpg", classText = "max-w-[400px] rounded-[30px]" }: imageProps) {
    const { ref, inView } = useScrollTrigger({ threshold: 0.2 });
    return (
        <img
            ref={ref}
            src={getImageUrl(imageName , extensionName)}
            className={`w-full h-[auto] delay-[250ms] duration-[400ms] ${inView ? "opacity-[1] scale-1":"opacity-0 scale-[0.8]"} ${classText}`}
        />
    );
}
