import React from 'react';
import Top from "./body/Top";
import SectionWrapper from "./body/SectionWrapper";
import About from "./body/About";

const BodyContent = () => {
    return (
        <div
            className="bg-[#FFDB67] text-black p-6 overflow-y-scroll pt-20"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
            <section>
                <SectionWrapper>
                    <Top/>
                    <About/>
                </SectionWrapper>
            </section>
        </div>
    );
};
export default BodyContent;
