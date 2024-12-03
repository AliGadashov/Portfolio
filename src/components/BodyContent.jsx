import React from 'react';

const BodyContent = () => {
    return (
        <div
            className="bg-[#FFDB67] text-black p-6 overflow-y-scroll"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }} // Firefox və IE üçün
        >
            <style>
                {`
                    div::-webkit-scrollbar {
                        display: none; /* Chrome, Safari və Opera üçün */
                    }
                `}
            </style>
            <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">My Work</h2>
                <div className="grid grid-cols-2 gap-6">
                    <WorkItem title="Website Design" description="Lorem ipsum dolor." />
                    <WorkItem title="Branding" description="Lorem ipsum dolor." />
                    <WorkItem title="Mobile App" description="Lorem ipsum dolor." />
                    <WorkItem title="Social Media" description="Lorem ipsum dolor." />
                </div>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">My Services</h2>
                <ul className="space-y-2">
                    <li>Web Design</li>
                    <li>Branding</li>
                    <li>Mobile App Development</li>
                    <li>Social Media Management</li>
                </ul>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">About Me</h2>
                <p>Lorem ipsum dolor sit amet.</p>
            </section>
        </div>
    );
};

const WorkItem = ({ title, description }) => (
    <div className="bg-[#FFDB67] text-black shadow-md rounded-lg p-4">
        <h3 className="text-lg font-bold mb-2">{title}</h3>
        <p>{description}</p>
    </div>
);

export default BodyContent;
