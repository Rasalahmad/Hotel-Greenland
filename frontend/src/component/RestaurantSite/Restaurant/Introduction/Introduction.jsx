import React from "react";
import "../Restaurant/Restaurant.css";

import styled from "styled-components";
import { Link } from "react-router-dom";

const Introduction = () => {
  const restaurant = [
    {
      id: 1,
      title: "Special Menu",
      Description:
        "Special menu set for every special day with special discounts.",
      img: "https://creazilla-store.fra1.digitaloceanspaces.com/icons/3263791/restaurant-menu-icon-sm.png",
      link: "/restaurant/specialMenu",
    },
    {
      id: 2,
      title: "Elegant interior",
      Description: "With a great ambiance, you can test your dishes.",
      img: "https://cdn-icons-png.flaticon.com/512/72/72662.png",
      link: "/restaurant/ourStory",
    },
    {
      id: 3,
      title: "Fresh & Hot Food",
      Description: "Freshness in every bite. Choose healthy and fresh foods. ",
      img: "https://static.thenounproject.com/png/3342582-200.png",
      link: "/restaurant/Menu",
    },
  ];
  return (
    <div>
      <Container>
        <Title> Introduction</Title>
        <div className="main-title">
          <h1 className="h1">OUR SERVICES</h1>
        </div>
        <Description>
          Continually serve your high expectations of delicious-tasting food and
          hangout with great experience.
          <br /> Be with Hotal Greenland.
        </Description>
        <div className=" grid lg:grid-cols-3 md:grid-cols-2 gap-5 mx-5 mt-9">
          {restaurant.map((item) => (
            <div key={item?.id} className="mt-5">
              <div className="serv-main-sec ">
                <div className="service-sec-top-bg"></div>
                <div className="service-sec">
                  <i className="rounded-full card-bordered border-white border-4">
                    <img src={item?.img} alt="" />
                  </i>
                  <h6 className="text-3xl font-medium">{item?.title}</h6>
                  <p className="text-xl font-normal mt-2">
                    {item?.Description}
                  </p>
                  <Link to={item?.link}>read more</Link>
                </div>
                <div className="service-sec-bottom-bg"></div>
              </div>
            </div>
          ))}
        </div>

        <Left>
          <Description className="lg:p-5">
            <Title>Discover</Title>
            <Header>OUR STORY</Header>
            <div className="flex justify-between mb-6">
              <div>
                <p className="text-sm md:text-xl lg:w-[480px] lg:text-xl">
                  We are perfectly positioned to meet this demand, offering our
                  guests an extraordinary health experience they have never
                  tasted. We can confidently claim that our menu is unlike
                  anything else offered in the industry.
                </p>
              </div>
            </div>
            <Link
              to="/restaurant/ourStory"
              className="underline text-lg text-gray-600 cursor-pointer"
            >
              LEARN MORE
            </Link>
          </Description>
          <ImageContainer>
            <img
              className="image"
              src="http://wahabali.com/work/pearl-demo/images/our-story.jpg"
              alt=""
            />
          </ImageContainer>
        </Left>

        {/*OUR STORY..............................  */}

        <Left>
          <ImageContainer>
            <img
              className="image"
              src="http://wahabali.com/work/pearl-demo/images/today-special.jpg"
              alt=""
            />
          </ImageContainer>
          <Description className="lg:p-5 mt-8">
            <Title>Today’s</Title>
            <Header>SPECIALS FOOD</Header>
            <div className="flex justify-between lg:w-[480px] mt-10">
              <div>
                <p className="text-sm md:text-xl  lg:text-xl">
                  Blue Cheese Crackers with Grapes
                </p>
              </div>
              <div>
                <p className="text-sm md:text-xl  lg:text-xl">$12</p>
              </div>
            </div>
            <Bottombordar />
            <Item>Chicken / Grapes / Pizza / Cheese / Herbs</Item>
          </Description>
        </Left>
      </Container>
    </div>
  );
};

export default Introduction;

const Container = styled.div`
  width: 95%;
  margin: auto;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Title = styled.div`
  font-size: 60px;
  font-family: "Great Vibes";
  text-align: center;
  margin-top: 60px;
`;

const Left = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 40px;
  padding: 100px 50px;
  @media (max-width: 768px) {
    flex-direction: column;
    padding: 30px 15px;
  }
`;

const Header = styled.div`
  background: url(http://wahabali.com/work/pearl-demo/images/heading-dark.png)
    no-repeat center 80px;
  letter-spacing: 4px;
  padding: 0 0 70px 0;
  margin: 40px 0 0 0;
  font-size: 50px;
  @media (max-width: 640px) {
    background: url(http://wahabali.com/work/pearl-demo/images/heading-dark.png)
      no-repeat center 80px;
    font-size: 35px;
    letter-spacing: 0;
    margin-bottom: 50px;
  }
`;

const ImageContainer = styled.div`
  flex: 1;
  width: 100%;
  .image {
    border-radius: ${({ isMobile }) =>
      isMobile ? "0px 40px 0 40px" : "40px 0 40px 0"};
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
      rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
      rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
  }
`;
const Description = styled.div`
  font-size: 23px;
  line-height: 40px;
  padding: 3px 35px 35px 35px;
  text-align: center;
  color: gray;
`;
const Bottombordar = styled.div`
  border-bottom: solid 1px #cccccc;
  display: block;
  padding: 0 0 14px 0;
`;
const Item = styled.div`
  text-align: left;
  font-size: 16px;
  color: #878787;
  display: block;
  margin: 14px 0 0 0;
  font-family: "Source Sans Pro", sans-serif;
`;
