import React from 'react';
import SectionWrapper from "../SectionWrapper";
import ExperienceItem from "./ExperienceItem";

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
            <div className="text-start border-l-2 border-black pl-10 py-6 px-6 relative" data-content="Experiences">
                <h2 className="text-2xl font-bold mb-4 select-none">Highlight My key Experiences</h2>
                <h2 className="text-7xl font-bold mb-4 select-none">My Experience</h2>
            </div>

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
