import React from "react";
import Header from "./templates/Header";
import SectionHero from "./sections/SectionHero";
import SectionHello from "./sections/SectionHello";
import SectionAbout from "./sections/SectionAbout";

export default function App() {
    return (
        <>
            <Header />
            <SectionHero />
            <div className="main-contents bg-baseColor">
                <SectionHello />
                <SectionAbout />
            </div>
        </>
    );
}
