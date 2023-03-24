import React from "react";
import styled from "styled-components";
import { FaShoppingBasket } from "react-icons/fa";
const LeftSide = () => {
  const data1 = [
    {
      id: 101,
      title: "Main Cousre",
      tiny_title: "HOT DISHES",
      dishes: [
        {
          id: 1,
          img: "http://wahabali.com/work/pearl-demo/images/menu/dish-img1.jpg",
          title: "Blue Cheese Crackers with Grapes",
          price: "12",
          dish_tag: "Chicken / Grapes / Pizza / Cheese / Herbs",
        },
        {
          id: 2,
          img: "http://wahabali.com/work/pearl-demo/images/menu/dish-img5.jpg",
          title: "Blue Cheese Crackers with Grapes",
          price: "12",
          dish_tag: "Chicken / Grapes / Pizza / Cheese / Herbs",
        },
        {
          id: 3,
          img: "http://wahabali.com/work/pearl-demo/images/menu/dish-img3.jpg",
          title: "Blue Cheese Crackers with Grapes",
          price: "12",
          dish_tag: "Chicken / Grapes / Pizza / Cheese / Herbs",
        },
        {
          id: 4,
          img: "http://wahabali.com/work/pearl-demo/images/menu/dish-img4.jpg",
          title: "Blue Cheese Crackers with Grapes",
          price: "12",
          dish_tag: "Chicken / Grapes / Pizza / Cheese / Herbs",
        },
      ],
    },
    {
      id: 102,
      title: "Soups & Salads",
      tiny_title: "SIDE DISHES",
      dishes: [
        {
          id: 1,
          img: "http://wahabali.com/work/pearl-demo/images/menu/dish-img4.jpg",
          title: "Blue Cheese Crackers with Grapes",
          price: "12",
          dish_tag: "Chicken / Grapes / Pizza / Cheese / Herbs",
        },
        {
          id: 2,
          img: "http://wahabali.com/work/pearl-demo/images/menu/dish-img1.jpg",
          title: "Blue Cheese Crackers with Grapes",
          price: "12",
          dish_tag: "Chicken / Grapes / Pizza / Cheese / Herbs",
        },
      ],
    },
    {
      id: 103,
      title: "Chef’s Pick",
      tiny_title: "OF THE DAY",
      dishes: [
        {
          id: 1,
          img: "http://wahabali.com/work/pearl-demo/images/menu/dish-img4.jpg",
          title: "Blue Cheese Crackers with Grapes",
          price: "12",
          dish_tag: "Chicken / Grapes / Pizza / Cheese / Herbs",
        },
        {
          id: 2,
          img: "http://wahabali.com/work/pearl-demo/images/menu/dish-img1.jpg",
          title: "Blue Cheese Crackers with Grapes",
          price: "12",
          dish_tag: "Chicken / Grapes / Pizza / Cheese / Herbs",
        },
      ],
    },
  ];
  return (
    <div>
      {data1.map((item) => (
        <div key={item?.id}>
          <Title>{item?.title}</Title>
          <Header1>{item?.tiny_title}</Header1>

          {item?.dishes.map((item1) => (
            <div key={item1.id} className="lg:grid grid-cols-12">
              <div className=" col-start-1 col-end-4">
                <img
                  className="lg:h-24  px-9 mb-4 lg:px-0 lg:mb-0"
                  src={item1?.img}
                  alt=""
                />
              </div>

              <Description className=" col-span-9">
                <div className="flex  justify-between items-center lg:w-[480px] ">
                  <div>
                    <p className=" md:text-2xl  lg:text-xl font-semibold text-lg">
                      {item1?.title}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm md:text-xl  lg:text-xl lg:ml-[-220px]">
                      ${item1?.price}
                    </p>
                  </div>
                </div>
                <Bottombordar />
                <div className="flex justify-between items-center">
                  <Item>{item1?.dish_tag}</Item>

                  <FaShoppingBasket></FaShoppingBasket>
                </div>
              </Description>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default LeftSide;

const Title = styled.div`
  font-size: 60px;
  font-family: "Great Vibes";
  text-align: center;
  margin-top: 60px;
`;
const Header1 = styled.div`
  background: url(http://wahabali.com/work/pearl-demo/images/heading-dark.png)
    no-repeat center 80px;
  letter-spacing: 4px;
  padding: 0 0 70px 0;
  font-size: 50px;
  text-transform: uppercase;
  @media (max-width: 640px) {
    background: url(http://wahabali.com/work/pearl-demo/images/heading-dark.png)
      no-repeat center 80px;
    font-size: 35px;
    letter-spacing: 0;
    margin-bottom: 50px;
  }
`;

const Bottombordar = styled.div`
  border-bottom: solid 1px #cccccc;
  display: block;
  padding: 0 0 14px 0;
  width: 100%;
`;
const Description = styled.div`
  font-size: 23px;
  line-height: 40px;
  padding: 3px 35px 35px 35px;
  text-align: center;
  color: gray;
`;
const Item = styled.div`
  text-align: left;
  font-size: 15px;
  color: #878787;
  display: block;
  margin: 5px 0 0 0;
  font-family: "Source Sans Pro", sans-serif;
  @media (max-width: 768px) {
    font-size: 14px;
    text-align: center;
  }
`;