import React, {useEffect, useState} from 'react';
import "./About.css"
import SectionWrapper from "../SectionWrapper";

const About = () => {


    return (
        <SectionWrapper
            name={"ABOUT ME"}
            className="flex flex-col justify-center gap-8">
            {/* Upper Section */}
            <div className="text-start border-l-2 border-black pl-10 py-6 px-6 relative" data-content="About Me">
                <h2 className="text-2xl font-bold mb-4">Some Word About Me</h2>
                <h2 className="text-7xl font-bold mb-4">Know Me More</h2>
            </div>

            <div className="flex flex-row gap-20">
                <div className="flex flex-col gap-8">

                    <div>
                        <h2 className="text-4xl font-medium mb-4">I'm Ali Gadashov, a Web Developer</h2>
                        <p className="text-xl py-2 text-black">I'm a designer & developer with a passion for web
                            design. I
                            enjoy developing simple, clean and slick websites that provide real value to the end
                            user.
                            Thousands of clients have procured exceptional results while working with me. Delivering
                            work within time and budget which meets client's requirements is our moto.</p>
                    </div>
                    {/* Lower Section */}
                    <div className="flex flex-row justify-between ">
                        {/*Email*/}
                        <div className="text-lg font-semibold">
                            <p className="">
                                Email:
                            </p>
                            <span className="text-black font-light">ali.gadashovv@gmail.com</span>
                        </div>
                        {/*Birth date*/}
                        <div className="text-lg font-semibold">
                            <p>Birth Date:
                            </p>
                            <span className="text-black font-light">1995-12-31</span>
                        </div>
                        {/* LinkedIn */}
                        <div className="text-lg font-semibold">
                            <p className="font-semibold">LinkedIn</p>
                            <span className="text-black font-light">Visit my LinkedIn</span>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row justify-between gap-12 md:w-2/3">
                    {/* Experience */}
                    <div
                        className="experience flex flex-col items-center justify-center px-20 w-full box-border bg-darkPrimary text-white font-semibold border-black border z-30">
                        <span className="text-9xl">3</span>
                        <p className="text-lg text-nowrap">Years of Experience</p>
                    </div>

                </div>
            </div>
        </SectionWrapper>
    );
};

export default About;
