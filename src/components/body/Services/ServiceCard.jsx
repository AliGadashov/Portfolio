import "./Services.css";
import {MdKeyboardDoubleArrowRight} from "react-icons/md";

const ServiceCard = ({index, skill, details}) => {
    return (
        <div
            className="card py-10  flex flex-col items-start justify-center px-10 w-full box-border bg-darkPrimary text-white font-semibold border-black border z-30">

            {/* Animasiya ilə dairə */}
            <div
                className="animationCircle border border-textHover rounded-full flex items-center justify-center relative stop-animation hover:cursor-pointer">
                <span className="text-4xl font-medium">{index}</span>
                <div
                    className="absolute border border-textHover rounded-full animate-expandBorderForCircle delay-0"></div>
                <div
                    className="absolute border border-textHover rounded-full animate-expandBorderForCircle delay-200"></div>
                <div
                    className="absolute border border-textHover rounded-full animate-expandBorderForCircle delay-400"></div>
            </div>

            <div className="mt-8">
                <span className="text-xl font-light text-nowrap">{skill}</span>
                <div className="bg-textHover w-full h-px mt-2"></div>
            </div>

            <ul className="mt-4 list-disc ">
                {details.map((detail, idx) => (
                    <li key={idx} className="mt-2 flex items-center font-extralight">
                         <span className="mr-2 text-white">
                            <MdKeyboardDoubleArrowRight/>
                         </span>
                        {detail}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ServiceCard;
