import React from 'react';

const Header = () => {
    return (
        <header className="bg-[#FFDB67] text-black py-4 px-6 shadow-md">
            <div className="flex justify-between items-center">
                <h1 className="text-xl font-bold">Portify</h1>
                <nav>
                    <ul className="flex space-x-4">
                        <li><a href="#" className="hover:text-gray-400">Next Chapter</a></li>
                        <li><a href="#" className="hover:text-gray-400">Sign In</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
