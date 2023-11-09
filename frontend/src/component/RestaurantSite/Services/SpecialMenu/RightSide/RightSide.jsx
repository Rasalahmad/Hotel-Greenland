import React from "react";
import { FaShoppingBasket } from "react-icons/fa";
import styled from "styled-components";
const RightSide = ({ data }) => {
  const rightData = data.filter((val, i) => i === 3 || i === 4 || i === 5);
  const dish_title = "Blue Cheese Crackers with Grapes";

  return (
    <div>
      {rightData.map((item) => (
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
                <div className=" flex justify-between items-center lg:w-[480px] ">
                  <div>
                    <p className=" md:text-2xl  lg:text-xl font-semibold text-lg">
                      {dish_title}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm md:text-xl  lg:text-xl lg:ml-[-220px]">
                      ৳{item1?.price}
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

export default RightSide;

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
