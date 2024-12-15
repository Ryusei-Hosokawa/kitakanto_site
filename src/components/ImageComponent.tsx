import React from 'react'
import { getImageUrl } from '../pathHelper.ts'

type imageProps = {
    imageName: string;
    extensionName?: string;
    classText?: string;
}

export default function imgLessonDesk({ imageName, extensionName = "jpg", classText }: imageProps) {
    return (
        <img
            src={getImageUrl(imageName , extensionName)}
            alt="lesson_desk"
            className={`w-full h-[auto] ${classText}`}
        />
    );
}
