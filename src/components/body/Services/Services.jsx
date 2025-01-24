import React from "react";
import Slider from "react-slick";
import "./Services.css";
import SectionWrapper from "../SectionWrapper";
import ServiceCard from "./ServiceCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SectionHeader from "../SectionHeader";


const Services = () => {

    const settings = {
        dots: true,
        dotsClass: "slick-dots custom-dots",
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                },
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                },
            },
        ],
        prevArrow: null,
        nextArrow: null,
    };

    const serviceDetails = [
        {
            index: 1,
            skill: "Web Development",
            details: ["HTML", "CSS", "JavaScript", "React"],
        },
        {
            index: 2,
            skill: "Mobile Development",
            details: ["Flutter", "React Native", "Swift", "Kotlin"],
        },
        {
            index: 3,
            skill: "UI/UX Design",
            details: ["Figma", "Adobe XD", "Prototyping", "Wireframes"],
        },
        {
            index: 4,
            skill: "Cloud Computing",
            details: ["AWS", "Azure", "Google Cloud", "Docker"],
        },
    ];


    return (
        <SectionWrapper
            name={"MY SERVICES"}
            className="flex flex-col justify-center gap-8">
            {/* Upper Section */}

            <SectionHeader headerContent={"My Services"} headerTitle={"How I can help your next project"} headerMainTitle={"What I do"} />

            <Slider {...settings} className="services-slider">
                {serviceDetails.map((service) => (
                    <ServiceCard
                        key={service.index}
                        index={service.index}
                        skill={service.skill}
                        details={service.details}
                    />
                ))}
            </Slider>
        </SectionWrapper>
    );
};

export default Services;
