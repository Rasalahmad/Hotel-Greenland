import React from "react";
import styled from "styled-components";
import HotelSlider from "../../../component/Carousel/Hotel/HotelSlider";
import RoomCard from "../../../component/RoomCard/RoomCard";
import'./Room.css'
export const Rooms = () => {
  const data = [
    {
      id: 1,
      title: "Family Special Room",
      desc: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question Marks and devious Semikoli, but the Little Blind Text didn’t listen. She packed her seven versalia, put her initial into the belt and made herself on the way. When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown",
      price: 1800,
      bed: "2 family beds",
      guests: 4,
      space: 80,
      view: "City View",
      hasAc: true,
      images: [
        "https://i.ibb.co/LhYrjgc/Whats-App-Image-2023-02-13-at-8-38-40-PM.jpg",
        "https://a6e8z9v6.stackpathcdn.com/hotale/resort/wp-content/uploads/sites/2/2020/10/paul-postema-mr0Dp231IEw-unsplash.jpg",
        "https://a6e8z9v6.stackpathcdn.com/hotale/resort/wp-content/uploads/sites/2/2021/12/shutterstock_324822821.jpg",
        "https://a6e8z9v6.stackpathcdn.com/hotale/resort/wp-content/uploads/sites/2/2021/12/single-room-gallery-img.jpg",
      ],
    },
    {
      id: 2,
      title: "Family Special Room",
      desc: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question Marks and devious Semikoli, but the Little Blind Text didn’t listen. She packed her seven versalia, put her initial into the belt and made herself on the way. When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown",
      price: 1200,
      bed: "2 family beds",
      guests: 4,
      space: 80,
      view: "City View",
      hasAc: false,
      images: [
        "https://i.ibb.co/q08zWn3/Whats-App-Image-2023-02-13-at-8-38-39-PM-1.jpg",
        "https://a6e8z9v6.stackpathcdn.com/hotale/resort/wp-content/uploads/sites/2/2020/10/paul-postema-mr0Dp231IEw-unsplash.jpg",
        "https://a6e8z9v6.stackpathcdn.com/hotale/resort/wp-content/uploads/sites/2/2021/12/shutterstock_324822821.jpg",
        "https://a6e8z9v6.stackpathcdn.com/hotale/resort/wp-content/uploads/sites/2/2021/12/single-room-gallery-img.jpg",
      ],
    },
    {
      id: 3,
      title: "Family Special Room",
      desc: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question Marks and devious Semikoli, but the Little Blind Text didn’t listen. She packed her seven versalia, put her initial into the belt and made herself on the way. When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown",
      price: 1600,
      bed: "2 king begs",
      guests: 4,
      space: 80,
      view: "City View",
      hasAc: true,
      images: [
        "https://i.ibb.co/Jtz964H/Whats-App-Image-2023-02-13-at-8-38-39-PM.jpg",
        "https://a6e8z9v6.stackpathcdn.com/hotale/resort/wp-content/uploads/sites/2/2020/10/paul-postema-mr0Dp231IEw-unsplash.jpg",
        "https://a6e8z9v6.stackpathcdn.com/hotale/resort/wp-content/uploads/sites/2/2021/12/shutterstock_324822821.jpg",
        "https://a6e8z9v6.stackpathcdn.com/hotale/resort/wp-content/uploads/sites/2/2021/12/single-room-gallery-img.jpg",
      ],
    },
    {
      id: 4,
      title: "Family Special Room",
      desc: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question Marks and devious Semikoli, but the Little Blind Text didn’t listen. She packed her seven versalia, put her initial into the belt and made herself on the way. When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown",
      price: 1500,
      bed: "2 king begs",
      guests: 4,
      space: 80,
      view: "City View",
      hasAc: true,
      images: [
        "https://i.ibb.co/44PNhBh/Whats-App-Image-2023-02-13-at-8-38-38-PM.jpg",
        "https://a6e8z9v6.stackpathcdn.com/hotale/resort/wp-content/uploads/sites/2/2020/10/paul-postema-mr0Dp231IEw-unsplash.jpg",
        "https://a6e8z9v6.stackpathcdn.com/hotale/resort/wp-content/uploads/sites/2/2021/12/shutterstock_324822821.jpg",
        "https://a6e8z9v6.stackpathcdn.com/hotale/resort/wp-content/uploads/sites/2/2021/12/single-room-gallery-img.jpg",
      ],
    },
  ];

  // talimul...........................................


  return (
    <div >
          <Content>
            <Title>Our Rooms.</Title>
            <Description>
              A wonderful serenity has taken possession of my entire soul, like
              these sweet mornings of spring which I enjoy with my whole heart. I am
              alone, and feel the charm of existence in this spot, which was created
              for the bliss of soul.
            </Description>
          </Content>
          <Slider className="bg-image">
            <RoomCard  />
          </Slider>
    </div>
  );
};

const Title = styled.div`
  font-size: 60px;
  font-family: "Great Vibes";
`;

const Description = styled.div`
  font-size: 23px;
  line-height: 40px;
  padding: 35px;
  color: gray;
`;

const Content = styled.div`
  max-width: 760px;
  text-align: center;
  margin: auto;
  padding-top: 100px;
`;

const Slider = styled.div`
  width: 90%;
  margin: auto;
`;

