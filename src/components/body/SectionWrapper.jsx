import React from 'react';

const SectionWrapper = ({ children }) => {
    return (
        <section className="px-36 py-4 mb-8">
            {children}
        </section>
    );
};

export default SectionWrapper;
