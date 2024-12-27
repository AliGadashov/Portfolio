import React, { useState, useEffect } from 'react';

interface LayeredNumberProps {
    value: number;
}

const LayeredNumber: React.FC<LayeredNumberProps> = ({ value }) => {

    return (
        <div className="relative text-9xl font-black">
            <div
                className="absolute"
                style={{
                    transform: 'translate(-14px, -6px)',
                    WebkitTextStroke: '1px black',
                    WebkitTextFillColor: 'transparent',
                    userSelect: 'none'
                }}
            >
                {value}
            </div>
            <div
                className="absolute"
                style={{
                    transform: 'translate(-7px, -3px)',
                    WebkitTextStroke: '1px black',
                    WebkitTextFillColor: 'transparent',
                    userSelect: 'none'
            }}
            >
                {value}
            </div>
            <div style={{ position: 'relative', userSelect: 'none'  }}>
                {value}
            </div>
        </div>
    );
};

export default LayeredNumber;