// Skills.tsx
import React, {useEffect, useState} from 'react';
import "./Skills.css";
import SkillItem from './SkillItem';
import CircleProgress from "./CircleProgress";
import SectionWrapper from "../SectionWrapper";

const Skills = () => {

    const devSkillsData = [
        { title: 'Front-End Development', percentage: 90 },
        { title: 'Back-End Development', percentage: 85 },
        { title: 'Full-Stack Development', percentage: 88 },
        { title: 'Database Management', percentage: 80 },
        { title: 'Version Control', percentage: 95 },
        { title: 'API Integration', percentage: 87 }
    ];

    const designSkillData = [
        { title: 'Design', percentage: 85 },
        { title: 'Branding', percentage: 90 },
        { title: 'Ecommerce', percentage: 75 }
    ];

    const languageSkillData = [
        { title: 'English', percentage: 85 },
        { title: 'Turkish', percentage: 95 },
        { title: 'Russian', percentage: 75 }
    ];

    const [headerHeight, setHeaderHeight] = useState(0);

    useEffect(() => {
        const header = document.querySelector('header');
        if (header) {
            setHeaderHeight(header.offsetHeight);
        }
    }, []);

    return (
        <SectionWrapper
            name={"SKILLS"}
            className="flex flex-col justify-center gap-20">
            {/* Design Skills */}
            <div className="flex flex-col gap-10 custom-lg-skill:flex-row justify-between">
                <div className=" lg:w-2/3">
                    <div className="text-start border-l-2 border-darkPrimary pl-10 py-6 px-6 relative"
                         data-content="Attainments">
                        <h2 className="text-4xl font-medium mb-4 select-none">Design Skills</h2>
                        <h2 className="text-xl font-light mb-4 select-none">Highlight My Expertise in:</h2>
                    </div>
                    <div className="skillOrder font-semibold select-none">01.-</div>
                </div>
                <div className="flex flex-col justify-between items-center gap-5 custom-md-skill:flex-row lg:w-2/3 ">
                    {designSkillData.map((skill, index) => (
                        <CircleProgress key={index} label={skill.title} percentage={skill.percentage}/>
                    ))}
                </div>
            </div>

            {/* Developer Skills */}
            <div className="flex flex-col gap-10 justify-between lg:flex-row ">
                <div className=" flex justify-start  lg:justify-end lg:w-1/2">
                    <div>
                        <div className="text-start border-l-2 border-darkPrimary pl-10 py-6 px-6 relative">
                            <h2 className="text-4xl font-medium mb-4 select-none">Developer Skills</h2>
                            <h2 className="text-xl font-light mb-4 select-none">Highlight My Expertise in:</h2>
                        </div>
                        <div className="skillOrder font-semibold select-none">02.-</div>
                    </div>
                </div>
                <div className="lg:w-1/2 lg:pl-10">
                    {devSkillsData.map((skill, index) => (
                        <SkillItem key={index} title={skill.title} percentage={skill.percentage}/>
                    ))}
                </div>
            </div>

            {/* Language Skills */}
            <div className="flex flex-col gap-10 custom-lg-skill:flex-row justify-between">
                <div className=" w-1/3">
                    <div className="text-start border-l-2 border-darkPrimary pl-10 py-6 px-6 relative">
                        <h2 className="text-4xl font-medium mb-4 select-none">Language Skills</h2>
                        <h2 className="text-xl font-light mb-4 select-none">Highlight My Expertise in:</h2>
                    </div>
                    <div className="skillOrder font-semibold select-none">03.-</div>
                </div>
                <div className="flex flex-col justify-between items-center gap-5 custom-md-skill:flex-row lg:w-2/3 ">
                    {languageSkillData.map((skill, index) => (
                        <CircleProgress key={index} label={skill.title} percentage={skill.percentage}/>
                    ))}
                </div>
            </div>
        </SectionWrapper>);
};

export default Skills;
