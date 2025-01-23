import React from "react";
import { PiArrowElbowRightDown } from "react-icons/pi";

const pageMap = [
    { id: "TOP", order: 1 },
    { id: "ABOUT ME", order: 2 },
    { id: "MY SERVICES", order: 3 },
    { id: "SKILLS", order: 4 },
    { id: "FACTS", order: 5 },
    { id: "EXPERIENCES", order: 6 },
    { id: "PROJECTS", order: 7 },
    { id: "BLOGS", order: 8 },
    { id: "TESTIMONIALS", order: 9 },
    { id: "CONTACT", order: 10 },
];

const findSection = (key, value) => pageMap.find((section) => section[key] === value) || null;

const Chapter = ({ currentSection }) => {
    const currentSectionDetails = findSection("id", currentSection);
    const currentPage = currentSectionDetails?.order || 0;
    const nextSectionDetails = findSection("order", currentPage + 1);

    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };

    return (
        <div className="w-1/4 flex items-center gap-4 p-2.5 mb-10 mt-6">
            <span className="text-lg text-gray-800 cursor-default">
                {currentPage}/{pageMap.length}
            </span>
            {nextSectionDetails && (
                <div className="flex flex-row items-center cursor-pointer pr-3 group">
                    <button
                        onClick={() => scrollToSection(nextSectionDetails.id)}
                        className="flex items-center px-3 py-2 rounded text-black text-xl select-none"
                    >
                        Next Chapter
                    </button>
                    <PiArrowElbowRightDown className="mt-3 text-xl group-hover:animate-bounce-icon" />
                </div>
            )}
        </div>
    );
};

export default Chapter;
