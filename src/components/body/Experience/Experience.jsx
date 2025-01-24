import React from 'react';
import SectionWrapper from "../SectionWrapper";
import ExperienceItem from "./ExperienceItem";
import SectionHeader from "../SectionHeader";

const Experience = () => {

    const mockExperiences = [
        {
            startYear: 2024,
            title: "Intern Java Developer",
            position: "at Cybernett",
            description: "Spearheaded multiple web development projects, enhancing user experience and functionality. Led a team of developers to successfully launch high-traffic websites."
        },
        {
            startYear: 2022,
            endYear: 2024,
            title: "Junior Developer",
            position: "at TechCorp",
            description: "Collaborated on developing and maintaining internal software systems, ensuring high availability and performance."
        },
    ];


    return (
        <SectionWrapper
            name={"EXPERIENCES"}

            className="flex flex-col justify-center gap-8">
            {/* Upper Section */}

            <SectionHeader headerContent={"Experiences "} headerTitle={"Highlight My key Experiences"} headerMainTitle={"My Experience"} />

            <div className="mt-4 flex flex-col gap-16 border-l-2 border-primary ">
                {mockExperiences.map((experience, index) => (
                    <ExperienceItem
                        key={index}
                        startYear={experience.startYear}
                        endYear={experience.endYear}
                        title={experience.title}
                        position={experience.position}
                        description={experience.description}
                    />
                ))}
            </div>
        </SectionWrapper>
    );
};

export default Experience;
