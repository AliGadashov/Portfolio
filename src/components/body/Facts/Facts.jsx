import React from 'react';
import SectionWrapper from "../SectionWrapper";
import FactsItem from "./FactsItem";
import SectionHeader from "../SectionHeader";

const Facts = () => {

    return (
        <SectionWrapper
            name={"FACTS"}
            className="flex flex-col justify-center gap-8">
            {/* Upper Section */}

            <SectionHeader headerContent={"My Facts"} headerTitle={"Some interesting facts about me"} headerMainTitle={"Fun Facts"} />

            <div className=" mt-4 flex flex-col items-center gap-16 lg:items-stretch">
                <div className="flex flex-col items-center justify-start gap-16 lg:flex-row lg:gap-56 lg:gap-30 xl:gap-30 xl:justify-end">
                    <FactsItem title="Finished Projects" count={88}/>
                    <FactsItem title="Happy Customers" count={125}/>
                </div>
                <div className="flex flex-col items-center justify-start gap-16 lg:flex-row lg:gap-56 lg:gap-30 xl:gap-30 ">
                    <FactsItem title="Working Hours" count={463}/>
                    <FactsItem title="Coffee Cups" count={279}/>
                </div>
            </div>
        </SectionWrapper>
    );
};

export default Facts;
