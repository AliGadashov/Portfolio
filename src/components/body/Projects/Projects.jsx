import SectionWrapper from "../SectionWrapper";
import SectionHeader from "../SectionHeader";
import React from "react";

const Projects = () => {

    return (<SectionWrapper
        name={"PROJECTS"}
        className="flex flex-col justify-center gap-8">
        {/* Upper Section */}

        <SectionHeader headerContent={"Projects"} headerTitle={"Some of my most recent projects"} headerMainTitle={"My Featured Projects"} />

    </SectionWrapper>);
};

export default Projects;
