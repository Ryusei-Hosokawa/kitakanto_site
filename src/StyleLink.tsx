import { useEffect } from "react";

const styleLink: React.FC = () => {
    useEffect(() => {
        const head = document.head;
        const linkElement = document.createElement("link");

        linkElement.rel = "stylesheet";
        linkElement.href = "animation.css";

        head.appendChild(linkElement);

        return () => {
            head.removeChild(linkElement);
        };
    }, []);
    return null
};
export default styleLink;