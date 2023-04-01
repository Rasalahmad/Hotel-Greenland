import React from "react";
import { FaShoppingBasket } from "react-icons/fa";
import styled from "styled-components";
import Info from "../../Restaurant/Info/Info";
const Menu = () => {
  const data2 = [
    {
      id: 101,
      title: "Starter",
      tiny_title: "WHAT IN THE BEGINNING",
      img: "http://wahabali.com/work/pearl-demo/images/menu/dish-img1.jpg",
      dishes: [
        {
          id: 1,
          title: "Blue Cheese Crackers with Grapes",
          price: "12",
          dish_tag: "Chicken / Grapes / Pizza / Cheese / Herbs",
        },
        {
          id: 2,
          title: "Blue Cheese Crackers with Grapes",
          price: "12",
          dish_tag: "Chicken / Grapes / Pizza / Cheese / Herbs",
        },
      ],
    },
    {
      id: 102,
      title: "Main Course",
      tiny_title: "HOT DISHES",
      img: "http://wahabali.com/work/pearl-demo/images/menu/dish-img4.jpg",
      dishes: [
        {
          id: 1,
          title: "Blue Cheese Crackers with Grapes",
          price: "12",
          dish_tag: "Chicken / Grapes / Pizza / Cheese / Herbs",
        },
        {
          id: 2,
          title: "Blue Cheese Crackers with Grapes",
          price: "12",
          dish_tag: "Chicken / Grapes / Pizza / Cheese / Herbs",
        },
      ],
    },
    {
      id: 103,
      title: "Soups & Salads",
      tiny_title: "SIDE DISHES",
      img: "http://wahabali.com/work/pearl-demo/images/menu/dish-img5.jpg",
      dishes: [
        {
          id: 1,
          title: "Blue Cheese Crackers with Grapes",
          price: "12",
          dish_tag: "Chicken / Grapes / Pizza / Cheese / Herbs",
        },
        {
          id: 2,
          title: "Blue Cheese Crackers with Grapes",
          price: "12",
          dish_tag: "Chicken / Grapes / Pizza / Cheese / Herbs",
        },
      ],
    },
    {
      id: 104,
      title: "Drinks & Desserts",
      tiny_title: "MOST DELICIOUS",
      img: "http://wahabali.com/work/pearl-demo/images/menu/dish-img6.jpg",
      dishes: [
        {
          id: 1,
          title: "Blue Cheese Crackers with Grapes",
          price: "12",
          dish_tag: "Chicken / Grapes / Pizza / Cheese / Herbs",
        },
        {
          id: 2,
          title: "Blue Cheese Crackers with Grapes",
          price: "12",
          dish_tag: "Chicken / Grapes / Pizza / Cheese / Herbs",
        },
      ],
    },
  ];
  return (
    <div>
      <Container>
        <div>
          {data2.map((item, i) => (
            <div key={item?.id}>
              <Title>{item?.title}</Title>
              <Header1>{item?.tiny_title}</Header1>

              <div className="lg:flex justify-center">
                {i % 2 === 0 ? (
                  <>
                    <div className="">
                      <img
                        className=" lg:h-56 px-9 mb-4 lg:px-0 lg:mb-0"
                        src={item.img}
                        alt=""
                      />
                    </div>
                    <div className="gird grid-cols-1">
                      {item?.dishes.map((item1) => (
                        <Description key={item1?.id} className="">
                          <div className=" flex justify-between  items-center lg:w-[480px] ">
                            <div>
                              <p className=" md:text-2xl  lg:text-xl font-semibold text-lg">
                                {item1?.title}
                              </p>
                            </div>
                            <div>
                              <p className="text-sm md:text-xl  lg:text-xl ">
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
                      ))}
                    </div>
                  </>
                ) : (
                  <>
                    <div className="gird grid-cols-1">
                      {item?.dishes.map((item1) => (
                        <Description key={item1?.id} className="">
                          <div className=" flex justify-between  items-center lg:w-[480px] ">
                            <div>
                              <p className=" md:text-2xl  lg:text-xl font-semibold text-lg">
                                {item1?.title}
                              </p>
                            </div>
                            <div>
                              <p className="text-sm md:text-xl  lg:text-xl ">
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
                      ))}
                    </div>

                    <div className="">
                      <img
                        className=" lg:h-56 px-9 mb-4 lg:px-0 lg:mb-0"
                        src={item.img}
                        alt=""
                      />
                    </div>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
        <Info></Info>
      </Container>
    </div>
  );
};

export default Menu;
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

const Header1 = styled.div`
  background: url(http://wahabali.com/work/pearl-demo/images/heading-dark.png)
    no-repeat center 80px;
  letter-spacing: 4px;
  padding: 0 0 70px 0;
  font-size: 50px;
  text-align: center;
  text-transform: uppercase;
  @media (max-width: 640px) {
    background: url(http://wahabali.com/work/pearl-demo/images/heading-dark.png)
      no-repeat center 80px;
    font-size: 30px;
    letter-spacing: 0;
    margin-bottom: 50px;
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
  width: 100%;
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
