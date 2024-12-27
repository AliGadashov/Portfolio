import React from 'react';

interface CircleProgressProps {
    percentage: number;
    label: string;
}

const CircleProgress: React.FC<CircleProgressProps> = ({ percentage, label }) => {
    const radius = 60;
    const strokeWidth = 4; // Dairənin xətt qalınlığı
    const circumference = 2 * Math.PI * radius; // Dairənin çevrəsi
    const offset = circumference - (percentage / 100) * circumference;
    return (
        <div className="flex flex-col items-center">
            <svg
                width="170" // SVG-nin eni
                height="170" // SVG-nin hündürlüyü
                viewBox="0 0 140 140" // Görünüş qutusu, radiusa uyğun olaraq artırılıb
                className="transform -rotate-90"
            >
                {/* Xarici dairə */}
                <circle
                    cx="70"
                    cy="70"
                    r={radius}
                    stroke="#ffffff"
                    strokeWidth={strokeWidth}
                    fill="transparent"
                />
                {/* Dolma dairəsi */}
                <circle
                    cx="70"
                    cy="70"
                    r={radius}
                    stroke="#37113e"
                    strokeWidth={strokeWidth}
                    fill="transparent"
                    strokeDasharray={circumference}
                    strokeDashoffset={offset}
                    style={{ transition: 'stroke-dashoffset 0.5s ease' }}
                />
                {/* Faiz göstəricisi */}
                <text
                    x="70"
                    y="70"
                    textAnchor="middle"
                    dominantBaseline="middle"
                    fontSize="18px"
                    fill="#000"
                    className="font-medium"
                    transform="rotate(90, 70, 70)"
                    style={{ userSelect: 'none' }}
                >
                    {percentage}%
                </text>
            </svg>
            {/* Aşağıdakı düymə */}
            <button
                className="cursor-auto mt-4 py-2 px-6 border border-darkPrimary text-black rounded-full transition-all duration-500 hover:bg-darkPrimary hover:text-textHover select-none">
                {label}
            </button>

        </div>
    );
};

export default CircleProgress;
