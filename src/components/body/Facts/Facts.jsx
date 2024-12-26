import React from 'react';
import SectionWrapper from "../SectionWrapper";
import FactsItem from "./FactsItem";

const Facts = () => {

    return (
        <SectionWrapper
            name={"FACTS"}
            className="flex flex-col justify-center gap-8">
            {/* Upper Section */}
            <div className="text-start border-l-2 border-black pl-10 py-6 px-6 relative" data-content="My Facts">
                <h2 className="text-2xl font-bold mb-4">Some interesting facts about me</h2>
                <h2 className="text-7xl font-bold mb-4">Fun Facts</h2>
            </div>

            <div className="mt-4 flex flex-col gap-16">
                <div className="flex flex-row justify-end gap-20">
                    <FactsItem title="Finished Projects" count={88}/>
                    <FactsItem title="Happy Customers" count={125}/>
                </div>
                <div className="flex flex-row gap-20">
                    <FactsItem title="Working Hours" count={463}/>
                    <FactsItem title="Coffee Cups" count={279}/>
                </div>
            </div>
        </SectionWrapper>
    );
};

export default Facts;
