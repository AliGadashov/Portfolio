// ProgressBar.tsx
import React from 'react';

interface ProgressBarProps {
    percentage: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ percentage }) => {
    return (
        <div className="w-full bg-white rounded-full h-[0.15rem] mt-2 mb-1">
            <div
                className="bg-darkPrimary h-[0.18rem] rounded-full"
                style={{ width: `${percentage}%` }}
            ></div>
        </div>
    );
};

export default ProgressBar;
