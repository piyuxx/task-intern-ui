import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SliderCard from "./SliderCard";

const SliderComponent = () => {
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
      bgColor: "bg-indigo-100",
      title: "You get a promotion at work",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      emoji: "😃",
    },
    {
      key: "card2",
      bgColor: "bg-red-100",
      title: "You argue with a friend",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      emoji: "😠",
    },
    {
      key: "card3",
      tilted: true,
      bgColor: "bg-purple-500",
      text: "text-white",
      title: "You get a promotion at work",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      emoji: "😔",
    },
    {
      key: "card4",
      bgColor: "bg-orange-200",
      title: "You get a promotion at work",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      emoji: "😳",
    },
    {
      key: "card5",
      bgColor: "bg-green-100",
      title: "You get a promotion at work",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      emoji: "🙂",
    },
    {
      key: "card6",
      tilted: true,
      bgColor: "bg-rose-400",
      text: "text-white",
      title: "You get a promotion at work",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      emoji: "😟",
    },
    {
      key: "card7",
      bgColor: "bg-red-100",
      title: "You get a promotion at work",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      emoji: "😑",
    },
  ];

  return (
    <Slider {...settings} >
      {sliderCards.map((card) => (
        <div key={card.key}>
          <div data-aos="fade-left" className="flex m-auto ">

            <div className="flex space-x-10  p-6">
              <SliderCard
                bgColor={card.bgColor}
                title={card.title}
                content={card.content}
                emoji={card.emoji}
                tilted={card.tilted}
                text={card.text}
              />
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default SliderComponent;
