import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Aside from './components/Aside';
import BodyContent from './components/BodyContent';
import LoadingPage from './components/Loading/LoadingPage';
import './App.css';

const App = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [openNav, setOpenNav] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isWideScreen, setIsWideScreen] = useState(window.innerWidth >= 768);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    const  toggle = () => {
        setIsMenuOpen(false)
        setOpenNav(false)
    }

    useEffect(() => {
        const handleResize = () => {
            setIsWideScreen(window.innerWidth >= 768);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className="App h-screen flex flex-col">
            {isLoading ? (
                <LoadingPage />
            ) : (
                <>
                    {/* Header */}
                    <header className="absolute top-0 w-full z-40">
                        <Header setOpenNav={setOpenNav} isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
                    </header>

                    {/* Main Content Wrapper */}
                    <div className="flex flex-1 overflow-hidden relative">
                        {/* Overlay */}
                        {isMenuOpen && (
                            <div
                                className="fixed inset-0 bg-black bg-opacity-50 z-20 transition-all duration-300"
                                onClick={toggle}
                            ></div>
                        )}

                        {/* Main Content */}
                        <main
                            className={`flex-1 overflow-y-auto scrollbar-hidden transition-all duration-300 ${
                                isMenuOpen ? 'blur-sm' : ''
                            }`}
                            style={{
                                WebkitOverflowScrolling: 'touch',
                                scrollbarWidth: 'none',
                                msOverflowStyle: 'none',
                            }}
                        >
                            <BodyContent />
                        </main>

                        {/* Aside Menu */}
                        <aside
                            className={`w-2/3 transition-all duration-700 md:w-1/3 lg:w-1/4 fixed z-30 md:static right-0 ${
                                isWideScreen || openNav ? 'translate-x-0' : 'translate-x-[100%]'
                            }`}
                        >
                            <Aside  setOpenNav={setOpenNav} setIsMenuOpen={setIsMenuOpen} />
                        </aside>
                    </div>
                </>
            )}
        </div>
    );
};

export default App;
