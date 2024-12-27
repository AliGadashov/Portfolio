import React from 'react';

interface ExperienceItemProps {
    startYear: number;
    endYear?: number;
    title: string;
    position: string;
    description: string;
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({ startYear, endYear, title, position, description }) => {
    const dateRange = endYear ? `${startYear} - ${endYear}` : `${startYear} - Present`;

    return (
        <div className="text-start border-l-2 border-black pl-10 py-6 px-6 relative w-3/4 -translate-x-0.5">
            <h3 className="text-2xl font-normal mb-4 select-none">({dateRange})</h3>
            <h2 className="text-4xl font-semibold mb-4 select-none">{title} {position}</h2>
            <p className="text-lg font-light mb-4 select-none">{description}</p>
        </div>
    );
};

export default ExperienceItem;
