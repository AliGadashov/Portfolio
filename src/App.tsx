import React, { useState, useEffect } from 'react';
import Header from "./components/Header";
import Aside from "./components/Aside";
import BodyContent from "./components/BodyContent";
import LoadingPage from './components/Loading/LoadingPage';

const App = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [openNav, setOpenNav] = useState(false);
    const [isWideScreen, setIsWideScreen] = useState(window.innerWidth >= 768);
    useEffect(() => {

        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        // Window resize listener to update isWideScreen
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
                    <header className="absolute top-0 w-full z-40">
                        <Header setOpenNav={setOpenNav} />
                    </header>
                    <div className="flex flex-1 overflow-hidden">
                        <main className="flex-1 overflow-y-auto">
                            <BodyContent />
                        </main>

                        <aside className={`w-2/3  transition-all duration-700 md:w-1/4  fixed md:static right-0   z-30 ${isWideScreen || openNav ? 'translate-x-0': 'translate-x-[100%]'}`}>
                            <Aside />
                        </aside>
                    </div>
                </>
            )}
        </div>
    );
};

export default App;
