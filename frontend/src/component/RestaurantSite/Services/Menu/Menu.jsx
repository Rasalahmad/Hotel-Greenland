import React from "react";
import { FaShoppingBasket } from "react-icons/fa";
import styled from "styled-components";
import Info from "../../Restaurant/Info/Info";
import { useGetRestaurantQuery } from "../../../../features/restaurant/restaurantApi";
const Menu = () => {
  // const data2 = [
  //   {
  //     id: 101,
  //     title: "Starter",
  //     tiny_title: "WHAT IN THE BEGINNING",
  //     img: "http://wahabali.com/work/pearl-demo/images/menu/dish-img1.jpg",
  //     dishes: [
  //       {
  //         id: 1,
  //         title: "Blue Cheese Crackers with Grapes",
  //         price: "12",
  //         dish_tag: "Chicken / Grapes / Pizza / Cheese / Herbs",
  //       },
  //       {
  //         id: 2,
  //         title: "Blue Cheese Crackers with Grapes",
  //         price: "12",
  //         dish_tag: "Chicken / Grapes / Pizza / Cheese / Herbs",
  //       },
  //     ],
  //   },
  //   {
  //     id: 102,
  //     title: "Main Course",
  //     tiny_title: "HOT DISHES",
  //     img: "http://wahabali.com/work/pearl-demo/images/menu/dish-img4.jpg",
  //     dishes: [
  //       {
  //         id: 1,
  //         title: "Blue Cheese Crackers with Grapes",
  //         price: "12",
  //         dish_tag: "Chicken / Grapes / Pizza / Cheese / Herbs",
  //       },
  //       {
  //         id: 2,
  //         title: "Blue Cheese Crackers with Grapes",
  //         price: "12",
  //         dish_tag: "Chicken / Grapes / Pizza / Cheese / Herbs",
  //       },
  //     ],
  //   },
  //   {
  //     id: 103,
  //     title: "Soups & Salads",
  //     tiny_title: "SIDE DISHES",
  //     img: "http://wahabali.com/work/pearl-demo/images/menu/dish-img5.jpg",
  //     dishes: [
  //       {
  //         id: 1,
  //         title: "Blue Cheese Crackers with Grapes",
  //         price: "12",
  //         dish_tag: "Chicken / Grapes / Pizza / Cheese / Herbs",
  //       },
  //       {
  //         id: 2,
  //         title: "Blue Cheese Crackers with Grapes",
  //         price: "12",
  //         dish_tag: "Chicken / Grapes / Pizza / Cheese / Herbs",
  //       },
  //     ],
  //   },
  //   {
  //     id: 104,
  //     title: "Drinks & Desserts",
  //     tiny_title: "MOST DELICIOUS",
  //     img: "http://wahabali.com/work/pearl-demo/images/menu/dish-img6.jpg",
  //     dishes: [
  //       {
  //         id: 1,
  //         title: "Blue Cheese Crackers with Grapes",
  //         price: "12",
  //         dish_tag: "Chicken / Grapes / Pizza / Cheese / Herbs",
  //       },
  //       {
  //         id: 2,
  //         title: "Blue Cheese Crackers with Grapes",
  //         price: "12",
  //         dish_tag: "Chicken / Grapes / Pizza / Cheese / Herbs",
  //       },
  //     ],
  //   },
  // ];
  const {
    data: restaurantData,
    isLoading,
    isError,
    error,
  } = useGetRestaurantQuery();

const dish_title = "Blue Cheese Crackers with Grapes";
let content = null;
if (isLoading) {
  content = 
 
 <p className="text-center">Loading.............</p>
} else if (!isLoading && isError) {
  content = <p>{error}</p>;
} else if (!isLoading && !isError && restaurantData?.data?.length === 0) {
  content = <p>No Room Available</p>;
} else {
  const data2 = restaurantData.data.filter((val, i) => i === 0||i===1||i===2||i===5);
  console.log(data2);
  content = (
    <div>
      <Container>
        
        {data2.map((item) => (
        <div key={item?.id}>
          <Title>{item?.title}</Title>
          <Header1>{item?.tiny_title}</Header1>
          <div className="">
          {item?.dishes.map((item1,i) => (          
            <div key={item1.id} className="lg:mx-0 md:mx-0  mx-4">
             {
              i%2===0?(
                <div className="lg:flex md:flex gap-3 justify-center my-8 w-full items-center">
                 <div className=" ">
                <img
                   className=" lg:h-32 md:h-32 "
                  src={item1?.img}
                  alt=""
                />
              </div>

              < div className=" ">
                <div className="flex justify-between items-center gap-10">
                  <div>
                    <p className="md:text-2xl  lg:text-xl font-semibold text-lg ">
                      {dish_title}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm md:text-xl  lg:text-xl ">
                      ${item1?.price}
                    </p>
                  </div>
                </div>
                <Bottombordar />
                <div className="flex justify-between items-center gap-2">
                  <Item>{item1?.dish_tag}</Item>
                  <FaShoppingBasket></FaShoppingBasket>
                </div>
              </div>
                </div>
              ):(
                < div className="lg:flex  md:flex gap-3 justify-center items-center my-6 w-full ">
              <div className="">
              <div className="flex justify-between items-center gap-10">
                  <div>
                    <p className="md:text-2xl  lg:text-xl font-semibold text-lg ">
                      {dish_title}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm md:text-xl  lg:text-xl ">
                      ${item1?.price}
                    </p>
                  </div>
                </div>
                <Bottombordar />
                <div className="flex  justify-between items-center gap-2">
                  <Item>{item1?.dish_tag}</Item>
                  <FaShoppingBasket></FaShoppingBasket>
                </div>
              </div>
              <div className=" ">
                <img
                 className=" lg:h-32 md:h-32"
                  src={item1?.img}
                  alt=""
                />
              </div>
                </div>
              )
             }
            </div>
          ))}
          </div>
        </div>
      ))}
        
      </Container>
    </div>
  );
}
return content;
};

export default Menu;

const Container = styled.div`
width: 95%;
margin: auto;
text-align: center;
@media (max-width: 768px) {
  width: 100%;
}
`;

const Flex = styled.div`
display: flex;
gap: 40px;
justify-content: center;
@media (max-width: 768px) {
  display: block;
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
