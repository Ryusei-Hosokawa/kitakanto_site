export const styleLink = () => {
    document.addEventListener("DOMContentLoaded", () => {
        const head = document.head;
        const linkElement = document.createElement("link");

        linkElement.rel = "stylesheet";
        linkElement.href = "animation.css";

        head.appendChild(linkElement);
    });
};
