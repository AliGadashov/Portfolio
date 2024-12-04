import React from 'react';
import Top from "./body/Top";

const BodyContent = () => {
    return (
        <div
            className="bg-[#FFDB67] text-black p-6 overflow-y-scroll"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
            <section className="mb-8">
                <Top/>
            </section>
        </div>
    );
};
export default BodyContent;
