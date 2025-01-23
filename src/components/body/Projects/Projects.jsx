import SectionWrapper from "../SectionWrapper";

const Projects = () => {

    return (<SectionWrapper
        name={"PROJECTS"}
        className="flex flex-col justify-center gap-8">
        {/* Upper Section */}
        <div className="text-start border-l-2 border-black pl-10 py-6 px-6 relative select-none"
             data-content="Projects">
            <h2 className="text-2xl font-bold mb-4 select-none">Some of my most recent projects</h2>
            <h2 className="text-7xl font-bold mb-4 select-none">My Featured Projects</h2>
        </div>


    </SectionWrapper>);
};

export default Projects;
