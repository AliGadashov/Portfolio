import React from 'react';
import LayeredNumber from "./LayeredNumber";

interface FactsItemProps {
    title: string;
    count: number;
}

const FactsItem: React.FC<FactsItemProps> = ({ title, count }) => {
    return (
        <div className="flex flex-col w-1/4">
            <LayeredNumber value={count}/>
            <div className="w-full h-0.5 bg-darkPrimary"></div>
            <div className="mt-3 text-2xl text-black select-none">{title}</div>
        </div>
    );
};

export default FactsItem;