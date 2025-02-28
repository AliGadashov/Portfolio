import SectionWrapper from "../SectionWrapper";

import {FiMail, FiMapPin, FiPhoneCall} from "react-icons/fi";
import {CiFacebook, CiLinkedin} from "react-icons/ci";

import {FaXTwitter} from "react-icons/fa6";
import SectionHeader from "../SectionHeader";
import React from "react";

const Contact = () => {

    return (<SectionWrapper
        name={"CONTACT"}
        className="flex flex-col justify-center gap-8">
        {/* Upper Section */}

        <SectionHeader headerContent={"Contact"} headerTitle={"Let's Get in touch"} headerMainTitle={"Contact me"}/>

        <div className=" flex flex-col gap-10">
            <div className="flex flex-col gap-10">
                <div className="flex flex-row align-middle gap-5">
                    <div
                        className="w-20 h-20 p-7 text-5xl border-black border text-darkPrimary rounded-full flex justify-center items-center">
                        <FiPhoneCall/>
                    </div>
                    <p className="flex items-center">
                        +994 55 826 62 82
                    </p>
                </div>
                <div className="flex flex-row align-middle gap-5">
                    <div
                        className="w-20 h-20 p-7 text-5xl border-black border text-darkPrimary rounded-full flex justify-center items-center">
                        <FiMail/>
                    </div>
                    <p className="flex items-center">
                        ali.gadashovv@gmail.com
                    </p>
                </div>
                <div className="flex flex-row gap-5">
                    <div
                        className="w-20 h-20 p-7 text-5xl border-black border text-darkPrimary rounded-full flex justify-center items-center">
                        <FiMapPin/>
                    </div>
                    <p className="flex items-center">
                        Azerbaijan, Baku
                    </p>
                </div>
            </div>

            <div
                className="flex flex-row w-fit align-middle justify-between border border-black rounded-full ">
                <div className="border-r border-black rounded-full p-2">
                    <a href="https://www.linkedin.com/in/alasgar-gadashov/"
                       className="w-14 h-14 p-4 text-5xl border-black border rounded-full flex justify-center items-center transition hover:bg-black text-darkPrimary hover:text-bgColor ">
                        <CiFacebook/>
                    </a>
                </div>
                <div className="border border-black rounded-full p-2">
                    <a href="https://www.linkedin.com/in/alasgar-gadashov/"
                       className="w-14 h-14 p-4 text-5xl border-black border rounded-full flex justify-center items-center transition hover:bg-black text-darkPrimary hover:text-bgColor">
                        <CiLinkedin/>
                    </a>
                </div>
                <div className="border-l border-black rounded-full p-2">
                    <a href="https://www.linkedin.com/in/alasgar-gadashov/"
                       className="w-14 h-14 p-4 text-5xl border-black border rounded-full flex justify-center items-center transition hover:bg-black text-darkPrimary hover:text-bgColor">
                        <FaXTwitter/>
                    </a>
                </div>
            </div>
        </div>

        <div className="flex flex-col gap-10">
            <h2 className="mb-10 text-4xl font-bold  select-none">Leave a Message</h2>
            <div className="flex flex-row justify-between gap-10 w-full sm:w-2/3 ">
                <div className="flex flex-col w-1/3">
                    <span className="text-xl font-normal mb-4  select-none">Name</span>
                    <input
                        className="h-14 bg-transparent border-b border-darkPrimary placeholder:text-gray-700 outline-0 focus:outline-none"
                        placeholder="Your name"></input>
                </div>
                <div className="flex flex-col w-1/3">
                    <span className="text-xl font-normal mb-4 select-none">Email</span>
                    <input
                        className="h-14 bg-transparent border-b border-darkPrimary placeholder:text-gray-700 outline-0 focus:outline-none"
                        placeholder="Your e-mail"></input>
                </div>
            </div>
            <div className="flex flex-col w-full sm:w-2/3">
                <span className="text-xl font-normal mb-4  select-none">Message</span>
                <textarea
                    className="h-14 bg-transparent border-b border-darkPrimary placeholder:text-gray-700 outline-0 focus:outline-none"
                    placeholder="Your message"></textarea>
            </div>
            <button
                className="border border-black rounded-full w-36 h-36 text-2xl transition hover:bg-black hover:text-bgColor">
                Submit
            </button>
        </div>

    </SectionWrapper>);
};

export default Contact;
