import SectionWrapper from "../SectionWrapper";
import SectionHeader from "../SectionHeader";
import React from "react";

const Testimonial = () => {

    return (<SectionWrapper
        name={"TESTIMONIALS"}
        className="flex flex-col justify-center gap-8">
        {/* Upper Section */}

        <SectionHeader headerContent={"Testimonial"} headerTitle={"My Clients and Testimonials"} headerMainTitle={"My Clients Reviews"} />

    </SectionWrapper>);
};

export default Testimonial;
