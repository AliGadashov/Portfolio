import React from 'react';

const SectionWrapper = ({ children }) => {
    return (
        <div className="flex flex-col gap-20 px-24 py-4 mt-8">
            {children}
        </div>
    );
};

export default SectionWrapper;
