import React from 'react';

const Header = () => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
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
            </div>
        </header>
    );
};

export default Header;
