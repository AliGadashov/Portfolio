import './LoadingPage.css';
import React from "react";

const LoadingPage = () => {
    return (
        <div className="bg-bgColor flex flex-col items-center justify-center h-screen">
            <div className="loading-content">
                <div className="planet">
                    <div className="ring"></div>
                    <div className="cover-ring"></div>
                    <div className="spots">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoadingPage;
