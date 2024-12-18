import React from "react";
import Header from "./templates/Header";
import SectionHero from "./sections/SectionHero";
import SectionHello from "./sections/SectionHello";
import SectionAbout from "./sections/SectionAbout";
import SectionJob from "./sections/SectionJob";
import SectionCourse from "./sections/SectionCourse";
import VisualBreak from "./sections/VisualBreak";
import SectionApply from "./sections/SectionApply";
import SectionAcceptance from "./sections/SectionAcceptance";
import SectionAddress from "./sections/SectionAddress";
import SectionContact from "./sections/SectionContact";
import SectionBenefit from "./sections/SectionBenefit";
import Footer from "./templates/Footer";

export default function App() {
    return (
        <>
            <Header />
            <SectionHero />
            <div className="main-contents bg-baseColor overflow-clip">
                <SectionHello />
                <SectionAbout />
                <SectionJob />
                <SectionCourse />
                <VisualBreak />
                <SectionApply />
                <SectionAcceptance />
                <SectionAddress />
                <div 
                    className="
                        md:sm:flex
                        inner
                    "
                    style={{ 
                        paddingLeft: "0px", 
                        paddingRight: "0px"
                    }}
                >
                    <SectionContact />
                    <SectionBenefit />
                </div>
                <Footer />
            </div>
        </>
    );
}
