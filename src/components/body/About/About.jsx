import React from 'react';
import "./About.css"
import SectionWrapper from "../SectionWrapper";
import SectionHeader from "../SectionHeader";

const About = () => {

    return (
        <SectionWrapper
            name={"ABOUT ME"}
            className="flex flex-col justify-center gap-8">
            {/* Upper Section */}

            <SectionHeader headerContent={"About Me"} headerTitle={"Some Word About Me"} headerMainTitle={"Know Me More"} />

            <div className="flex flex-col gap-20 items-center xl:flex-row ">
                <div className="flex flex-col gap-8">

                    <div>
                        <h2 className="text-4xl font-medium mb-4 select-none" >I'm Ali Gadashov, a Web Developer</h2>
                        <p className="text-xl py-2 text-black select-none">I'm a designer & developer with a passion for web
                            design. I
                            enjoy developing simple, clean and slick websites that provide real value to the end
                            user.
                            Thousands of clients have procured exceptional results while working with me. Delivering
                            work within time and budget which meets client's requirements is our moto.</p>
                    </div>
                    {/* Lower Section */}
                    <div className="flex flex-col gap-5 justify-between custom-ls-about:flex-row md:flex-row custom-lg-about:flex-col custom-xl-about:flex-col">
                        {/*Email*/}
                        <div className="text-lg font-semibold">
                            <p className="select-none">Email:</p>
                            <a href="mailto:ali.gadashovv@gmail.com"
                               className="text-black font-light">
                                ali.gadashovv@gmail.com
                            </a>
                        </div>
                        {/*Birth date*/}
                        <div className="text-lg font-semibold">
                            <p className=" select-none">Birth Date:
                            </p>
                            <span className="text-black font-light select-none">13-01-2000</span>
                        </div>
                        {/* LinkedIn */}
                        <div className="text-lg font-semibold">
                            <p className="font-semibold select-none">LinkedIn</p>
                            <a href="https://www.linkedin.com/in/alasgar-gadashov/" className="text-black font-light ">alasgar-gadashov</a>
                        </div>
                    </div>
                </div>
                <div>
                    {/* Experience */}
                    <div
                        className="experience flex flex-col items-center justify-center p-20 box-border bg-darkPrimary text-white font-semibold border-black border z-20">
                        <span className="text-9xl select-none" >3</span>
                        <p className="text-lg text-nowrap select-none">Years of Experience</p>
                    </div>

                </div>
            </div>
        </SectionWrapper>
    );
};

export default About;
