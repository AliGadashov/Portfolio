import React, {useEffect, useState} from 'react';
import Typewriter from 'typewriter-effect';
import "./Top.css"
import SectionWrapper from "../SectionWrapper";
import SVGComponent from "../../svg/SVGComponent";

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
            <p className="text-4xl font-semibold">Hello, I'm a</p>
            <h1 className="text-6xl font-bold my-4">
                <Typewriter
                    options={{
                        strings: ['Java Developer', 'Back-end Engineer', 'Problem Solver', 'Team Player', 'Quick Learner'],
                        autoStart: true,
                        loop: true,
                    }}
                />
            </h1>
            <p className="text-2xl font-semibold mb-8">Based in Baku, Azerbaijan</p>

            {/* Buttons */}
            <div className="flex space-x-4">
                <button className="bg-black text-white py-3 px-7 rounded-full font-medium text-lg">
                    View My Work
                </button>
                <button
                    className="bg-primary text-textHover py-3 px-7 rounded-full font-medium text-lg border border-primary hover:bg-darkPrimary hover:text-white transition">
                    Contact Me
                </button>

            </div>
        </div>

        {/*Profile image*/}

        <SVGComponent/>
        {/*<div className="profileCircle border border-black rounded-full flex items-center justify-center relative stop-animation hover:cursor-pointer">*/}
        {/*    /!*<img src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png" className="rounded-full"/>*!/*/}
        {/*    /!*<img src="me2.webp" className="rounded-full"/>*!/*/}


        {/*    <div*/}
        {/*        className="absolute border border-black rounded-full animate-expandBorder delay-0"></div>*/}
        {/*    <div*/}
        {/*        className="absolute border border-black rounded-full animate-expandBorder delay-200"></div>*/}
        {/*    <div*/}
        {/*        className="absolute border border-black rounded-full animate-expandBorder delay-400"></div>*/}
        {/*    <div*/}
        {/*        className="absolute border border-black rounded-full animate-expandBorder delay-600"></div>*/}
        {/*    <div*/}
        {/*        className="absolute border border-black rounded-full animate-expandBorder delay-800"></div>*/}
        {/*    <div*/}
        {/*        className="absolute border border-black rounded-full animate-expandBorder delay-1000"></div>*/}
        {/*</div>*/}
    </SectionWrapper>);
};

export default Top;
