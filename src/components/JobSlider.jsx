import React, { useState } from "react";
import JobCard from "./JobCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const JobsSlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        swipeToSlide: true,
        responsive: [
            {
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true,
                },
            },
            {
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true,
                },
            },
        ],
    };
    const sliderCards = [
        {
            key: "card1",
            role: "Senior software engineeer",
            position: "bg-indigo-100",
            location: "You get a promotion at work",
            salary:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",

        },
        {
            key: "card2",
            role: "intern",
            position: "bg-indigo-100",
            location: "You get a promotion at work",
            salary:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
        },
        {
            key: "card3",
            role: "junior softwre engineer",
            position: "bg-indigo-100",
            location: "You get a promotion at work",
            salary:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
        },
        {
            key: "card4",
            position: "bg-indigo-100",
            location: "You get a promotion at work",
            salary:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
        },
        {
            position: "bg-indigo-100",
            location: "You get a promotion at work",
            salary:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
        },
        {
            key: "card6",
            position: "bg-indigo-100",
            location: "You get a promotion at work",
            salary:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
        },

    ];
    return (
        <Slider {...settings} >
            {sliderCards.map((card) => (
                <div key={card.key}>
                    <div data-aos="fade-left" data-aos-duration="1200" className="flex m-auto   w-auto">
                        <div >
                            <div className="flex space-x-5  p-6">
                                <JobCard
                                    role={card.role}
                                    position={card.position}
                                    location={card.location}
                                    salary={card.salary}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </Slider>
    );
};

export default JobsSlider; 
