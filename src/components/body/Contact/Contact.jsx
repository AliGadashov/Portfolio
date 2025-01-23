import SectionWrapper from "../SectionWrapper";

import {FiMail, FiMapPin, FiPhoneCall} from "react-icons/fi";
import {CiFacebook, CiLinkedin} from "react-icons/ci";

import {FaXTwitter} from "react-icons/fa6";
const Contact = () => {

    return (<SectionWrapper
        name={"CONTACT"}
        className="flex flex-col justify-center gap-8">
        {/* Upper Section */}
        <div className="text-start border-l-2 border-black pl-10 py-6 px-6 relative select-none"
             data-content="Contact">
            <h2 className="text-2xl font-bold mb-4 select-none">Let's Get in touch</h2>
            <h2 className="text-7xl font-bold mb-4 select-none">Contact me</h2>
        </div>

        <div className="flex flex-row items-center w-full justify-between ">
            <div className="flex flex-row align-middle gap-5">
                <div className="w-20 h-20 p-7 text-5xl border-black border text-darkPrimary rounded-full flex justify-center items-center">
                    <FiPhoneCall/>
                </div>
                <p className="flex items-center">
                    +994 55 826 62 82
                </p>
            </div>
            <div  className="flex flex-row align-middle gap-5">
                <div className="w-20 h-20 p-7 text-5xl border-black border text-darkPrimary rounded-full flex justify-center items-center">
                    <FiMail/>
                </div>
                <p className="flex items-center">
                    ali.gadashovv@gmail.com
                </p>
            </div>
            <div className="flex flex-row align-middle gap-5">
                <div className="w-20 h-20 p-7 text-5xl border-black border text-darkPrimary rounded-full flex justify-center items-center">
                    <FiMapPin/>
                </div>
                <p className="flex items-center">
                    Azerbaijan, Baku
                </p>
            </div>

            <div className="flex items-center flex-row w-1/6 align-middle justify-between ">
                <a href="https://www.linkedin.com/in/alasgar-gadashov/" className="w-14 h-14 p-4 text-5xl border-black border rounded-full flex justify-center items-center transition hover:bg-black text-darkPrimary hover:text-bgColor ">
                    <CiFacebook/>
                </a>
                <a href="https://www.linkedin.com/in/alasgar-gadashov/" className="w-14 h-14 p-4 text-5xl border-black border rounded-full flex justify-center items-center transition hover:bg-black text-darkPrimary hover:text-bgColor">
                    <CiLinkedin/>
                </a>
                <a href="https://www.linkedin.com/in/alasgar-gadashov/" className="w-14 h-14 p-4 text-5xl border-black border rounded-full flex justify-center items-center transition hover:bg-black text-darkPrimary hover:text-bgColor">
                    <FaXTwitter/>
                </a>
            </div>
        </div>

        <div className="mt-24 flex flex-col gap-10">
            <h2 className="mb-10 text-4xl font-bold  select-none">Leave a Message</h2>
            <div className="flex flex-row justify-between gap-10 w-2/3">
                <div className="flex flex-col w-1/2">
                    <span className="text-xl font-normal mb-4  select-none">Name</span>
                    <input className="h-14 bg-transparent border-b border-darkPrimary placeholder:text-gray-700 outline-0  focus:outline-none" placeholder="Your name"></input>
                </div>
                <div  className="flex flex-col w-1/2">
                    <span className="text-xl font-normal mb-4  select-none">Email</span>
                    <input className="h-14 bg-transparent border-b border-darkPrimary placeholder:text-gray-700 outline-0  focus:outline-none" placeholder="Your e-mail"></input>
                </div>
            </div>
            <div className="flex flex-col w-2/3">
                <span className="text-xl font-normal mb-4  select-none">Message</span>
                <textarea className="h-14 bg-transparent border-b border-darkPrimary placeholder:text-gray-700 outline-0  focus:outline-none" placeholder="Your message"></textarea>
            </div>
            <button className="border border-black rounded-full w-36 h-36 text-2xl transition hover:bg-black hover:text-bgColor">
                Submit
            </button>
        </div>

    </SectionWrapper>);
};

export default Contact;
