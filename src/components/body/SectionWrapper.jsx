import React, {useEffect, useState} from 'react';

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
            <div id={name}
                 style={{height: `${headerHeight}px`}}
            ></div>
            <section
                style={{
                    height: `calc(100vh - ${headerHeight}px)`,
                }}
            className={className}
            >
                {children}
            </section>
        </>
    )
        ;
};

export default SectionWrapper;
