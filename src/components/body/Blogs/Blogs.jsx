import SectionWrapper from "../SectionWrapper";
import SectionHeader from "../SectionHeader";
import React from "react";

const Blogs = () => {

    return (<SectionWrapper
        name={"BLOGS"}
        className="flex flex-col justify-center gap-8">
        {/* Upper Section */}

        <SectionHeader headerContent={"My Blogs"} headerTitle={"Explore My Blog"} headerMainTitle={"Latest Articles"} />

    </SectionWrapper>);
};

export default Blogs;
