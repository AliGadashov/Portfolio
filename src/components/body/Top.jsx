import React from 'react';
import Typewriter from 'typewriter-effect';
import "./Top.css"

const Top = () => {
    return (
        <div id="TOP" className="flex flex-row items-center justify-between py-48 text-black p-6">

            {/*Top text*/}
            <div className="text-start">
                <p className="text-4xl font-semibold">Hello, I'm a</p>
                <h1 className="text-6xl font-bold my-4">
                    <Typewriter
                        options={{
                            strings: ['Java Developer', 'Back-end Engineer', 'Problem Solver', 'Team Player', 'Quick Learner'],
                            autoStart: true,
                            loop: true,
                        }}
                    />
                </h1>
                <p className="text-2xl font-semibold mb-8">Based in Baku, Azerbaijan</p>

                {/* Buttons */}
                <div className="flex space-x-4">
                    <button className="bg-black text-white py-3 px-7 rounded-full font-medium text-lg">
                        View My Work
                    </button>
                    <button
                        className="bg-[#FFDB67] text-black py-3 px-7 rounded-full font-medium text-lg border border-black hover:bg-black hover:text-white transition">
                        Contact Me
                    </button>

                </div>
            </div>

            {/*Profile image*/}
            <div
                className="w-96 h-96 border-2 border-black rounded-full flex items-center justify-center relative stop-animation hover:cursor-pointer">
                <img src="me2.webp" className="rounded-full"/>

                <div
                    className="absolute w-96 h-96 border-2 border-black rounded-full animate-expandBorder delay-0"></div>
                <div
                    className="absolute w-96 h-96 border-2 border-black rounded-full animate-expandBorder delay-200"></div>
                <div
                    className="absolute w-96 h-96 border-2 border-black rounded-full animate-expandBorder delay-400"></div>
                <div
                    className="absolute w-96 h-96 border-2 border-black rounded-full animate-expandBorder delay-600"></div>
                <div
                    className="absolute w-96 h-96 border-2 border-black rounded-full animate-expandBorder delay-800"></div>
                <div
                    className="absolute w-96 h-96 border-2 border-black rounded-full animate-expandBorder delay-1000"></div>
            </div>

        </div>
    );
};

export default Top;
