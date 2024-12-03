import React from 'react';
import Header from "./components/Header";
import Aside from "./components/Aside";
import BodyContent from "./components/BodyContent";

const App = () => (
    <div className="App h-screen flex flex-col">
        <header className="sticky top-0 w-full z-10">
            <Header />
        </header>
        <div className="flex flex-1 overflow-hidden">
            <main className="flex-1 overflow-y-auto">
                <BodyContent />
                <BodyContent />
                <BodyContent />
                <BodyContent />
                <BodyContent />
                <BodyContent />

            </main>
            <aside className="w-1/4 bg-gray-100 border-l border-gray-300 overflow-y-auto">
                <Aside />
            </aside>
        </div>
    </div>
);

export default App;
