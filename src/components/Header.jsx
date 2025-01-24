import React, { useState } from 'react';
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross2 } from "react-icons/rx";

const Header = ({ setOpenNav }) => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    const [isEnglish, setIsEnglish] = useState(true);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleLanguage = () => {
        setIsEnglish(!isEnglish);
    };

    const toggleMenu = () => {
        setIsMenuOpen(prev => !prev);
        setOpenNav(prev => !prev);
    };

    return (
        <header className="bg-bgColor bg-opacity-50 backdrop-filter backdrop-blur-sm text-black py-4 px-6 firefox:bg-opacity-50">
            <div className="flex justify-between items-center">
                <h1
                    className="text-xl font-bold pl-12 sm:text-2xl md:text-4xl md:pl-24 select-none cursor-pointer text-nowrap"
                    onClick={scrollToTop}
                >
                    Ali Gadashov
                </h1>

                <div className="flex flex-row gap-5">
                    <div className="flex items-center">
                        <button
                            onClick={toggleLanguage}
                            className="flex items-center text-xl cursor-pointer"
                        >
                            <div className="ml-2">
                                <img
                                    src={isEnglish ? '/en.jpg' : '/az.png'}
                                    alt={isEnglish ? 'English' : 'Azerbaijani'}
                                    className="w-6 h-6 rounded-full filter brightness-75 contrast-75"
                                />
                            </div>
                        </button>
                    </div>
                    <button
                        className="text-2xl pr-12 md:pr-24 md:hidden"
                        onClick={toggleMenu}
                    >
                        {isMenuOpen ? <RxCross2 /> : <RxHamburgerMenu />}
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;
