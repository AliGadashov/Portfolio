import React from 'react';
import Top from "./body/Top/Top";
import About from "./body/About/About";
import Skills from "./body/Skills/Skills";
import Services from "./body/Services/Services";
import Facts from "./body/Facts/Facts";
import Experience from "./body/Experience/Experience";
import Contact from "./body/Contact/Contact";
import Projects from "./body/Projects/Projects";
import Blogs from "./body/Blogs/Blogs";
import Testimonial from "./body/Testimonial/Testimonial";

const BodyContent = () => {
    return (
        <div
            className="bg-bgColor text-black px-6 overflow-y-scroll "
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
            <section>
                <div className="flex flex-col px-24">
                    <Top/>
                    <About/>
                    <Services/>
                    <Skills/>
                    <Facts/>
                    <Experience/>
                    <Projects/>
                    <Blogs/>
                    <Testimonial/>
                    <Contact/>
                </div>
            </section>
        </div>
    );
};
export default BodyContent;
