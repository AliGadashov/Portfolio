import React, { useEffect, useState } from 'react';

const menuItems = [
    'TOP', 'ABOUT ME', 'MY SERVICES', 'SKILLS', 'FACTS',
    'EXPERIENCES', 'PROJECTS', 'HOW I WORK', 'BLOGS',
    'TESTIMONIALS', 'CONTACT'
];

const Aside = () => {
    const [maxLength, setMaxLength] = useState(0);

    useEffect(() => {
        const longestText = menuItems.reduce((max, item) => Math.max(max, item.length), 0);
        setMaxLength(longestText * 20 + 5);
    }, []);
    useEffect(() => {
        document.documentElement.style.setProperty('--param-value', `${maxLength}px`);
    }, [maxLength]);

    const handleClick = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <aside className="bg-[#FFDB67] text-black pl-8 flex items-center h-screen">
            <div className="w-full border-l-2 border-[#b19b4d]">
                <ul className="flex flex-col items-start space-y-1 ">
                    {menuItems.map((item, index) => (
                        <li key={index} className="relative group">
                            <div
                                className="relative flex items-center group cursor-pointer"
                                style={{
                                    marginTop: "3px",
                                    marginBottom: "3px",
                                }}
                                onClick={() => handleClick(item.toUpperCase())} // Handle click to scroll to section
                            >
                                <span
                                    className="absolute left-0 top-0 w-0 h-full bg-[#897a42] group-hover:w-[calc(var(--param-value))] transition-all ease-out duration-1000 "
                                    style={{
                                        opacity: 0.4,
                                    }}
                                ></span>
                                <span
                                    className="absolute top-0 w-0 h-full bg-[#000000] group-hover:w-0.5 transition-all ease-in-out duration-200 "
                                    style={{
                                        left: -2,
                                    }}
                                ></span>
                                <span
                                    className="ml-3 mr-3 pl-8 text-black text-lg font-poppins font-semibold uppercase leading-[40px] z-10"
                                >
                                    {String(index + 1).padStart(2, '0')}
                                </span>
                                <a className="relative text-black text-sm font-poppins font-semibold uppercase leading-[40px] flex items-center z-10">
                                    {item}
                                </a>
                            </div>
                        </li>
                    ))}
                    <div className="flex flex-col pl-8 space-y-0 ml-3 mr-3 py-6 text-black text-lg font-poppins leading-[30px]">
                        <span className="cursor-pointer">ali.gadashovv@gmail.com</span>
                        <span className="cursor-pointer">+994 55 826 62 82</span>
                    </div>
                </ul>
            </div>
        </aside>
    );
};

export default Aside;
