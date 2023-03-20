import React from 'react';
import styled from "styled-components";
const SpecialMenu = () => {
    return (
        <div>
            <Container>
                <Flex>
                    <div>
                        <Title>Main Course</Title>
                        <Header1>HOT DISHES</Header1>
                        <div className='grid grid-cols-12'>
                            <div className=' col-start-1 col-end-3'>
                                <img
                                    className="h-24"
                                    src="http://wahabali.com/work/pearl-demo/images/menu/dish-img1.jpg"
                                    alt=""
                                />
                            </div>

                            <Description className=" col-span-9">

                                <div className="flex justify-between lg:w-[480px] ">
                                    <div>
                                        <p className="text-sm md:text-lg  lg:text-lg">
                                            Blue Cheese Crackers with Grapes
                                        </p>
                                    </div>
                                    <div>
                                        <p className="text-sm md:text-xl  lg:text-xl ml-[-220px]">$12</p>
                                    </div>
                                </div>
                                <Bottombordar />
                                <Item>Chicken / Grapes / Pizza / Cheese / Herbs</Item>
                            </Description>
                        </div>
                    </div>



                    <div>
                        <Title>Starter</Title>
                        <Header1>BEGINNING</Header1>
                        <div className='grid grid-cols-12'>
                            <div className=' col-start-1 col-end-3'>
                                <img
                                    className="h-24"
                                    src="http://wahabali.com/work/pearl-demo/images/menu/dish-img1.jpg"
                                    alt=""
                                />
                            </div>

                            <Description className=" col-span-9">

                                <div className="flex justify-between lg:w-[480px] ">
                                    <div>
                                        <p className="text-sm md:text-lg  lg:text-lg">
                                            Blue Cheese Crackers with Grapes
                                        </p>
                                    </div>
                                    <div>
                                        <p className="text-sm md:text-xl  lg:text-xl ml-[-220px]">$12</p>
                                    </div>
                                </div>
                                <Bottombordar />
                                <Item>Chicken / Grapes / Pizza / Cheese / Herbs</Item>
                            </Description>
                        </div>
                    </div>
                </Flex>
            </Container>
        </div>
    );
};

export default SpecialMenu;

const Container = styled.div`
  width: 95%;
  margin: auto;
text-align:center;
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
  @media (max-width: 640px) {
    background: url(http://wahabali.com/work/pearl-demo/images/heading-dark.png)
      no-repeat center 80px;
    font-size: 35px;
    letter-spacing: 0;
    margin-bottom: 50px;
  }
`;
const Flex = styled.div`
display: flex;
justify-content: space-around;
@media (max-width: 768px) {
    display: block;
  }
`
const Bottombordar = styled.div`
  border-bottom: solid 1px #cccccc;
  display: block;
  padding: 0 0 14px 0;
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
  font-size: 13px;
  color: #878787;
  display: block;
  margin: 10px 0 0 0;
  font-family: "Source Sans Pro", sans-serif;
`;