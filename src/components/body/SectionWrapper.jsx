import React, { useEffect, useState } from 'react';
import Chapter from "./Chapter/Chapter";

const SectionWrapper = ({children, className, name}) => {
    const [headerHeight, setHeaderHeight] = useState(0);

    useEffect(() => {
        const header = document.querySelector('header');
        if (header) {
            setHeaderHeight(header.offsetHeight);
        }
    }, []);

    return (
        <>
            <div id={name} style={{ height: `${headerHeight}px` }}></div>
            <section
                style={{
                    minHeight: `calc(100vh - ${headerHeight}px)`,
                    height: `auto`,
                }}
                className={className}
            >
                {children}
            </section>

            <Chapter  currentSection={name} />
        </>
    );
};

export default SectionWrapper;
