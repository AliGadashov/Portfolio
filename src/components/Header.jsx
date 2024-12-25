import React from 'react';

const Header = () => {
    return (
        <header className="bg-bgColor bg-opacity-50 backdrop-filter backdrop-blur-sm text-black py-4 px-6 firefox:bg-opacity-50">
            <div className="flex justify-between items-center">
                <h1 className="text-4xl font-bold px-24">Ali Gadashov</h1>
            </div>
        </header>
    );
};

export default Header;
