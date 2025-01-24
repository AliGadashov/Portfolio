import React, { useEffect, useState } from 'react';
import Typewriter from 'typewriter-effect';
import SectionWrapper from "../SectionWrapper";
import HomePC from "../../svg/HomePC";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Top = () => {

    const [headerHeight, setHeaderHeight] = useState(0);

    useEffect(() => {
        const header = document.querySelector('header');
        if (header) {
            setHeaderHeight(header.offsetHeight);
        }
        AOS.init();
    }, []);

    const handleClick = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };

    const project = "PROJECTS"
    const contact = "CONTACT"

    return (
        <SectionWrapper name={"TOP"} className="mt-10 flex flex-col items-center gap-24 xl:justify-between text-black xl:mt-0 xl:gap-10 xl:flex-row ">
            {/*Top text*/}
            <div className="flex flex-col items-center text-center xl:items-start xl:text-start" data-aos="fade-right" data-aos-duration="1500">
                <p className="text-4xl font-semibold select-none">Hello, I'm a</p>
                <h1 className="text-6xl font-bold my-4 select-none">
                    <Typewriter
                        options={{
                            strings: ['Java Developer', 'Back-end Engineer', 'Problem Solver', 'Team Player', 'Quick Learner'],
                            autoStart: true,
                            loop: true,
                        }}
                    />
                </h1>
                <p className="text-2xl font-semibold mb-8 select-none">Based in Baku, Azerbaijan</p>

                {/* Buttons */}
                <div className="flex space-x-4">
                    <button
                        onClick={() => handleClick(project.toUpperCase())}
                        className=" cursor-pointer bg-black text-white py-3 px-7 rounded-full font-medium text-sm select-none md:text-lg custom-xl-top:px-5">
                        View My Work
                    </button>
                    <button
                        onClick={() => handleClick(contact.toUpperCase())}
                        className="cursor-pointer bg-primary text-textHover py-3 px-7 rounded-full font-medium text-sm border border-primary hover:bg-darkPrimary hover:text-white transition select-none md:text-lg custom-xl-top:px-5">
                        Contact Me
                    </button>
                </div>
            </div>

            <div className="" data-aos="zoom-in" data-aos-duration="1500">
                <HomePC />
            </div>

        </SectionWrapper>
    );
};

export default Top;
