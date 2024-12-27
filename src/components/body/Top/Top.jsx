import React, {useEffect, useState} from 'react';
import Typewriter from 'typewriter-effect';
import "./Top.css"
import SectionWrapper from "../SectionWrapper";
import HomePC from "../../svg/HomePC";

const Top = () => {

    const [headerHeight, setHeaderHeight] = useState(0);

    useEffect(() => {
        const header = document.querySelector('header');
        if (header) {
            setHeaderHeight(header.offsetHeight);
        }
    }, []);

    return (<SectionWrapper
        name={"TOP"}
        className="flex flex-row items-center justify-between text-black">

        {/*Top text*/}
        <div>
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
                <button className=" cursor-auto bg-black text-white py-3 px-7 rounded-full font-medium text-lg select-none">
                    View My Work
                </button>
                <button
                    className="cursor-auto bg-primary text-textHover py-3 px-7 rounded-full font-medium text-lg border border-primary hover:bg-darkPrimary hover:text-white transition select-none">
                    Contact Me
                </button>

            </div>
        </div>

        <HomePC/>

    </SectionWrapper>);
};

export default Top;
