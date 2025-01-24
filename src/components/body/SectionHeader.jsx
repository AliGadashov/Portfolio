const SectionHeader = ({headerContent, headerTitle, headerMainTitle }) => {

    return (
        <div className="text-start border-l-2 border-black pl-10 py-6 px-6 relative select-none "
             data-content={headerContent}>
            <h2 className="text-2xl font-bold mb-4 select-none">{headerTitle}</h2>
            <h2 className="text-7xl font-bold mb-4 select-none custom-sm-sh:text-5xl">{headerMainTitle}</h2>
        </div>
        )
};

export default SectionHeader;
