import React from 'react';
import ProgressBar from './ProgressBar';

interface SkillItemProps {
    title: string;
    percentage: number;
}

const SkillItem: React.FC<SkillItemProps> = ({ title, percentage }) => {
    return (
        <div>
            <div className="flex flex-row justify-between w-full mb-2">
                <h2 className="text-[1rem] font-light">{title}</h2>
                <span className="text-[1rem]  font-light">{percentage}%</span>
            </div>
            <ProgressBar percentage={percentage}/>
        </div>
    );
};

export default SkillItem;
