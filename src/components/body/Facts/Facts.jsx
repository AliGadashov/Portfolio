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

            <div className=" mt-4 flex flex-col gap-16">
                <div className="flex-col flex gap-16 md:justify-start  md:flex-row lg:justify-end md:gap-56 lg:gap-30 xl:gap-20">
                    <FactsItem title="Finished Projects" count={88}/>
                    <FactsItem title="Happy Customers" count={125}/>
                </div>
                <div className="flex flex-col gap-16 md:gap-56 md:flex-row lg:gap-30 xl:gap-20 ">
                    <FactsItem title="Working Hours" count={463}/>
                    <FactsItem title="Coffee Cups" count={279}/>
                </div>
            </div>
        </SectionWrapper>
    );
};

export default Facts;
