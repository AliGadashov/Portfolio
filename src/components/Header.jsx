import React, { useState } from 'react';

const Header = ({setOpenNav}) => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    const [isEnglish, setIsEnglish] = useState(true);

    const toggleLanguage = () => {
        setIsEnglish(!isEnglish);
    };

    return (
        <header className="bg-bgColor bg-opacity-50 backdrop-filter backdrop-blur-sm text-black py-4 px-6 firefox:bg-opacity-50">
            <div className="flex justify-between items-center">
                <h1
                    className="text-4xl font-bold px-24 select-none cursor-pointer"
                    onClick={scrollToTop}
                >
                    Ali Gadashov
                </h1>
                <button className="md:hidden" onClick={()=>setOpenNav(prev=> !prev)}>ok</button>

                <div className="flex items-center px-24">

                    <button
                        onClick={toggleLanguage}
                        className="flex items-center text-xl cursor-pointer"
                    >
                        {/*<span>{isEnglish ? 'Eng' : 'Aze'}</span>*/}
                        <div className="ml-2">
                            <img
                                src={isEnglish ? '/en.jpg' : '/az.png'}
                                alt={isEnglish ? 'English' : 'Azerbaijani'}
                                className="w-6 h-6 rounded-full filter brightness-75 contrast-75"
                            />
                        </div>
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;
