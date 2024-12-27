import React, { useState, useEffect } from 'react';
import Header from "./components/Header";
import Aside from "./components/Aside";
import BodyContent from "./components/BodyContent";
import LoadingPage from './components/Loading/LoadingPage';

const App = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="App h-screen flex flex-col">
            {isLoading ? (
                <LoadingPage />
            ) : (
                <>
                    <header className="absolute top-0 w-full z-10">
                        <Header />
                    </header>
                    <div className="flex flex-1 overflow-hidden">
                        <main className="flex-1 overflow-y-auto">
                            <BodyContent />
                        </main>
                        <aside className="w-1/4">
                            <Aside />
                        </aside>
                    </div>
                </>
            )}
        </div>
    );
};

export default App;
